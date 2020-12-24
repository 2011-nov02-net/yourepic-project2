import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import Category from '../interfaces/category';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  getCategories(): Observable<Category[]> {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    const categories = this.http.get<Category[]>(`${this.baseUrl}/categories`, {headers: headers})

    return categories;
  }
  getCategoryByName(name: string): Promise<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories/${name}`)
      .toPromise();
  }
  categorizeEpic(categories: Category[], epicID: number) {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.post(`${this.baseUrl}/categories/epic/${epicID}`, categories, {headers: headers});
  }
  postNewCategory(category: Category) {
    return this.http.post(`${this.baseUrl}/categories`, category)
  }
}
