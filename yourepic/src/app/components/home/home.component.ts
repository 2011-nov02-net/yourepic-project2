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
    this.oktaAuth.isAuthenticated().then((isAuthenticated) => {
      this.updateAuthState(isAuthenticated)
      if (isAuthenticated) {
        this.oktaAuth.getUser().then(user => {
          this.userService.getUserByEmail(user.userEmail).then(user => {
            this.user = user
            user.role.name === "Publisher" ? this.isPublisher = true : this.isPublisher = false
            user.role.name === "Reader" ? this.isReader = true : this.isReader = false
            user.role.name === "unassigned" ? this.isUnassigned = true : this.isUnassigned = false
          }).catch(response => {
            if (response.status === 404) {
              this.oktaAuth.getUser().then(user => {
                this.userService.createUser({
                  name: user.fullName,
                  email: user.userEmail,
                  role: {
                    id: 3,
                    name: 'unassigned'
                  }
                }).subscribe()
              })
            }
          });
        })
      }
    });
  }

  updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

}
