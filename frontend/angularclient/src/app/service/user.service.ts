import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;
  private login: string;
  private filter: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users/';
    this.login = 'login/';
    this.filter = 'filter/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public update(user: User) {
    return this.http.put<User>(this.usersUrl, user);
  }

  public checkUser(user: User) {
    return this.http.get<User[]>(this.usersUrl + this.login + user.login);
  }

  public filterByLogin(user: User) {
    return this.http.get<User[]>(this.usersUrl + this.filter + this.login + user.login);
  }
}
