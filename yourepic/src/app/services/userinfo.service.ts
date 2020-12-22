import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private baseUrl = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient) { }
}
