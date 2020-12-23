import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEpicComponent } from './sub-epic.component';

describe('SubEpicComponent', () => {
  let component: SubEpicComponent;
  let fixture: ComponentFixture<SubEpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubEpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
