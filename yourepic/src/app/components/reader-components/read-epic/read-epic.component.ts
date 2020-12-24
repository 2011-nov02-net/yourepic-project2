import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { StarRatingComponent } from 'ng-starrating';
import Chapter from 'src/app/interfaces/chapter';
import Epic from 'src/app/interfaces/epic';
import User from 'src/app/interfaces/user';
import EpicService from 'src/app/services/epic.service';
import { RatingService } from 'src/app/services/rating.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-read-epic',
  templateUrl: './read-epic.component.html',
  styleUrls: ['./read-epic.component.css']
})
export class ReadEpicComponent implements OnInit {

  epic!: Epic
  chapters!: Chapter[]
  selectedChapter!: Chapter
  reader!: User
  addedRating = false

  constructor(private epicService: EpicService,
    private route: ActivatedRoute,
    private ratingService: RatingService,
    private oktaAuth: OktaAuthService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.epicService.getEpicById(this.route.snapshot.params['id']).subscribe(epic => {
      this.epic = epic
    })
    this.epicService.getChaptersForEpic(this.route.snapshot.params['id']).then(chapters => {
      this.chapters = chapters
    })
  }

  onClick(chapter: Chapter) {
    this.selectedChapter = chapter
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    this.oktaAuth.getUser().then(user => {
      this.userService.getUserByEmail(user.userEmail).subscribe(user => {
        console.log(user.id)
        this.ratingService.addRating({ id: 0, raterid: user.id, epicid: this.epic.id, rater: user.name, ratingnumber: $event.newValue }).subscribe(response => {
          console.log('hello')
        })

      });
    })
  }
}
