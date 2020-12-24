import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Category from 'src/app/interfaces/category';
import Epic from 'src/app/interfaces/epic';
import { CategoryService } from 'src/app/services/category.service';
import EpicService from 'src/app/services/epic.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-config',
  templateUrl: './category-config.component.html',
  styleUrls: ['./category-config.component.css']
})
export class CategoryConfigComponent implements OnInit {
  categories!: Category[];
  epic!: Epic;
  epicID!: number;
  epicsCategories!: Category[];
  selectedCategory!: Category ;
  newCategories: Category[] = [];

  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryService, 
    private epicService: EpicService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCategories();
    this.getEpic();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(cats => {
      this.categories = cats
    });
  }

  getEpic(): void {
    const id: number = this.route.snapshot.paramMap.get('epicID')! as unknown as number;
    this.epicID = id;
    this.epicService.getEpicById(id).then(ep => {
      this.epic = ep;
      this.epicsCategories = ep.categories;
      this.selectedCategory = this.epicsCategories[0];
    });
  }

  onSelect(category: Category):void {
    this.newCategories?.push(category);
    this.epicsCategories?.push(category);
  }

  save():void {
    this.categoryService.categorizeEpic(this.newCategories, this.epicID).toPromise();
  }

  goBack(): void {
    this.location.back();
  }
}
