import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabelPrimaryComponent } from './card-label-primary.component';

describe('CardLabelPrimaryComponent', () => {
  let component: CardLabelPrimaryComponent;
  let fixture: ComponentFixture<CardLabelPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLabelPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLabelPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
