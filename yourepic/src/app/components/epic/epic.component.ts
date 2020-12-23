import { Component, OnInit } from '@angular/core';
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

  constructor(private epicService: EpicService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublishersEpics(1)
      .then(items=> {
          this.epics = items;
          this.selectedEpic = items[0]
      });
  }

  onSelect(epic:Epic): void{
    this.selectedEpic = epic
  }
}
