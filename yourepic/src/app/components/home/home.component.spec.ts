import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { NEVER } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const fakeAuthService = {
      $authenticationState: NEVER,
      isAuthenticated(): Promise<boolean> {
        return Promise.resolve(false);
      },
    };
    const fakeUserService = {
      
    }
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {provide: OktaAuthService, useValue: fakeAuthService},
        {provide: UserService, useValue: fakeUserService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
