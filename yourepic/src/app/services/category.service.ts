import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import Category from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getCategories(): Promise<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/categories`)
    .toPromise();
  }
}
