import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  login(data) {
     return this.http.post('http://localhost:5000/adminLogin', data);
    // return this.http.post('https://mean-app-anand.herokuapp.com/adminLogin', data);
  }
}
