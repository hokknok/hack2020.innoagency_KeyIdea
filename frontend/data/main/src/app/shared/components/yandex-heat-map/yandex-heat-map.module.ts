import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YandexHeatMapComponent } from './yandex-heat-map.component';



@NgModule({
    declarations: [YandexHeatMapComponent],
    exports: [
        YandexHeatMapComponent
    ],
    imports: [
        CommonModule
    ]
})
export class YandexHeatMapModule { }
