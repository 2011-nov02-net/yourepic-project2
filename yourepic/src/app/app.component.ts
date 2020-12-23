import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'
import User from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(private oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) =>
      this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
    this.oktaAuth.isAuthenticated().then((isAuthenticated) => {
      this.updateAuthState(isAuthenticated)
    });
  }

  updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  title = 'yourepic';
}
