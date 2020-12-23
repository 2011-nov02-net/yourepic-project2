import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import EpicService from 'src/app/services/epic.service';

import { ChaptersSidebarComponent } from './chapters-sidebar.component';

describe('ChaptersSidebarComponent', () => {
  let component: ChaptersSidebarComponent;
  let fixture: ComponentFixture<ChaptersSidebarComponent>;

  beforeEach(async () => {
    const fakeEpicService = {

    };
    const fakeActivatedRoute = {
      route: {
        snapshot: {
          paramMap:{}
        }
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ ChaptersSidebarComponent ],
      providers: [
        {provide: EpicService, useValue: fakeEpicService},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        
      ]
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
