import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  user: User;
  matcher;
  userForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
    this.user = new User();
    this.matcher = new MyErrorStateMatcher();
    this.userForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, {validator: this.checkPasswords});
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoMainPage());
  }

  gotoMainPage() {
    this.router.navigate(['/']);
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : {notSame: true};
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
