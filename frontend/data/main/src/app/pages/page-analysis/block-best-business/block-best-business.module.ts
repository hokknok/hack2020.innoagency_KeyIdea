import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockBestBusinessComponent } from './block-best-business.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../shared/pipes/pipes.module';



@NgModule({
    declarations: [BlockBestBusinessComponent],
    exports: [
        BlockBestBusinessComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class BlockBestBusinessModule { }
