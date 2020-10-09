import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {RestApiService} from "./rest-api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private restApiService: RestApiService  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.restApiService.isUserLoggedIn() && req.url.indexOf('basicAuth') === -1) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Basic ${window.btoa(sessionStorage.getItem('authenticatedUser')+ ":" + sessionStorage.getItem('authenticatedUser1'))}`
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
