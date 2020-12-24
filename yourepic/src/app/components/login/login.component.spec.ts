import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { NEVER } from 'rxjs';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    const fakeAuthService = {
      $authenticationState: NEVER,
      isAuthenticated(): Promise<boolean> {
        return Promise.resolve(false);
      },
    };
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: OktaAuthService, useValue: fakeAuthService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
