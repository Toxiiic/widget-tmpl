import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmplWidgetNameComponent } from './tmpl-widget-name.component';
import { WidgetTitleBarModule } from '@gspwidget/widget-devkit';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TmplWidgetNameComponent],
  imports: [
    CommonModule,
    WidgetTitleBarModule,
    TranslateModule.forChild()
  ],
  exports: [TmplWidgetNameComponent]
})
export class TmplWidgetNameModule { }
