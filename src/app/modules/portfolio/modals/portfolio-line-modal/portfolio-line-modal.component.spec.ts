import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLineModalComponent } from './portfolio-line-modal.component';

describe('PortfolioLineModalComponent', () => {
  let component: PortfolioLineModalComponent;
  let fixture: ComponentFixture<PortfolioLineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioLineModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
