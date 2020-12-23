import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadNavComponent } from './read-nav.component';

describe('ReadNavComponent', () => {
  let component: ReadNavComponent;
  let fixture: ComponentFixture<ReadNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
