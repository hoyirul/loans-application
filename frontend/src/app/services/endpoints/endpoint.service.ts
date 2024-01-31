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

  getReportOrdersByDate = (body: any) => {
    return this.http.post(this._url + "/orders/reports/orders-by-range-date", body, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getReportVehicleOrders = () => {
    return this.http.get(this._url + "/orders/reports/vehicle-orders", httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  updateReturnOrder = (id: string) => {
    return this.http.get(this._url + `/orders/${id}/returned`, httpHeadersLoggedIn).pipe(
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

  // Start Approvals
  getApprovals = () => {
    return this.http.get(this._url + "/approvals", httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getApprovalByUserId = () => {
    return this.http.get(this._url + "/approvals/by/user", httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getApprovalByOrderId = (id: string) => {
    return this.http.get(this._url + "/approvals/order/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  getApprovalById = (id: number) => {
    return this.http.get(this._url + "/approvals/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  // approve
  approve = (id: number) => {
    return this.http.get(this._url + `/approvals/${id}/approve`, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  // reject
  reject = (id: number) => {
    return this.http.get(this._url + `/approvals/${id}/reject`, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  createApproval = (body: any) => {
    return this.http.post(this._url + "/approvals", body, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  updateApproval = (id: number, body: any) => {
    return this.http.put(this._url + "/approvals/" + id, body, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }

  deleteApproval = (id: number) => {
    return this.http.delete(this._url + "/approvals/" + id, httpHeadersLoggedIn).pipe(
      catchError(new httpHelper().errorHttpHelper)
    )
  }
  // End Approvals

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
