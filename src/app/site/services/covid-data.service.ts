import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseObject } from 'src/app/core/models/response-object.model';
import { Response } from 'src/app/core/models/response.model';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private apiService: ApiService) { }

  getCountries(): Observable<HttpResponse<ResponseObject<string>>> {
    const endPoint = "countries";
    return this.apiService.get(endPoint);
  }

  searchCountry(search: string) {
    const endPoint = `countries?search=${search}`;
    return this.apiService.get(endPoint);
  }

  getAllStatistics(): Observable<HttpResponse<ResponseObject<Response>>> {
    const endPoint = "statistics";
    return this.apiService.get(endPoint);
  }

  getCountryStatistics(country: string): Observable<HttpResponse<ResponseObject<Response>>> {
    const endPoint = `statistics?country=${country}`;
    return this.apiService.get(endPoint);
  }

  getCountryHistory(country: string): Observable<HttpResponse<ResponseObject<Response>>> {
    const endPoint = `history?country=${country}`;
    return this.apiService.get(endPoint);
  }

  getCountryDayHistory(country: string, day?: string): Observable<HttpResponse<ResponseObject<Response>>> {
    if (!day) {
      day = new Date().toLocaleString();
    }
    const endPoint = `history?country=${country}&day=${day}`;
    return this.apiService.get(endPoint);
  }

}
