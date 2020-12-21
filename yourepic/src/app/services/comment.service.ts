import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import Comment from '../interfaces/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCommentsForEpicId(epicId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/comments/${epicId}`)
  }

  postNewCommentForEpicId(comment: Comment) {
    return this.http.post(`${this.baseUrl}/comments`, comment)
  }

  replyToComment(epicId: number, comment: Comment) {
    return this.http.post(`${this.baseUrl}/comments/comment/${epicId}`, comment)
  }

  deleteComment(commentId:number){
    return this.http.delete(`$${this.baseUrl}/comments/${commentId}`)
  }
}
