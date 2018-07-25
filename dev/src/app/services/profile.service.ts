import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  
  // baseUrl:string = "http://localhost/portfolio-api/service/"
  baseUrl:string = "https://dominick123.000webhostapp.com/portfolio-api/Service/"

  constructor(public http: HttpClient) {

  }

  getProfile() {
    return this.http.get(`${this.baseUrl}getProfile`);
  }
}
