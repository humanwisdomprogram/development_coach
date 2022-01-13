import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {
  HttpClient
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path="http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/api"

  constructor( private http: HttpClient) { }

  register(data:any):Observable<any>{
    return this.http.post(this.path+'/AddCoach',data)
  }

  getCountry(): Observable<any> {
    return this.http.get('https://staging.humanwisdom.info/api/Countries');
  }

  getState(id: number): Observable<any> {
    return this.http.get('https://staging.humanwisdom.info/api/State/'+id);
  }

  getLanguageList(): Observable<any> {
    return this.http.get('https://staging.humanwisdom.info/api/Countries');
  }
}


