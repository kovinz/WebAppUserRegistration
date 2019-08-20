import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'signin', component: UserFormComponent},
  {path: 'registration', component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
