import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'

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
    debugger
    this.oktaAuth.isAuthenticated().then((isAuthenticated) => this.updateAuthState(isAuthenticated));
  }
  
  updateAuthState(isAuthenticated: boolean) {
    debugger
    this.isAuthenticated = isAuthenticated;
    if (isAuthenticated) {
      this.oktaAuth.getUser().then(console.log);
    }
  }

  login() {
    this.oktaAuth.signInWithRedirect();
  }

  logout() {
    debugger
    this.oktaAuth.signOut();
  }
  title = 'yourepic';
}
