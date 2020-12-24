import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenEpicComponent } from './open-epic.component';

describe('OpenEpicComponent', () => {
  let component: OpenEpicComponent;
  let fixture: ComponentFixture<OpenEpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenEpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
