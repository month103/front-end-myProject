import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestApiService} from "../rest-api.service";

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  order: any;
  id: number;

  constructor(private route: ActivatedRoute,private router: Router,
              private employeeService: RestApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getOrderById(this.id)
      .subscribe(data => {
        console.log(data)
        this.order = data;
      }, error => console.log(error));
  }

  updateOrder() {
    this.employeeService.updateOrder(this.id, this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    this.updateOrder();
  }

  gotoList() {
    this.router.navigate(['/order']);
  }



}
