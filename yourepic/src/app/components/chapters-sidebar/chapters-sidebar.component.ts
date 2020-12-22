import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Chapter from 'src/app/interfaces/chapter';
import EpicService  from 'src/app/services/epic.service';
import { UserService } from 'src/app/services/user.service';
 
@Component({
 selector: 'app-chapters-sidebar',
 templateUrl: './chapters-sidebar.component.html',
 styleUrls: ['./chapters-sidebar.component.css']
})
export class ChaptersSidebarComponent implements OnInit {
 
 chapters: Chapter[] | null = null;
 viewChapter!: Chapter;
 constructor(private epicService: EpicService) { }
 
 ngOnInit(): void {
   this.epicService.getChaptersForEpic(2)
   .then(items => { this.chapters = items; this.viewChapter = items[0]});
 }
 
 onSelect(chapter: Chapter): void {
   this.viewChapter = chapter;
 }
}
