import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLinesComponent } from './portfolio-lines.component';

describe('PortfolioLinesComponent', () => {
  let component: PortfolioLinesComponent;
  let fixture: ComponentFixture<PortfolioLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
