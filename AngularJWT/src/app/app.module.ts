import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';
import { SignUpComponent } from './login/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
    UserlistComponent,
    SignUpComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
