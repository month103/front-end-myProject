import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrderComponent } from './order/order.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {RestApiService} from "./rest-api.service";
import {HttpInterceptorService} from "./httpInterceptor.service";
import { UpdateOrderComponent } from './update-order/update-order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OrderTextFilterPipe } from './order-text-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MyProfileComponent,
    OrderComponent,
    NotFoundComponent,
    LoginComponent,
    UpdateOrderComponent,
    CreateOrderComponent,
    SignUpComponent,
    OrderTextFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
