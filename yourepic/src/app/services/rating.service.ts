import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import Rating from '../interfaces/rating';
import { Observable } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private baseUrl = `${environment.baseUrl}/rating`;
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  getRatingById(id: number): Observable<Rating> {
    return this.http.get<Rating>(`${this.baseUrl}/${id}`)
  }

  updateRatingById(id: number, rating: Rating): Observable<Rating> {
    return this.http.put<Rating>(`${this.baseUrl}/${id}`, rating)
  }

  deleteRatingById(id: number): Observable<Rating> {
    return this.http.delete<Rating>(`${this.baseUrl}/${id}`)
  }

  addRating(rating: Rating): Observable<any> {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.post(`${this.baseUrl}`, rating, { headers: headers })
  }
}
