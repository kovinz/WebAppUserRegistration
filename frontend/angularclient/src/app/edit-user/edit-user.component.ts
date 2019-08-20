import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {AppComponent} from '../app.component';
import {User} from '../model/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private appComponent: AppComponent) {
    this.user = this.appComponent.getUser();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.update(this.user).subscribe(result => this.gotoMainPage());
  }

  gotoMainPage() {
    this.router.navigate(['/']);
  }
}
