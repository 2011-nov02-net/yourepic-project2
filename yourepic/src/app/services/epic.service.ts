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
export class EpicService {
  private baseUrl = `${environment.baseUrl}/epics`;
  constructor(private http: HttpClient) { }

  getAllEpics(title: string | null, category: string | null): Observable<Epic[]> {
    return this.http.get<Epic[]>(`${this.baseUrl}?title=${title}?category=${category}`)
  }

  getEpicById(id: number): Observable<Epic> {
    return this.http.get<Epic>(`${this.baseUrl}/${id}`)
  }

  getFeaturedEpic(): Observable<Epic>{
    return this.http.get<Epic>(`${this.baseUrl}/featured`)
  }

  getHighestRatedEpic(): Observable<Epic>{
    return this.http.get<Epic>(`${this.baseUrl}/highestrated`)
  }

  getChaptersForEpic(id: number): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(`${this.baseUrl}/${id}/chapters`)
  }

  deleteEpicById(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  addRatingForEpicId(id: number, rating: Rating) {
    return this.http.post(`${this.baseUrl}/${id}/ratings`, rating)
  }

  addEpic(epic: Epic) {
    return this.http.post(`${this.baseUrl}`, epic)
  }

  updateEpic(id:number, epic: Epic){
    return this.http.put(`${this.baseUrl}/${id}`, epic)
  }
}
