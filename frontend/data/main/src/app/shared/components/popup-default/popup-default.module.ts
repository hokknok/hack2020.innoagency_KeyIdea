import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupDefaultComponent } from './popup-default.component';


@NgModule({
  declarations: [PopupDefaultComponent],
  exports: [
    PopupDefaultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PopupDefaultModule { }
