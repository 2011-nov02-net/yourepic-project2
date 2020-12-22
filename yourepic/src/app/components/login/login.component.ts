import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() updatedAuth = new EventEmitter();
  isAuthenticated = false;

  constructor(private oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => 
    this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
    
    this.oktaAuth.isAuthenticated().then((isAuthenticated) => this.updateAuthState(isAuthenticated));
  }
  
  updateAuthState(isAuthenticated: boolean) {
    
    this.isAuthenticated = isAuthenticated;
    this.updatedAuth.emit(isAuthenticated)
  }

  login() {
    this.oktaAuth.signInWithRedirect();
  }

  logout() {
    this.oktaAuth.signOut();
  }
}
