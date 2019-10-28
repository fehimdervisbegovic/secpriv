import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailMessageDto } from '../model/email-message-dto';

@Injectable({
  providedIn: 'root'
})
export class PlanApiService {

  apiUrl = 'https://test.secureprivacy.ai/api';

  constructor(private http: HttpClient) { }

  /**
   * Method for starting a new plan
   * returns "any" because we don't know what is result
   */
  startPlan = (email: EmailMessageDto): Observable<any> => {
    console.log('Email data:', email);

    // try to send SIMPLE HTTP request without CORS checking
    const options: any = { headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      })
    };

    return this.http.post(`${this.apiUrl}/email`, email, options);
  }
}
