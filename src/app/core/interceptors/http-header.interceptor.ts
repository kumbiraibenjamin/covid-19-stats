import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() { }

    intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {

        const headers = this.getHeaders(req);

        const authReq = req.clone({ headers });

        return next.handle(authReq);
    }

    getHeaders(req: HttpRequest<any>): HttpHeaders {
        let headerObj = new HttpHeaders();

        const rapidapi_host = environment.rapidapi_host;
        const rapidapi_key = environment.rapidapi_key;
        const covid_url = environment.covid_url;

        if (req.url.includes(covid_url)) {
            // Rapid API Host
            headerObj = headerObj.set('x-rapidapi-host', rapidapi_host);

            // Rapid API Key
            headerObj = headerObj.set('x-rapidapi-key', rapidapi_key);
        }

        return headerObj;

    }

}