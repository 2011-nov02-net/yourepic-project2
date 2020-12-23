import { Component, OnInit, Input } from '@angular/core';
import Epic from 'src/app/interfaces/epic';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-epic',
  templateUrl: './sub-epic.component.html',
  styleUrls: ['./sub-epic.component.css']
})



export class SubEpicComponent implements OnInit {

  epics: Epic[] | null = null;
  selectedEpic: Epic| null = null;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.paramMap.get('id')! as unknown as number;
    this.userService.getPublishersEpics(id)
      .then(items=> {
          this.epics = items;
          this.selectedEpic = items[0];
      });
  }

  onSelect(epic:Epic): void{
    this.selectedEpic = epic
  }
}
