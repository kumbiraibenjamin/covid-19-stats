import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns Observable<Country[]>
   */

  getCountriesList(): Observable<Object | Country[]> {
    return this.http.get("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json");
  }


}
