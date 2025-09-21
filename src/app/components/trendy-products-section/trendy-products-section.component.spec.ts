import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyProductsSectionComponent } from './trendy-products-section.component';

describe('TrendyProductsSectionComponent', () => {
  let component: TrendyProductsSectionComponent;
  let fixture: ComponentFixture<TrendyProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendyProductsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendyProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
