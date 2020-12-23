import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Category from 'src/app/interfaces/category';
import Epic from 'src/app/interfaces/epic';
import { CategoryService } from 'src/app/services/category.service';
import EpicService from 'src/app/services/epic.service';
import { Location } from '@angular/common';
import { debug } from 'console';

@Component({
  selector: 'app-category-config',
  templateUrl: './category-config.component.html',
  styleUrls: ['./category-config.component.css']
})
export class CategoryConfigComponent implements OnInit {
  categories: Category[] | null = null;
  epic!: Epic;
  epicID!: number;
  epicsCategories: Category[] | null = null;
  selectedCategory: Category | null = null;

  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryService, 
    private epicService: EpicService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCategories();
    this.getEpic();
  }

  getCategories(): void {
    this.categoryService.getCategories().then(cats => {
      this.categories = cats
    });
    debugger;
  }

  getEpic(): void {
    const id: number = this.route.snapshot.paramMap.get('epicID')! as unknown as number;
    this.epicID = id;
    this.epicService.getEpicById(id).then(ep => {
      this.epic = ep
    });
    debugger;
  }

  public categorizeEpic(categories: Category[]): void {
    this.categoryService.categorizeEpic(categories, this.epicID)
  }

  onSelect(category: Category): void {
    this.epicsCategories?.push(category);
  }

  goBack(): void {
    this.location.back();
  }
}
