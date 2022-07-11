import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineBlockComponent } from './airline-block.component';

describe('AirlineBlockComponent', () => {
  let component: AirlineBlockComponent;
  let fixture: ComponentFixture<AirlineBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
