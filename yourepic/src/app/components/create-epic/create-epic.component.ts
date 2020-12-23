import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import Epic from 'src/app/interfaces/epic';
import EpicService from 'src/app/services/epic.service';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-epic',
  templateUrl: './create-epic.component.html',
  styleUrls: ['./create-epic.component.css']
})
export class CreateEpicComponent implements OnInit {

  constructor(private epicService: EpicService, 
              private oktaAuth: OktaAuthService, 
              private userService: UserService,
              private location: Location) { }

  
  ngOnInit(): void {
  }

  add(title: string, concept: string): void {
    this.oktaAuth.getUser().then(user => {
      this.userService.getUserByEmail(user.userEmail).then(user => {
        const author = { 
          name: user.name,
          role: user.role};
        const epic = { Title: title, Concept: concept, Author: user};
        this.epicService.addEpic(epic as unknown as Epic).toPromise().then(response => {
          console.log(response);
        });
      })
    });
  }

  goBack(): void {
    this.location.back();
  }

}
