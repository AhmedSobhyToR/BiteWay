import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesCardComponent } from './advantages-card.component';

describe('AdvantagesCardComponent', () => {
  let component: AdvantagesCardComponent;
  let fixture: ComponentFixture<AdvantagesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantagesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
