import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home.component';
import { ItemListModule } from '../../shared/components/item-list/item-list.module';
import { YandexMapsModule } from '../../shared/components/yandex-maps/yandex-maps.module';
import { YandexHeatMapModule } from '../../shared/components/yandex-heat-map/yandex-heat-map.module';


@NgModule({
  declarations: [PageHomeComponent],
  imports: [
    CommonModule,
    ItemListModule,
    YandexMapsModule,
    YandexHeatMapModule,
    RouterModule.forChild([{path: '', component: PageHomeComponent}])
  ]
})
export class PageHomeModule {
}
