import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { NEVER } from 'rxjs';
import EpicService from 'src/app/services/epic.service';
import { UserService } from 'src/app/services/user.service';

import { CreateEpicComponent } from './create-epic.component';

describe('CreateEpicComponent', () => {
  let component: CreateEpicComponent;
  let fixture: ComponentFixture<CreateEpicComponent>;

  beforeEach(async () => {
    const fakeAuthService = {
      $authenticationState: NEVER,
      isAuthenticated(): Promise<boolean> {
        return Promise.resolve(false);
      },
    };
    const fakeEpicService = {
      
    }
    await TestBed.configureTestingModule({
      declarations: [ CreateEpicComponent ],
      providers: [
        {provide: EpicService, useValue: fakeEpicService},
        {provide: OktaAuthService, useValue: fakeAuthService},
        {provide: UserService, useValue: {}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
