import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form:any={
    data:{},
    message:"",
  }
  inputerror: any = {}
  constructor(private http:HttpServiceService,){

  }
  signUp(){
    var self= this;
    this.http.post('http://localhost:8080/Auth/signUp/',this.form.data,(res:any)=>{
      self.form.message=res.result.message;
      self.inputerror=res.result.inputerror;
    })
  }
}
