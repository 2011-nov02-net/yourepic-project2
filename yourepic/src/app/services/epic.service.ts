import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import Epic from '../interfaces/epic';
import Chapter from '../interfaces/chapter';
import { Observable } from 'rxjs';
import Rating from '../interfaces/rating';
import { OktaAuthService } from '@okta/okta-angular';
@Injectable({
  providedIn: 'root'
})
export default class EpicService {
  private baseUrl = `${environment.baseUrl}/epics`;
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  getAllEpics(title: string | null, category: string | null): Observable<Epic[]> {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<Epic[]>(`${this.baseUrl}?title=${title}?category=${category}`, { headers: headers })
  }

  getEpicById(id: number): Observable<Epic> {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<Epic>(`${this.baseUrl}/${id}`, { headers: headers })
  }

  getFeaturedEpic(): Observable<Epic>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<Epic>(`${this.baseUrl}/featured`, { headers: headers })
  }

  getHighestRatedEpic(): Observable<Epic>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<Epic>(`${this.baseUrl}/highestrated`, { headers: headers })
  }

  getChaptersForEpic(id: number): Observable<Chapter[]> {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<Chapter[]>(`${this.baseUrl}/${id}/chapters`, { headers: headers })
  }

  deleteEpicById(id: number) {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: headers })
  }

  addRatingForEpicId(id: number, rating: Rating) {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.post(`${this.baseUrl}/${id}/ratings`, rating, { headers: headers })
  }

  addEpic(epic: Epic) {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.post(`${this.baseUrl}`, epic, { headers: headers })
  }

  updateEpic(id:number, epic: Epic){
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.put(`${this.baseUrl}/${id}`, epic, { headers: headers })
  }
}
