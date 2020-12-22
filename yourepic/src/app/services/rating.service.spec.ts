import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';

import { RatingService } from './rating.service';

describe('RatingService', () => {
  let service: RatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} },
        { provide: OktaAuthService, useValue: {} },
      ]
    });
    service = TestBed.inject(RatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
