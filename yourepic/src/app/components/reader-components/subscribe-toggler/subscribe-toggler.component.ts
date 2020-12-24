import { Component, Input, OnInit } from '@angular/core';
import User from 'src/app/interfaces/user';

@Component({
  selector: 'app-subscribe-toggler',
  templateUrl: './subscribe-toggler.component.html',
  styleUrls: ['./subscribe-toggler.component.css']
})
export class SubscribeTogglerComponent implements OnInit {
  @Input() publisher!: User;

  constructor() { }

  ngOnInit(): void {
    console.log(this.publisher.name)
  }

  subscribe(){
    console.log('subscribed!')
  }
}
