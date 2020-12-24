import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyNavComponent } from './empty-nav.component';

describe('EmptyNavComponent', () => {
  let component: EmptyNavComponent;
  let fixture: ComponentFixture<EmptyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
