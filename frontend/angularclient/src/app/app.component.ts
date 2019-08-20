import {Component} from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  currentUser: User;

  constructor() {
    this.title = 'Web Portal';
  }

  public setUser(user: User) {
    this.currentUser = user;
  }

  public getUser() {
    return this.currentUser;
  }

}
