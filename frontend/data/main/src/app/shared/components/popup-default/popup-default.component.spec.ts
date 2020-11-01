import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDefaultComponent } from './popup-default.component';

describe('PopupDefaultComponent', () => {
  let component: PopupDefaultComponent;
  let fixture: ComponentFixture<PopupDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
