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

  isReader = false;
  isPublisher = false;
  isUnassigned = false;

  user!: string

  constructor(private oktaAuth: OktaAuthService, private userService: UserService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) =>
      this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => {
      this.updateAuthState(isAuthenticated)
      if (isAuthenticated) {
        this.oktaAuth.getUser().then(user => {
          this.userService.getUserByEmail(user.userEmail).subscribe(user => {
            this.updateRole(user.role.name);
            this.user = user.name
          });

        })
      }
    });
  }

  updateRole(role: string){
    role === "Publisher" ? this.isPublisher = true : this.isPublisher = false
    role === "Reader" ? this.isReader = true : this.isReader = false
    role === "unassigned" ? this.isUnassigned = true : this.isUnassigned = false
  }
  updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  title = 'yourepic';
}
