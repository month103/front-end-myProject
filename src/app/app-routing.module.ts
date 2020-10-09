import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {OrderComponent} from "./order/order.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UpdateOrderComponent} from "./update-order/update-order.component";
import {CreateOrderComponent} from "./create-order/create-order.component";
import {SignUpComponent} from "./sign-up/sign-up.component";


const routes: Routes = [{
  path:'order',
  component: OrderComponent
},
  {
    path:'my-profile',
    component: MyProfileComponent
  },
  {path: '', component: LoginComponent},
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'updateOrder/:id',
    component: UpdateOrderComponent
  },
  {
    path: 'createOrder',
    component: CreateOrderComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
