import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestApiService} from "../rest-api.service";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: RestApiService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);

  }

  handleLogout() {
    this.authenticationService.logout();
  }

}



