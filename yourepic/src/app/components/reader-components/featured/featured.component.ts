import { Component, OnInit } from '@angular/core';
import Epic from 'src/app/interfaces/epic';
import EpicService from 'src/app/services/epic.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featuredEpic!: Epic;
  
  constructor(private epicService: EpicService) { }

  ngOnInit(): void {
    this.epicService.getFeaturedEpic().subscribe((epic)=>{
      this.featuredEpic = epic
    })
  }
}
