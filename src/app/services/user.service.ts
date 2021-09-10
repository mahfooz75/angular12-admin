import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/list-users/list-users.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) { }

  listUsers():Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'users');
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

  updateUser(id: string,userObj:any) {
    return this.http.put(this.baseURL + 'users/' + id, userObj);
  }

}
