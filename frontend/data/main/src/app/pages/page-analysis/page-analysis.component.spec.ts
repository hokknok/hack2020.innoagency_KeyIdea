import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnalysisComponent } from './page-analysis.component';

describe('PageAnalysisComponent', () => {
  let component: PageAnalysisComponent;
  let fixture: ComponentFixture<PageAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
