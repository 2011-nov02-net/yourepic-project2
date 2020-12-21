import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import Rating from '../interfaces/rating';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private baseUrl = `${environment.baseUrl}/ratings`;
  constructor(private http: HttpClient) { }

  getRatingById(id: number): Observable<Rating> {
    return this.http.get<Rating>(`${this.baseUrl}/${id}`)
  }

  updateRatingById(id: number, rating: Rating): Observable<Rating> {
    return this.http.put<Rating>(`${this.baseUrl}/${id}`, rating)
  }

  deleteRatingById(id: number): Observable<Rating> {
    return this.http.delete<Rating>(`${this.baseUrl}/${id}`)
  }
}
