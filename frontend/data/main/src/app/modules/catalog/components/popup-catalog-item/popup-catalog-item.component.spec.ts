import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCatalogItemComponent } from './popup-catalog-item.component';

describe('PopupCatalogItemComponent', () => {
  let component: PopupCatalogItemComponent;
  let fixture: ComponentFixture<PopupCatalogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCatalogItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCatalogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
