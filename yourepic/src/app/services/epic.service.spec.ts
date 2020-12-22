import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';

import { EpicService } from './epic.service';

describe('EpicService', () => {
  let service: EpicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} },
      ]
    });
    service = TestBed.inject(EpicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
