import { Component, ViewChild, ElementRef } from '@angular/core';
import "echarts";
import * as echarts from 'echarts';
import { Widget, WidgetBase, Property, PropertyTypes } from '@gspwidget/widget-devkit';

@Widget({name:"tmpl-widget-name"})
@Component({
  selector: 'tmpl-widget-name',
  template: `
  <div class="d-flex flex-column h-100">
    <lib-widget-title-bar
      [title]="title"
      [showMore]="false"
      ></lib-widget-title-bar>
    <div id="main" class="flex-fill" #chart>
    </div>
  </div>
  `,
  styles: []
})
export class TmplWidgetNameComponent extends WidgetBase {
  @Property({
    type: PropertyTypes.Bool,
    displayName: '平滑',
    category: '样式'
  }) smooth: boolean = false

  @Property({
    type: PropertyTypes.Bool,
    displayName: '填充区域',
    category: '样式',
    boolOption: {
      default: true
    }
  }) showArea: boolean = true

  @Property({
    type: PropertyTypes.Enum,
    displayName: '图例种类',
    category: '样式',
    enumOption: {
      default: 'scroll',
      items: [
        { value: 'none', displayName: '不显示' },
        { value: 'plain', displayName: '显示全部' },
        { value: 'scroll', displayName: '超出部分滚动' }
      ]
    }
  }) legendStyle: string = "scroll"

  @Property({
    category: '内容'
  }) tooltipPrefix: string = ""

  @Property({
    category: '内容'
  }) tooltipSuffix: string = ""

  @Property({
    category: '数据',
    displayName: 'X轴',
  }) xField: string = 'month'

  @Property({
    type: PropertyTypes.Object,
    isArray: true,
    displayName: 'Y轴',
    objectOption: {
      default: [], // TODO: 默认值没有限制是否是数组
      objPropertyOptions: [{
        name: 'valueField',
        type: PropertyTypes.Text
      }, {
        name: 'color',
        type: PropertyTypes.Color
      }]
    },
    category: '数据'
  }) yFieldObjs: { valueField: string, color: string }[] = [{
    valueField: 'totalSale', color: '#1f9cfe'
  }, {
    valueField: 'lastYear', color: '#ff7ccd'
  }]

  // TODO: 联查全局

  chartInstance: echarts.ECharts;
  data: []
  @ViewChild("chart") chartContainer:ElementRef;
  
  constructor() {
    super()
  }

  ngOnInit() {
    this.chartInstance = echarts.init(this.chartContainer.nativeElement)
    this.render()
  }
  ngAfterViewInit() {
    this.chartInstance.resize();
  }
  onResized(){
    this.chartInstance.resize();
  }
  /**
   * 如果有数据配置信息，WidgetBase 在构造函数中就开始数据加载。
   * 所以 onGetData() 的初始调用与 ngOnInit() 的调用先后顺序不确定，
   * 所以对于依赖”这两个函数都调用过“的方法（比如 render()），应该在两个函数中都调用一次。
   */
  onGetData (data) {
    console.log('on get data!!', data)
    this.data = data
    this.render()
  }
  onPropertyChange () {
    // 若 dimensions 中过有空串，echarts 从此之后会一直报错不听使唤
    this.yFieldObjs = this.yFieldObjs.filter(c=>!!c.valueField)
    this.render()
  }

  render () {
    if(!this.data || !this.chartInstance) return
    this.chartInstance.setOption({
      dataset: {
        dimensions: [this.xField, ...this.yFieldObjs.map(yField=>yField.valueField)],
        source: this.data
      },
      legend: {
        show: this.legendStyle != 'none',
        type: this.legendStyle == 'none' ? '': this.legendStyle
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#e1f1ff'
          }
        },
        boundaryGap: false
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
            lineStyle: {
              color: '#e1f1ff'
            }
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      series: this.yFieldObjs.map(yField=>{
        return {
          type: 'line',
          smooth: this.smooth,
          // symbol: 'none',
          symbol: 'circle',
          symbolSize: 1,
          areaStyle: {
            color: this.showArea ? new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [
                {offset: 0, color: `${yField.color}7a`},
                {offset: 1, color: `${yField.color}00`}
              ]
            ): 'none'
          },
          lineStyle: {
            color: yField.color,
            width: 2
          },
          itemStyle: {
              color: yField.color
          }
        }
      }),
      grid: {
        left: 40,
        top: 30,
        right: 30,
        bottom: 35
      },
      textStyle: {
        // color: mainColor
        color: 'gray'
      }
    } as echarts.EChartOption)
  }
}
