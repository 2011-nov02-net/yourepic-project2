import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import Subscription from '../interfaces/subscription';
import { Observable } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private baseUrl = `${environment.baseUrl}/subscriptions`;
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  getSubscriptionsForUser(id:number): Observable<Subscription[]>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<Subscription[]>(`${this.baseUrl}/${id}`, { headers : headers})
  }

  subscribe(subsriberId:number, publisherId:number, subscription: Subscription){
    return this.http.post(`${this.baseUrl}/${publisherId}/subscribee/${subsriberId}`, subscription)
  }

  ubsubscribe(subsriberId:number, publisherId:number){
    return this.http.delete(`${this.baseUrl}/${publisherId}/subscribee/${subsriberId}`)
  }
}
