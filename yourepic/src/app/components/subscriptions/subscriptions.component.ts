import { Component, OnInit } from '@angular/core';
import User from 'src/app//interfaces/user'
import Subscription from 'src/app/interfaces/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UserService } from 'src/app/services/user.service'
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  isAuthenticated = false;
  subscriptions : Subscription[] | null = null;
  selectedSub : Subscription | null = null;
  userID : number = 0;

  constructor(private oktaAuth: OktaAuthService, private subscriptionService : SubscriptionService, private userService: UserService) { 
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => 
    this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
    this.oktaAuth.getUser().then(user => {
      this.userService.getUserByEmail(user.userEmail).subscribe(user => {
        this.userID = user.id
        this.subscriptionService.getSubscriptionsForUser(user.id)
    .toPromise()
    .then(items => {
      this.subscriptions = items
    })
      });
    })
  }
  
  updateAuthState(isAuthenticated: boolean) {
    
    this.isAuthenticated = isAuthenticated;
  }
}
