import { Component, Input, OnInit } from '@angular/core';
import Epic from 'src/app/interfaces/epic';

@Component({
  selector: 'app-open-epic',
  templateUrl: './open-epic.component.html',
  styleUrls: ['./open-epic.component.css']
})
export class OpenEpicComponent implements OnInit {
  @Input() epic!: Epic;

  constructor() { }

  ngOnInit(): void {
  }

}
