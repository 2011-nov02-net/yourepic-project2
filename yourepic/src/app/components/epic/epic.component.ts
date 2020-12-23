import { Component, OnInit, Input} from '@angular/core';
import Epic from 'src/app/interfaces/epic';
import  EpicService  from 'src/app/services/epic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent implements OnInit {

  epics: Epic[] | null = null;
  selectedEpic!: Epic;

  @Input() id : number = 2;
  constructor(private epicService: EpicService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublishersEpics(this.id)
      .then(items=> {
          this.epics = items;
          this.selectedEpic = items[0];
      });
  }

  onSelect(epic:Epic): void{
    this.selectedEpic = epic
  }
}
