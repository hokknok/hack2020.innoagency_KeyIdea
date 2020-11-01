import {
  Component,
  EventEmitter,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2, SimpleChanges
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { MapPinItem } from '../../interfaces/map-pin-item';
import { YandexMapService } from '../../services/yandex-map/yandex-map.service';
import { RivalItem } from '../../interfaces/rival-item';
import { MapPointItem } from '../../interfaces/map-point-item';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-yandex-maps',
  templateUrl: './yandex-maps.component.html',
  styleUrls: ['./yandex-maps.component.scss']
})
export class YandexMapsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public readonly mapCenter: [number, number];
  @Input() public mapZoom = 12;
  @Input() public currentPin: MapPinItem;
  @Input() public rivalList: RivalItem[];
  @Input() public heatMapData: MapPointItem[];
  @Output() public readonly afterMapInit = new EventEmitter<boolean>();

  public readonly rndNumber = Math.round(Math.random() * 100000).toString();
  public readonly id = 'yandex-map-' + this.rndNumber;

  private mapInstance: any;
  private readonly zoomEvent = new BehaviorSubject<number>(0);

  constructor() { }


  // =========================================================================
  // --- Lifecycle Hooks -----------------------------------------------------
  // -------------------------------------------------------------------------

  public ngOnInit(): void {
    this.loadMap();
  }


  public ngOnChanges(changes: SimpleChanges): void {
    if (this.mapInstance && changes['currentPin']) {
      this.mapInstance.geoObjects.removeAll();
      this.addCurrentPoint();
      this.addCircle();
    }

    if (this.mapInstance && changes['rivalList']) {
      this.addRivalList();
      this.addCurrentPoint();
      this.addCircle();
    }
  }


  public ngOnDestroy(): void {
  }


  // =========================================================================
  // --- Публичные и методы шаблона ------------------------------------------
  // -------------------------------------------------------------------------


  // =========================================================================
  // --- Вспомогательные методы ----------------------------------------------
  // -------------------------------------------------------------------------

  private loadMap(): void {

    const ymaps = window['ymaps'];
    ymaps.ready(['Heatmap']).then(() => {
      this.mapInstance = new ymaps.Map(this.id, {
        center: this.mapCenter,
        zoom: this.mapZoom,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
      }, {
        minZoom: 4,
      });

      this.mapInstance.behaviors.disable('scrollZoom');
      this.mapInstance.geoObjects.removeAll();
      this.addCurrentPoint();
      this.addCircle();

      this.startZoomEventListener();

      this.afterMapInit.emit(true);
    });
  }


  private addHeatMap(zoom: number): void {
    const ymaps = window['ymaps'];
    if (!ymaps) { return; }

    let radius = 5;

    if(zoom === 11) {
      radius = 10;
    }

    if(zoom >= 12) {
      radius = 20;
    }

    if(zoom >= 13) {
      radius = 30;
    }

    if(zoom >= 14) {
      radius = 60;
    }

    const heatmap = new ymaps.Heatmap(this.heatMapData, {
      // Радиус влияния.
      radius: radius,
      // Нужно ли уменьшать пиксельный размер точек при уменьшении зума. False - не нужно.
      dissipating: false,
      // Прозрачность тепловой карты.
      opacity: 0.8,
      // Прозрачность у медианной по весу точки.
      intensityOfMidpoint: 0.2,
      // JSON описание градиента.
      gradient: {
        0.1: 'rgba(128, 255, 0, 0.3)',
        0.2: 'rgba(255, 255, 0, 0.4)',
        0.7: 'rgba(234, 72, 58, 0.5)',
        1.0: 'rgba(162, 36, 25, .6)'
      }
    });
    // heatmap.removeAll();
    heatmap.setMap(this.mapInstance);
  }


  private addCircle(): void {
    const ymaps = window['ymaps'];
    if (!ymaps) { return; }

    const myCircle = new ymaps.Circle([
      this.mapCenter,
      3000
    ], {}, {
      fillColor: "#64646430",
      strokeColor: "#646464",
      strokeOpacity: 0.8,
      strokeWidth: 5
    });

    this.mapInstance.geoObjects.add(myCircle);
  }


  private addCurrentPoint(): void {
    const ymaps = window['ymaps'];
    if (!ymaps) { return; }

    const placemark = new ymaps.Placemark(this.currentPin.map, {}, {
      cursor: 'default',
      hintLayout: null,
      iconColor: '#FF0000',
    });

    this.mapInstance.geoObjects.add(placemark);
  }


  private addRivalList(): void {
    const ymaps = window['ymaps'];
    if (!ymaps) { return; }

    if (this.rivalList && this.rivalList.length) {

      const geoObjects = [];

      this.mapInstance.geoObjects.removeAll();

      const cluster = new ymaps.Clusterer({
        preset: 'islands#blueClusterIcons',
        groupByCoordinates: false,
        clusterDisableClickZoom: true,
        clusterHideIconOnBalloonOpen: false,
        geoObjectHideIconOnBalloonOpen: false
      });

      cluster.options.set({
        gridSize: 80,
        clusterDisableClickZoom: true
      });

      this.rivalList.forEach(item => {
        const placeMark = this.addPlaceMark(ymaps, [item.lat, item.lon], item.name);
        geoObjects.push(placeMark);
      });

      cluster.add(geoObjects);
      this.mapInstance.geoObjects.add(cluster);
    }
  }


  /**
   * Метод запускает обработку события изменения зума
   */
  private startZoomEventListener(): void {
    this.zoomEvent.next(this.mapZoom);

    this.mapInstance.events.add('boundschange', e => {
      const newZoom = e.originalEvent.newZoom;

      if (newZoom !== this.zoomEvent.getValue()) {
        this.zoomEvent.next(e.originalEvent.newZoom);
      }
    });

    this.zoomEvent.asObservable()
      .pipe(
        untilDestroyed(this),
        distinctUntilChanged()
      )
      .subscribe(zoom => {
        // this.currentZoom.next(zoom);
        if(this.heatMapData && this.heatMapData.length) {
          this.addHeatMap(zoom);
        }
      });
  }


  private addPlaceMark(ymaps, map, name): void {
    return  new ymaps.Placemark(map, {}, {
      balloonContent: name,
      preset: 'islands#blueCircleIcon',
    });
  }

}
