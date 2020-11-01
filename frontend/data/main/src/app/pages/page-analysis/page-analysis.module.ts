import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageAnalysisComponent } from './page-analysis.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PieChartModule } from '../../shared/components/pie-chart/pie-chart.module';
import { BarChartModule } from '../../shared/components/bar-chart/bar-chart.module';
import { YandexMapsModule } from '../../shared/components/yandex-maps/yandex-maps.module';
import { YandexHeatMapModule } from '../../shared/components/yandex-heat-map/yandex-heat-map.module';
import { BlockBestBusinessModule } from './block-best-business/block-best-business.module';
import { NearestMetroModule } from '../../shared/components/nearest-metro/nearest-metro.module';


@NgModule({
  declarations: [PageAnalysisComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PieChartModule,
    BarChartModule,
    YandexMapsModule,
    RouterModule.forChild([{path: '', component: PageAnalysisComponent}]),
    YandexHeatMapModule,
    BlockBestBusinessModule,
    NearestMetroModule,
  ]
})
export class PageAnalysisModule { }
