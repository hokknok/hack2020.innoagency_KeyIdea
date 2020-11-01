import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from './layout-footer.component';



@NgModule({
    declarations: [LayoutFooterComponent],
    exports: [
        LayoutFooterComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LayoutFooterModule { }
