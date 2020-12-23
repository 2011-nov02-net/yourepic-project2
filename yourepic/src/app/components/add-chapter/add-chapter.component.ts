import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ChapterService } from 'src/app/services/chapter.service';
import { ActivatedRoute } from '@angular/router';
import Chapter from 'src/app/interfaces/chapter';


@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {

  epicID!: number;

  constructor(private location: Location, private chapterService: ChapterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.paramMap.get('epicID')! as unknown as number;
    this.epicID = id;
  }

  add(title: string, text: string): void {
    const chapter = { title: title, text: text, epicid: this.epicID}
    this.chapterService.addChapter(chapter as unknown as Chapter).toPromise()
  }

  goBack(): void {
    this.location.back();
  }
}
