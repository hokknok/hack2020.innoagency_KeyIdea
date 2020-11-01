import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberFormatPipe } from './number-format/number-format.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NumberFormatPipe
  ],
  exports: [
    NumberFormatPipe
  ]
})
export class PipesModule { }
