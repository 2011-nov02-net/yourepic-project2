import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private baseUrl = `https://dev-7824301.okta.com/oauth2/default/v1/userinfo`;
  
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  getUserEmail(): Observable<User> {
    const accessToken = this.oktaAuth.getAccessToken();
    const headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };

    const header = {
      Authorization: 'Bearer' + 'eyJraWQiOiI1d2g2NVB0OHlLQ1pOQXNwaGJDU2hURG8yeS1hSVNpV1NtNjk1dzBXQ1JzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlUzaTZXb3ZQUzdxMDk3OF9fTnJqSGhDbHZxSWRJQWhHMjlvNE44MERMSWsiLCJpc3MiOiJodHRwczovL2Rldi03ODI0MzAxLm9rdGEuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTYwODYxMDkxMiwiZXhwIjoxNjA4NjE0NTEyLCJjaWQiOiIwb2EyczBiMzQ2RE1selRKTDVkNiIsInVpZCI6IjAwdTJyb2xmZFF4TktMQ09XNWQ2Iiwic2NwIjpbIm9wZW5pZCJdLCJzdWIiOiJkYW5pZWxncmFudC5qb3NlcGhAZ21haWwuY29tIn0.f5p-83z35OTbYHxTFxvFoTEQ6WeSsaRhqCS5Fd2-n1Vt7AIzOEGSF99L5OzfNdkBrZDvvqFSMTB_4nm0aldBsSiToRJRwxCEXmV_USe9Zx85kSqWP4bhmpkOy8aJCJUqG0QyyccD2hYxPhHDE4YuqDjvJj5otMGjACP1Z2cKa5VP3QWFR-eDiE-zj9L_08dOgsXfw6XfVV463C5L9m1Xde4Kb1GYKvIjprKom2z0PXjvzUWpzmqnCGd_PlvxZzaZMeQVGdJPy0h33nk9zGJESrQAPTxToPysT_KP890SDHSgRF5YHTohG5XnugDTnwfM4dCWntt_cFigY1oj-QOBww',
      Accept: 'application/json'
    }
    return this.http.get<User>(`${this.baseUrl}` , {headers: header});
  }
}


