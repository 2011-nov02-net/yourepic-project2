import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import Subscription from '../interfaces/subscription';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private baseUrl = `${environment.baseUrl}/subscriptions`;
  constructor(private http: HttpClient) { }

  getSubscriptionsForUser(id:number): Observable<Subscription[]>{
    return this.http.get<Subscription[]>(`${this.baseUrl}/${id}`)
  }

  subscribe(subsriberId:number, publisherId:number, subscription: Subscription){
    return this.http.post(`${this.baseUrl}/${publisherId}/subscribee/${subsriberId}`, subscription)
  }

  ubsubscribe(subsriberId:number, publisherId:number){
    return this.http.delete(`${this.baseUrl}/${publisherId}/subscribee/${subsriberId}`)
  }
}
