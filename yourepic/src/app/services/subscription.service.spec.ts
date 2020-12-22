import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';

import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  let service: SubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} },
        { provide: OktaAuthService, useValue: {} },
      ]
    });
    service = TestBed.inject(SubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
