import { Component, OnInit } from '@angular/core';
import {User} from "../login/user";
import {RestApiService} from "../rest-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User;

  constructor(private service: RestApiService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.service.signUp(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/login'])
  }
}
