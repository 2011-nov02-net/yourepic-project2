import { Component, OnInit } from '@angular/core';
import Chapter from 'src/app/interfaces/chapter';
import EpicService  from 'src/app/services/epic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-chapter',
  templateUrl: './sub-chapter.component.html',
  styleUrls: ['./sub-chapter.component.css']
})
export class SubChapterComponent implements OnInit {

  chapters: Chapter[] | null = null;
  viewChapter!: Chapter;
  constructor(private epicService: EpicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getChapters();
  }
  getChapters(): void {
    const id: number = this.route.snapshot.paramMap.get('id')! as unknown as number;
    this.epicService.getChaptersForEpic(id)
        .then(items => { this.chapters = items; this.viewChapter = items[0]});
  }

  onSelect(chapter: Chapter): void {
    this.viewChapter = chapter;
 }
}