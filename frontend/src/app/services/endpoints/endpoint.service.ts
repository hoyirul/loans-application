import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { httpHeadersLoggedIn } from 'src/app/helpers/headers.helper';
import { httpHelper } from 'src/app/helpers/http.helper';
import { baseUrl } from 'src/app/services/base_url';

@Injectable({
  providedIn: 'root'
})

export class EndpointService {

  _baseUrl(){
    return new baseUrl()._apiUrl();
  }

  private _url: string = this._baseUrl();

  constructor(private http: HttpClient) {}

  // Start Orders
  getReportApprovedOrders = () => {
    return this.http.get(this._url + "/orders/reports/approved-orders", httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getReportVehicleOrders = () => {
    return this.http.get(this._url + "/orders/reports/vehicle-orders", httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getOrders = () => {
    return this.http.get(this._url + "/orders", httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getOrderById = (id: string) => {
    return this.http.get(this._url + "/orders/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  createOrder = (body: any) => {
    return this.http.post(this._url + "/orders", body, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  deleteOrder = (id: string) => {
    return this.http.delete(this._url + "/orders/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }
  // End Orders

  // Start Users
  getUsers = () => {
    return this.http.get(this._url + "/users", httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getUserById = (id: number) => {
    return this.http.get(this._url + "/users/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  createUser = (body: any) => {
    return this.http.post(this._url + "/users", body, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  updateUser = (id: number, body: any) => {
    return this.http.put(this._url + "/users/" + id, body, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  deleteUser = (id: number) => {
    return this.http.delete(this._url + "/users/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }
  // End Users

  // Start Vehicle
  getVehicles = () => {
    return this.http.get(this._url + "/vehicles", httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getVehicleById = (id: number) => {
    return this.http.get(this._url + "/vehicles/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  createVehicle = (body: any) => {
    return this.http.post(this._url + "/vehicles", body, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  updateVehicle = (id: number, body: any) => {
    return this.http.put(this._url + "/vehicles/" + id, body, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  deleteVehicle = (id: number) => {
    return this.http.delete(this._url + "/vehicles/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }
  // End Vehicle
}
