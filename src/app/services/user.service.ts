import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) { }

  listUsers() {
    return this.http.get(this.baseURL + 'users');
  }

  viewUser(id: string) {
    return this.http.get(this.baseURL + 'users/' + id);
  }

  addUser(userObj: any) {
    return this.http.post(this.baseURL + 'users', userObj);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseURL + 'users/' + id);
  }

}
