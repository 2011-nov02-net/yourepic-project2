import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Chapter from 'src/app/interfaces/chapter';
import EpicService  from 'src/app/services/epic.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChapterService } from 'src/app/services/chapter.service';
 
@Component({
 selector: 'app-chapters-sidebar',
 templateUrl: './chapters-sidebar.component.html',
 styleUrls: ['./chapters-sidebar.component.css']
})
export class ChaptersSidebarComponent implements OnInit {
 
  chapters: Chapter[] | null = null;
  viewChapter!: Chapter;
  epicID!: number;
  epicTitle!: string;
  constructor(private epicService: EpicService,
    private chapterService: ChapterService, 
    private route: ActivatedRoute,
    private location: Location) { }
 
  ngOnInit(): void {
    this.getChapters();
  }

  getChapters(): void {
    const id: number = this.route.snapshot.paramMap.get('id')! as unknown as number;
    this.epicID = id;
    this.epicService.getChaptersForEpic(id)
        .then(items => { this.chapters = items; this.viewChapter = items[0]});
    this.epicService.getEpicById(id).then(epic => {
      this.epicTitle = epic.title;
    });
  }

  updateChapter(chapter: Chapter) {
    this.chapterService.updateChapter(chapter).toPromise();
  }

 
  onSelect(chapter: Chapter): void {
    this.viewChapter = chapter;
  }

  goBack(): void {
    this.location.back();
  }
}
