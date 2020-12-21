import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import Category from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let fakeCategoryService = {
    getCategories(): Promise<Category[]> {
    return Promise.resolve([])},
    providers: [
      { provide: HttpClient, useValue:  {}},
      { provide: OktaAuthService, useValue: {} },]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryComponent ],
      providers: [{provide: CategoryService, useValue: fakeCategoryService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
