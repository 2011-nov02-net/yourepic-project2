import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEpicComponent } from './read-epic.component';

describe('ReadEpicComponent', () => {
  let component: ReadEpicComponent;
  let fixture: ComponentFixture<ReadEpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadEpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
