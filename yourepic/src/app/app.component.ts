import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'
import User from './interfaces/user';
import { CategoryService } from './services/category.service';
import { UserinfoService } from './services/userinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(private oktaAuth: OktaAuthService, private userInfoService: UserinfoService,) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => 
    this.updateAuthState(isAuthenticated));
  }

  runUserService(): void {
    
    var email = this.userInfoService.getUserEmail().subscribe(user => {
      console.log(user.firstName);
    });
    console.log(email);
  }

  ngOnInit(): void {
    this.oktaAuth.isAuthenticated().then((isAuthenticated) => this.updateAuthState(isAuthenticated));
  }
  
  updateAuthState(isAuthenticated: boolean) {
    
    this.isAuthenticated = isAuthenticated;
    if (isAuthenticated) {
      this.oktaAuth.getUser().then(console.log);
    }
  }

  login() {
    this.oktaAuth.signInWithRedirect();
  }

  logout() {
    
    this.oktaAuth.signOut();
  }
  title = 'yourepic';
}
