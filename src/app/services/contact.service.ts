import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/contact-form', data);
  }
}
