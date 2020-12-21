import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';

import { ChapterService } from './chapter.service';

describe('ChapterService', () => {
  let service: ChapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      { provide: HttpClient, useValue: {} },
      { provide: OktaAuthService, useValue: {} },
    ]
  });
    service = TestBed.inject(ChapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
