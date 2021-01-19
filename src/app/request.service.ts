import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  //GET
  getAllRequest(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(`${this.baseURL}/getAllRequest`);
  }

  //POST 
  createNewRequest(request: Request): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/saveRequest`, request);
  }
}
