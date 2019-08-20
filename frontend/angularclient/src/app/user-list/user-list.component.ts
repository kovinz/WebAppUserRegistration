import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  user: User;
  signedUser: User;

  constructor(private userService: UserService, appComponent: AppComponent) {
    this.user = new User();
    this.signedUser = appComponent.getUser();
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      data.forEach(u => {
        if (u.login !== this.signedUser.login || u.password !== this.signedUser.password) {
          u.password = '';
        }
      });
      this.users = data;
    });
  }

  onSubmit() {
    this.userService.filterByLogin(this.user).subscribe(data => {
      this.users = data;
    });
  }
}
