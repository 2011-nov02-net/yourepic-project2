import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular'
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAuthenticated = false;
  name: any;

  constructor(private oktaAuth: OktaAuthService,
    private route: ActivatedRoute) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => 
    this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
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
