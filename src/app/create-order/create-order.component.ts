import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Order} from "../order/order";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  order: Order = new Order();

  constructor(private service: RestApiService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.service.createOrder(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/order']);
    location.replace("http://localhost:4200/order")
  }
}
