import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import User from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;
  isReader = false;
  isPublisher = false;
  isUnassigned = false;

  user!: User;

  constructor(private oktaAuth: OktaAuthService, private userService: UserService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) =>
      this.updateAuthState(isAuthenticated));

  }

  ngOnInit(): void {
  }

  updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

}
