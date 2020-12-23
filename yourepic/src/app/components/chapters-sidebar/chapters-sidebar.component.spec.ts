import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersSidebarComponent } from './chapters-sidebar.component';

describe('ChaptersSidebarComponent', () => {
  let component: ChaptersSidebarComponent;
  let fixture: ComponentFixture<ChaptersSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
