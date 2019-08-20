import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private appComponent: AppComponent) {
    this.user = new User();
  }

  onSubmit() {
    const tmpUser = this.userService.checkUser(this.user);
    tmpUser.subscribe(u => {
      u.forEach(user => {
        if (user.password === this.user.password) {
          this.appComponent.setUser(user);
          this.gotoUserList();
        }
      });
    });
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
