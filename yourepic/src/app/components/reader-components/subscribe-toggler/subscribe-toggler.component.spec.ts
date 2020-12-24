import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeTogglerComponent } from './subscribe-toggler.component';

describe('SubscribeTogglerComponent', () => {
  let component: SubscribeTogglerComponent;
  let fixture: ComponentFixture<SubscribeTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
