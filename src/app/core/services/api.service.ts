import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseObject } from '../models/response-object.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(endPoint: string): Observable<HttpResponse<ResponseObject<T>>> {
    const url = environment.covid_url + endPoint;
    return this.http.get<any>(url, {
      observe: 'response',
    });
  }


}
