import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Chapter from 'src/app/interfaces/chapter';
import EpicService  from 'src/app/services/epic.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
 selector: 'app-chapters-sidebar',
 templateUrl: './chapters-sidebar.component.html',
 styleUrls: ['./chapters-sidebar.component.css']
})
export class ChaptersSidebarComponent implements OnInit {
 
  chapters: Chapter[] | null = null;
  viewChapter!: Chapter;
  epicID!: number;
  constructor(private epicService: EpicService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.getChapters();
  }

  getChapters(): void {
    const id: number = this.route.snapshot.paramMap.get('id')! as unknown as number;
    this.epicID = id;
    this.epicService.getChaptersForEpic(id)
        .then(items => { this.chapters = items; this.viewChapter = items[0]});
    }
 
  onSelect(chapter: Chapter): void {
    this.viewChapter = chapter;
 }
}
