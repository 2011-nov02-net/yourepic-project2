import { Component, Input, OnInit } from '@angular/core';
import Subscription from 'src/app/interfaces/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { OktaAuthService } from '@okta/okta-angular';
import User from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-subscribe-toggler',
  templateUrl: './subscribe-toggler.component.html',
  styleUrls: ['./subscribe-toggler.component.css']
})
export class SubscribeTogglerComponent implements OnInit {
  
  @Input() publisher!: User;
  isAuthenticated = false;
  isSubscribed = false;
  subscriptions! : Subscription[];
  user! : User;

  constructor(private oktaAuth: OktaAuthService, private subscriptionService : SubscriptionService, private userService: UserService) { 
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => 
    this.updateAuthState(isAuthenticated));
  }

  ngOnInit(): void {
    this.oktaAuth.getUser().then(user => {
      this.userService.getUserByEmail(user.userEmail).subscribe(user => {
        this.user = user
        this.subscriptionService.getSubscriptionsForUser(user.id)
    .toPromise()
    .then(items => {
      this.subscriptions = items
      for(let sub of items){
        if(sub.publisher.id == this.publisher.id){
          this.isSubscribed = true
        }
      }
    })
      });
    })
    
  }

  subscribe(){
    
    const sub = {publisher:this.publisher, subscriber:this.user, hasNewContent: false}
    this.subscriptionService.subscribe(sub).subscribe();
  }

  Unsubscribe(){
    this.subscriptionService.ubsubscribe(this.user.id, this.publisher.id).subscribe();
  }
  
  updateAuthState(isAuthenticated: boolean) {
    
    this.isAuthenticated = isAuthenticated;
  }
}
