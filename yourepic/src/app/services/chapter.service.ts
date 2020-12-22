import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import Chapter from '../interfaces/chapter';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getChapterById(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.baseUrl}/chapters/${id}`)
  }

  addChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>(`${this.baseUrl}/chapters`, chapter)
  }

  deleteChapter(chapter: Chapter | number): Observable<Chapter> {
    const id = typeof chapter === 'number' ? chapter : chapter.id;

    return this.http.delete<Chapter>(`${this.baseUrl}/chapters/${id}`)
  }

  updateChapter(chapter: Chapter | number): Observable<any>{    
    const id = typeof chapter === 'number' ? chapter : chapter.id;

    return this.http.put(`${this.baseUrl}/chapters/${id}`, chapter)
  }
}
