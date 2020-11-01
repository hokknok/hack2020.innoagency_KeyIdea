import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [LayoutHeaderComponent],
    exports: [
        LayoutHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LayoutHeaderModule { }
