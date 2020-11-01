import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearestMetroComponent } from './nearest-metro.component';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
    declarations: [NearestMetroComponent],
    exports: [
        NearestMetroComponent
    ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class NearestMetroModule { }
