import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
