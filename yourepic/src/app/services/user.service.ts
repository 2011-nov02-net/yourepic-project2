import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import User from '../interfaces/user';
import { Observable } from 'rxjs';
import Epic from '../interfaces/epic';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  getUsers(): Observable<User[]>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<User[]>(`${this.baseUrl}`, { headers: headers })
  }

  createUser(user: User){
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.post(`${this.baseUrl}`, user, { headers: headers })
  }

  getUserById(id:number): Observable<User>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<User>(`${this.baseUrl}/${id}`, { headers: headers })
  }

  updateUser(id:number, user:User): Observable<User>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.put<User>(`${this.baseUrl}/${id}`, user, { headers: headers })
  }

  deleteUser(id:number): Observable<User>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.delete<User>(`${this.baseUrl}/${id}`, { headers: headers })
  }

  getPublishersEpics(id:number):Promise<Epic[]>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    };
    return this.http.get<Epic[]>(`${this.baseUrl}/${id}/epics`, { headers: headers })
    .toPromise()
  }
}
