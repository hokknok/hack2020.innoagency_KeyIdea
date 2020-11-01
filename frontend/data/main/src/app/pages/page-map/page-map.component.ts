import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { BackendService } from 'src/app/shared/services/backend/backend.service';
import { MapPinItem } from '../../shared/interfaces/map-pin-item';
import { MapService } from '../../shared/services/map/map.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MapPointItem } from 'src/app/shared/interfaces/map-point-item';


@UntilDestroy()
@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})
export class PageMapComponent implements OnInit, OnDestroy {
  public pointList: MapPointItem[];
  public heatMapData: [number, number][];
  public mapPinItems: MapPinItem[] = [
    {
      id: 1,
      name: 'item 1',
      map: [55.8077124955766, 37.843035477866]
    }
  ];


  constructor(
    private mapService: MapService,
    private backendService: BackendService,
  ) { }


  public ngOnInit(): void {
    this.loadData();
  }

  public ngOnDestroy(): void {
  }


  private loadData(): void {

  }

}
