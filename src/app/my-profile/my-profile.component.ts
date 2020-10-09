import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RestApiService} from "../rest-api.service";
import {Router} from "@angular/router";
import {User} from "../login/user";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: User = new User;
  user2: User = new User;
  constructor(private service:RestApiService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData() {
    this.service.getUser()
      .subscribe(data => {
    this.user = data;
    }, error => console.log(error));
  }

  update(){
    this.user2.password = this.user.password;
    this.user2.username = this.user.username;
    this.user2.name = this.user.name;
    this.service.userUpdate(this.user2)
      .subscribe(data => console.log(data), error => console.log(error));
    location.replace("http://localhost:4200/my-profile")
  }

  onSubmit() {
    this.update();
  }

}

