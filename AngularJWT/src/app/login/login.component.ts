import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    loginId: '',
    password: '',
    message: ''
  }
  inputerror: any = {}
  constructor(private httpservice: HttpServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.form.message = params['errorMessage'] || null;
      console.log('msssssssssgggggggggggg = >', this.form.message)
    });
  }

  signIn() {
    var self = this;

    this.httpservice.post("http://localhost:8080/Auth/login/", this.form, function (res: any) {

      if (res.result.inputerror) {
        self.inputerror = res.result.inputerror;
      }

      if (res.success) {
        localStorage.setItem('fname', res.result.data.firstName);
        localStorage.setItem('lname', res.result.data.lastName);
        localStorage.setItem('rolename', res.result.data.roleName);
        localStorage.setItem('token', 'Bearer ' + res.result.token)
        self.router.navigateByUrl('welcome');
      } else {
        self.form.message = res.result.message;
      }
    })
  }
}

