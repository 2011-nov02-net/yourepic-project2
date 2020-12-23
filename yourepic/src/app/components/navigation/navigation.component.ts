import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false

  isReader=false;
  isPublisher = false;
  isUnassigned = false;
  constructor() { }

  ngOnInit(): void {
  }

}
