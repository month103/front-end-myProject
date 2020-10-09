import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message:any;
  invalidLogin = false;
  loginSuccess = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string;

  constructor(private route: ActivatedRoute, private service: RestApiService, private router:Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    let resp = this.service.login(this.username, this.password);
   resp.subscribe(data => {
     location.replace("http://localhost:4200/order")
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.message = data;
      this.successMessage = 'Login Successful.';
    },() => {
     this.invalidLogin = true;
     this.loginSuccess = false;
   });
  }

}
