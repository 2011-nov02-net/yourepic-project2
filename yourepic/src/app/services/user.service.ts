import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import User from '../interfaces/user';
import Epic from '../interfaces/epic';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  getUsers(): Promise<User[]>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<User[]>(`${this.baseUrl}`, { headers: headers })
    .toPromise()
  }

  createUser(user: User){
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.post(`${this.baseUrl}`, user, { headers: headers })
  }

  getUserById(id:number): Promise<User>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<User>(`${this.baseUrl}/${id}`, { headers: headers })
    .toPromise()
  }

  updateUser(id:number, user:User){
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.put(`${this.baseUrl}/${id}`, user, { headers: headers })
  }

  deleteUser(id:number): Promise<User>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.delete<User>(`${this.baseUrl}/${id}`, { headers: headers })
    .toPromise()
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

  getUserByEmail(email:string): Observable<User>{
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
    return this.http.get<User>(`${this.baseUrl}/email/${email}`, { headers: headers })
  }
}
