import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  form: any = {
    searchParams: {},
    preload: [],
    deleteParams: {},
    pageNo: 0,
    message: '',
    list: [],
  }

  constructor(private Httpservice: HttpServiceService, private httpClient: HttpClient, private route: Router) {

  }
  ngOnInit(): void {
    this.preload();
    this.search();
  }
  preload() {
    var self = this;
    this.Httpservice.get('http://localhost:8080/User/preload', function (res: any) {
      self.form.preload = res.result;
    })
  }
  onCheckboxChange(userId: number) {
    this.form.deleteParams.id = userId;
  }
  edit(page: any) {
    this.route.navigateByUrl(page);
  }
  next(){
this.form.pageNo++;
this.search();
  }
  previous(){
this.form.pageNo--;
this.search();
  }
  search() {
    var self = this;
    this.Httpservice.post('http://localhost:8080/User/search/' + this.form.pageNo, this.form.searchParams, function (res: any) {
      self.form.list = res.result.data;
    })
  }
  delete() {
    var self = this;
    this.Httpservice.get('http://localhost:8080/User/delete' + this.form.deleteParams.id, function (res: any) {
      self.form.message = res.result.message;
      self.form.pageNo = 0;
      self.search();
    });
  }
}
