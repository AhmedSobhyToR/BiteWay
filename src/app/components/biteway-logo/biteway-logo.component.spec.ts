import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitewayLogoComponent } from './biteway-logo.component';

describe('BitewayLogoComponent', () => {
  let component: BitewayLogoComponent;
  let fixture: ComponentFixture<BitewayLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitewayLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitewayLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
