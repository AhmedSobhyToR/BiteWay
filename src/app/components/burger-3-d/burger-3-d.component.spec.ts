import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burger3DComponent } from './burger-3-d.component';

describe('Burger3DComponent', () => {
  let component: Burger3DComponent;
  let fixture: ComponentFixture<Burger3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Burger3DComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Burger3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
