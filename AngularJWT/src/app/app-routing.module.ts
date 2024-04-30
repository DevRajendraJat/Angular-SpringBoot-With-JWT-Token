import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserlistComponent } from './user/userlist.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './login/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'userlist',
    component: UserlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
