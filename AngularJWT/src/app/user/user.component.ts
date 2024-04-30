import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: any = {
    firstName: '',
    lastName: '',
    loginId: '',
    password: '',
    dob: '',
    message: '',
    id: null,
    roleId: '',
    searchPrams: {},
    preload: []
  }
  inputerror: any = {};
  filetoUpload: any = null;



  constructor(private httpService: HttpServiceService, private httpClient: HttpClient, private route: ActivatedRoute) {
    var self = this;
    httpService.getPathVariable(route, function (params: any) {
      self.form.id = params["id"];
    })
  }
  ngOnInit(): void {
    this.preload();
    if (this.form.id && this.form.id > 0) {
      this.display();
    }
  }
  display() {
    var self = this;
    this.httpService.get('http://localhost:8080/User/get/' + this.form.id, function (res: any) {
      self.form = res.result.data;
    })
  }
  preload() {
    var self = this;
    this.httpService.get('http://localhost:8080/User/preload', function (res: any) {
      self.form.preload = res.result;
    })
  }
  onFileSelect(event: any) {
    this.filetoUpload = event.target.files.item(0);
    console.log(this.filetoUpload);
  }
  myFile() {
    var self = this;
    const formData = new FormData;
    formData.append('file', this.filetoUpload);
    return this.httpClient.post('htttp://localhost:8080/User/profilePic/' + this.form.id, formData).subscribe(data => {
      console.log(this.filetoUpload);

    }, error => {
      console.log(error);
    });
  }
  save() {
    var self = this;
    this.httpService.post('http://localhost:8080/User/save', this.form, function (res: any) {
      self.form.message = res.result.message;
      self.myFile();
      if (res.result.inputerror) {
        self.inputerror = res.result.inputerror;
      }
    })
  }
}