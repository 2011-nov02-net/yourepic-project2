import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(private oktaAuth: OktaAuthService,
    private categoryService: CategoryService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => 
    this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
    
    this.oktaAuth.isAuthenticated().then((isAuthenticated) => this.updateAuthState(isAuthenticated));
  }
  
  updateAuthState(isAuthenticated: boolean) {
    
    this.isAuthenticated = isAuthenticated;
    if (isAuthenticated) {
      this.oktaAuth.getUser().then(console.log);
      this.categoryService.getCategories().then(console.log)
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
