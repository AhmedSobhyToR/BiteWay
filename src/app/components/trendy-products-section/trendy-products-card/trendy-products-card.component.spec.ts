import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyProductsCardComponent } from './trendy-products-card.component';

describe('TrendyProductsCardComponent', () => {
  let component: TrendyProductsCardComponent;
  let fixture: ComponentFixture<TrendyProductsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendyProductsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendyProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
