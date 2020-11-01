import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMapComponent } from './page-map.component';
import { RouterModule } from '@angular/router';
import { YandexHeatMapModule } from '../../shared/components/yandex-heat-map/yandex-heat-map.module';
import { PieChartModule } from '../../shared/components/pie-chart/pie-chart.module';
import { NearestMetroModule } from '../../shared/components/nearest-metro/nearest-metro.module';



@NgModule({
  declarations: [PageMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PageMapComponent}]),
    YandexHeatMapModule,
    PieChartModule,
    NearestMetroModule
  ]
})
export class PageMapModule { }
