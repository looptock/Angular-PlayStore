import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPricingPrimaryComponent } from './card-pricing-primary.component';

describe('CardPricingPrimaryComponent', () => {
  let component: CardPricingPrimaryComponent;
  let fixture: ComponentFixture<CardPricingPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPricingPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPricingPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
