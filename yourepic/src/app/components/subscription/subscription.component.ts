import { Component, OnInit } from '@angular/core';
import User from 'src/app//interfaces/user'
import Subscription from 'src/app/interfaces/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  subscriptions : Subscription[] | null = null;
  selectedSub : Subscription | null = null;

  constructor(private subscriptionService : SubscriptionService) {}

  ngOnInit(): void {
    this.subscriptionService.getSubscriptionsForUser(2)
    .toPromise()
    .then(items => {
      this.subscriptions = items
    })
    
  }

  onSelect(subscription : Subscription){
    this.selectedSub = subscription;
  }

}
