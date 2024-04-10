import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './feedback.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackserviceService {
  private apiUrl = 'https://rahulportfolio.somee.com/api/review';

  constructor(private http: HttpClient) { }
  submitFeedback(feedback: Feedback): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedback);
  }
}
