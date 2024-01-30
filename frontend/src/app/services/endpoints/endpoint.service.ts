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
}
