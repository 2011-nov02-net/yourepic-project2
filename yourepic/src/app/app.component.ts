import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'
import User from './interfaces/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private oktaAuth: OktaAuthService, private userService: UserService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) =>
      this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => {
      this.updateAuthState(isAuthenticated)
      if (isAuthenticated) {
        this.oktaAuth.getUser().then(user => {
          this.userService.getUserByEmail(user.userEmail).subscribe(
            res => this.updateRole(res.role.name),
            err => this.userService.createUser({ name: user.fullName, email: user.userEmail, id: 0, role: { id: 3, name: 'unassigned' } }),
          )
        })
      }
    });
  }

  updateRole(role: string) {
    if (role === "Publisher") {
      this.isPublisher = true
      if (this.router.url === '/') {
        this.router.navigate(['epic']);
      }
    }
    if (role === 'Reader') {
      this.isReader = true
      if (this.router.url === '/') {
        this.router.navigate(['myhome']);
      }
    }
    if (role === "unassigned") {
      this.isUnassigned = true
      if (this.router.url === '/') {
        this.router.navigate(['']);
      }
    }
  }

  updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  title = 'yourepic';
}
