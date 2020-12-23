import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { NEVER } from 'rxjs';
import { AppComponent } from './app.component';
import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    const fakeAuthService = {
      $authenticationState: NEVER,
      isAuthenticated(): Promise<boolean> {
        return Promise.resolve(false);
      },
    };
    const fakeUserService = {}
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ], 
      providers: [{ provide: OktaAuthService, useValue: fakeAuthService },
      { provide: UserService, useValue: fakeUserService },

      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
