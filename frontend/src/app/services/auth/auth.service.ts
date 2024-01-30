import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/app/services/base_url';
import { httpHeadersLoggedIn, httpHeadersNotLoggedIn } from 'src/app/helpers/headers.helper';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  _baseUrl() {
    return new baseUrl()._apiUrl();
  }

  private _url: string = this._baseUrl();

  constructor(private http: HttpClient) { }

  login = (email: string, password: string) => {
    return this.http.post(this._url + '/auth/login', {
      email,
      password
    }, httpHeadersNotLoggedIn);
  }

  logout = () => {
    window.sessionStorage.clear();
    return this.http.post(this._url + '/auth/logout', httpHeadersLoggedIn);
  }

}
