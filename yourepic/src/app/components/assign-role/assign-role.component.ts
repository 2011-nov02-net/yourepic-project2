import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import User from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css']
})
export class AssignRoleComponent implements OnInit {
  isAuthenticated = false;

  constructor(private oktaAuth: OktaAuthService, private userService: UserService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) =>
      this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
  }

  assignReader() {
    this.oktaAuth.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        this.oktaAuth.getUser().then(user => {
          this.userService.getUserByEmail(user.userEmail).subscribe(user => {
            user.role.id = 1
            this.userService.updateUser(user.id, user)
          });
        })
      }
    })
  }

  assignPublisher() {
    this.oktaAuth.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        this.oktaAuth.getUser().then(user => {
          this.userService.getUserByEmail(user.userEmail).subscribe(user => {
            user.role.id = 2
            this.userService.updateUser(user.id, user)
          });
        })
      }
    })
  }

  updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;

  }
}
