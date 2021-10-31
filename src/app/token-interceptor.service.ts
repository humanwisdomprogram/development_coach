import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor,HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token=JSON.parse(localStorage.getItem("token"))
  auth:any


  constructor(private injector: Injector) { 
   //this.token=JSON.parse(localStorage.getItem("token"))
    //console.log("in token interceptor",this.token)
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
  
    let tokenizedReq=req.clone ({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    })
    return next.handle(tokenizedReq).pipe(
      retry(3)
    )
    
   /* let token: string;
    return this.auth.getToken().switchMap(response => {
      console.log("response",response)
      token = response['access_token'];
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

       return next.handle(req);
    });*/
   }
}
