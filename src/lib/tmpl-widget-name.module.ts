import { NgModule } from '@angular/core';
import { TmplWidgetNameComponent } from './tmpl-widget-name.component';
import { WidgetTitleBarModule } from '@gspwidget/widget-devkit';

@NgModule({
  declarations: [TmplWidgetNameComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [TmplWidgetNameComponent]
})
export class TmplWidgetNameModule { }
