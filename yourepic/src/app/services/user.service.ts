import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import User from '../interfaces/user';
import { Observable } from 'rxjs';
import Epic from '../interfaces/epic';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private baseUrl = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  createUser(user: User){
    return this.http.post(`${this.baseUrl}`, user)
  }

  getUserById(id:number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }

  updateUser(id:number, user:User): Observable<User>{
    return this.http.put<User>(`${this.baseUrl}/${id}`, user)
  }

  deleteUser(id:number): Observable<User>{
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getPublishersEpics(id:number):Observable<Epic[]>{
    return this.http.get<Epic[]>(`${this.baseUrl}/${id}`)
  }
}
