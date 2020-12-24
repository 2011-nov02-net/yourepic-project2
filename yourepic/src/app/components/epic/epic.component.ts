import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import Epic from 'src/app/interfaces/epic';
import User from 'src/app/interfaces/user';
import  EpicService  from 'src/app/services/epic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent implements OnInit {

  epics: Epic[] | null = null;
  selectedEpic: Epic| null = null;
  userID!: number;
  constructor(private userService: UserService, 
    private oktaAuth: OktaAuthService) { }

  ngOnInit(): void {

    this.oktaAuth.getUser().then(user => {
      this.userService.getUserByEmail(user.userEmail).subscribe(user => {
        this.getPublishersEpics(user.id);

      });
    })
  }

  getPublishersEpics(id: number) {
    this.userService.getPublishersEpics(id)
      .then(items=> {
          this.epics = items;
          this.selectedEpic = items[items.length-1]
      }).catch((error) => { console.error(error); });
  }
  onSelect(epic:Epic): void{
    this.selectedEpic = epic
  }
}
