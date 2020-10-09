import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Order} from "./order";
import {Observable} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  searchText: string;
  count:number=0;
  orders: Observable<Order[]>;;

  constructor( private service: RestApiService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.orders = this.service.getOrders();
  }

  updateOrder(id: number){
    this.router.navigate(['updateOrder', id]);
  }

  deleteOrder(id: number){
   this.service.deleteOrder(id)
     .subscribe(data => console.log(data), error => console.log(error));
      location.reload();
  }

  createOrder() {
    this.router.navigate(['createOrder'])
  }
}
