import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import Role from '../interfaces/role';
import { Observable } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = `${environment.baseUrl}/roles`;
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  getRoles(): Observable<Role[]>{
    return this.http.get<Role[]>(`${this.baseUrl}`)
  }
}
