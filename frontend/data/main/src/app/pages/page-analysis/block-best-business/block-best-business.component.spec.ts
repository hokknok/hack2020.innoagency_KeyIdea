import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBestBusinessComponent } from './block-best-business.component';

describe('BlockBestBusinessComponent', () => {
  let component: BlockBestBusinessComponent;
  let fixture: ComponentFixture<BlockBestBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockBestBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBestBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
