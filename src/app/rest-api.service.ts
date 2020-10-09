import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "./login/user";
import {Order} from "./order/order";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  public username: String;
  public password: String;

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  USER_PASSWORD_SESSION_ATTRIBUTE_NAME = 'authenticatedUser1'
  constructor(private http:HttpClient, private router:Router) { }

  public login(username:string, password:string){
    const headers = new HttpHeaders({Authorization: `Basic ${window.btoa(username + ":" + password)}` });
    return this.http.get("http://localhost:8080/", {headers,responseType:'text' as 'json'}).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    sessionStorage.setItem(this.USER_PASSWORD_SESSION_ATTRIBUTE_NAME, password)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
    this.router.navigate(['/'])

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    return user !== null;

  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)

    if (user === null) return '';
    return user
  }

  getOrders(): Observable<any> {
    return  this.http.get("http://localhost:8080/getOrders");
  }

  updateOrder(id:number, order): Observable<any>{
    return this.http.post("http://localhost:8080/updateOrder", order);
  }

  deleteOrder(id: number): Observable<any>{
    return this.http.delete("http://localhost:8080/deleteOrder/" + id);
  }

  getOrderById(id: number): Observable<any> {
    return  this.http.get("http://localhost:8080/getOrderById/" + id)
  }

  createOrder(order: Order): Observable<any>{
    return  this.http.post("http://localhost:8080/order", order)
  }

  signUp(user: User) {
    return this.http.post('http://localhost:8080/signUp', user);
  }

  getUser(): Observable<any> {
    return this.http.get('http://localhost:8080/get');
  }

  userUpdate(user: User){
    return this.http.post("http://localhost:8080/update", user)
  }
}

