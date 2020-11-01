import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import { MapPinItem } from '../../interfaces/map-pin-item';
import { UntilDestroy } from '@ngneat/until-destroy';
import { distinctUntilChanged } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { BehaviorSubject } from 'rxjs';


@UntilDestroy()
@Component({
  selector: 'app-yandex-heat-map',
  templateUrl: './yandex-heat-map.component.html',
  styleUrls: ['./yandex-heat-map.component.scss']
})
export class YandexHeatMapComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public readonly mapCenter: [number, number];
  @Input() public readonly mapZoom = 10;
  @Input() public pinDataList: MapPinItem[] = [];
  @Input() public heatMapData: [number, number][];
  @Output() public readonly afterMapInit = new EventEmitter<boolean>();
  public readonly rndNumber = Math.round(Math.random() * 100000).toString();
  public readonly id = 'yandex-map-' + this.rndNumber;

  private readonly mapCenterDefault = [55.76, 37.62];
  private mapInstance: any;
  private readonly pinSrcDefault = '/f/media/ui/circle.svg';
  private readonly pinSize = [10, 10];
  private readonly pinOffset = [-5, -5];
  private readonly zoomEvent = new BehaviorSubject<number>(0);
  private heatMapRadius = 10;
  // private readonly heatMapRadius = new BehaviorSubject<number>(10);
  public heatMapOptions = new BehaviorSubject({
    radius: 10,
  });


  constructor() { }


  // =========================================================================
  // --- Lifecycle Hooks -----------------------------------------------------
  // -------------------------------------------------------------------------

  public ngOnInit(): void {
    this.loadMap();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.mapInstance && changes['pinDataList']) {
      this.addHeatMap();
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
        center: this.mapCenter || this.mapCenterDefault,
        zoom: this.mapZoom,
        controls: ['zoomControl', 'typeSelector'],
      }, {
        minZoom: 4,
      });

      this.mapInstance.behaviors.disable('scrollZoom');

      if (this.heatMapData && this.heatMapData.length) {
        this.addHeatMap();
        this.startZoomEventListener();
      }

      // this.addPlaceMarks();

      this.afterMapInit.emit(true);
    });
  }


  /**
   * Метод добавляет на карты пины, переданные через инпут компонента
   */
  private addPlaceMarks(): void {
    const ymaps = window['ymaps'];
    if (!ymaps) { return; }

    if (this.pinDataList && this.pinDataList.length) {

      this.pinDataList.forEach(pin => {

        const hintLayout = ymaps.templateLayoutFactory.createClass(pin.hint || '', {
          // Определяем метод getShape, который
          // будет возвращать размеры макета хинта.
          // Это необходимо для того, чтобы хинт автоматически
          // сдвигал позицию при выходе за пределы карты.
          getShape: function () {
            const el = this.getElement();
            let result = null;
            if (el) {
              const firstChild = el.firstChild;
              result = new ymaps.shape.Rectangle(
                new ymaps.geometry.pixel.Rectangle([
                  [0, 0],
                  [firstChild.offsetWidth, firstChild.offsetHeight]
                ])
              );
            }
            return result;
          }
        });

        const placemark = new ymaps.Placemark(pin.map, {}, {
          cursor: 'default',
          hintLayout: pin.hint ? hintLayout : null,
          iconLayout: 'default#image',
          iconImageHref: pin.pinSrcDefault || this.pinSrcDefault,
          iconImageSize: pin.pinSize || this.pinSize,
          iconImageOffset: this.pinOffset,
        });

        this.mapInstance.geoObjects.add(placemark);

      });
    }
  }


  private addHeatMap(): void {

    const ymaps = window['ymaps'];
    if (!ymaps) { return; }

    this.heatMapOptions
      .pipe(untilDestroyed(this))
      .subscribe(options => {
        console.log(options);
      });

    const heatmap = new ymaps.Heatmap(this.heatMapData, {
      // Радиус влияния.
      radius: this.heatMapRadius,
      // Нужно ли уменьшать пиксельный размер точек при уменьшении зума. False - не нужно.
      dissipating: false,
      // Прозрачность тепловой карты.
      opacity: 0.8,
      // Прозрачность у медианной по весу точки.
      intensityOfMidpoint: 0.2,
      // JSON описание градиента.
      gradient: {
        0.1: 'rgba(128, 255, 0, 0.7)',
        0.2: 'rgba(255, 255, 0, 0.8)',
        0.7: 'rgba(234, 72, 58, 0.9)',
        1.0: 'rgba(162, 36, 25, 1)'
      }
    });
    // console.log(hearMapData);
    heatmap.setMap(this.mapInstance);
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
        this.heatMapRadius = 20;

        this.heatMapData['radius'] = 30;
        // console.log('changePinByZoom', zoom);
        // console.log('zoomEvent', this.zoomEvent);
        // this.changePinByZoom(zoom)
      });
  }

}
