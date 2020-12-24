import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chapter from 'src/app/interfaces/chapter';
import Epic from 'src/app/interfaces/epic';
import EpicService from 'src/app/services/epic.service';

@Component({
  selector: 'app-read-epic',
  templateUrl: './read-epic.component.html',
  styleUrls: ['./read-epic.component.css']
})
export class ReadEpicComponent implements OnInit {

  epic!: Epic
  chapters!: Chapter[]
  selectedChapter!: Chapter

  constructor(private epicService: EpicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.epicService.getEpicById(this.route.snapshot.params['id']).subscribe(epic=>{
      this.epic = epic
    })
    this.epicService.getChaptersForEpic(this.route.snapshot.params['id']).then(chapters=>{
      this.chapters = chapters
    })
  }

  onClick(chapter: Chapter){
    this.selectedChapter = chapter
  }
}
