import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YandexMapsComponent } from './yandex-maps.component';



@NgModule({
    declarations: [YandexMapsComponent],
    exports: [
        YandexMapsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class YandexMapsModule { }
