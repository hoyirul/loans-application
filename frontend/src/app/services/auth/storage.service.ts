import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  public isLogged = (): boolean => {
    if(!this.getToken()){
      return false;
    }

    return true;
  }

  public saveToken(token: any): void {
    window.sessionStorage.removeItem('access_token');
    window.sessionStorage.setItem('access_token', token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem('access_token');
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
