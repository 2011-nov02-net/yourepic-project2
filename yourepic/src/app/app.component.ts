import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'
import { UserinfoService } from './services/userinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAuthenticated = false;
  name: string | undefined
  constructor(private oktaAuth: OktaAuthService, private userInfoService: UserinfoService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => 
    this.updateAuthState(isAuthenticated));
  }

  runUserService(): void {
    
  }

  async ngOnInit() {
  	this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.name = userClaims.firstName;
    }
  }
  
  updateAuthState(isAuthenticated: boolean) {
    
    this.isAuthenticated = isAuthenticated;
    if (isAuthenticated) {
      this.oktaAuth.getUser().then(user=>{console.log(user)});
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
