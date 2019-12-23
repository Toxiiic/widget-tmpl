import { Component } from '@angular/core';
import { Widget, WidgetBase } from '@gspwidget/widget-devkit';

@Widget({ name:"tmpl-widget-name" })
@Component({
  selector: 'tmpl-widget-name',
  templateUrl: `./tmpl-widget-name.component.html`,
  styleUrls: [`./tmpl-widget-name.component.scss`]
})
export class TmplWidgetNameComponent extends WidgetBase {

  constructor() {
    super()
  }

  ngOnInit() {
  }
}
