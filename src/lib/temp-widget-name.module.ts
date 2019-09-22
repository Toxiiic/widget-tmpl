import { NgModule } from '@angular/core';
import { TempWidgetNameComponent } from './temp-widget-name.component';
import { WidgetTitleBarModule } from '@toxiic/widget-devkit';

@NgModule({
  declarations: [TempWidgetNameComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [TempWidgetNameComponent]
})
export class TempWidgetNameModule { }
