import { NgModule } from '@angular/core';
import { TmplWidgetNameComponent } from './tmpl-widget-name.component';
import { WidgetTitleBarModule } from '@gspwidget/widget-devkit';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TmplWidgetNameComponent],
  imports: [
    WidgetTitleBarModule,
    CommonModule
  ],
  exports: [TmplWidgetNameComponent]
})
export class TmplWidgetNameModule { }
