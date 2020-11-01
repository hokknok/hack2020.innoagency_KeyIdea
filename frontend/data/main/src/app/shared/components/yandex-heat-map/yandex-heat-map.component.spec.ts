import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YandexHeatMapComponent } from './yandex-heat-map.component';

describe('YandexHeatMapComponent', () => {
  let component: YandexHeatMapComponent;
  let fixture: ComponentFixture<YandexHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YandexHeatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YandexHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
