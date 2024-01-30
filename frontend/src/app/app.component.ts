import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/auth/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private router: Router,
    public auth: StorageService
  ) { }

  ngOnInit(): void {
    this.isAuthRoute()
  }

  isAuthRoute(){
    return (this.auth.isLogged() == false) ? this.router.url === '/' : this.router.url === '/dashboard'
  }
}
