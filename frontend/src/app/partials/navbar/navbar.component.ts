import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/auth/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    public auth: AuthService,
    public authStorage: StorageService,
    private router: Router
  ) { }

  confirmLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to exit?',
      text: 'Be patient please!',
      icon: 'warning',
      confirmButtonText: 'Submit',
      showCancelButton: true,
      cancelButtonText: 'No',
      preConfirm: () => {
        this.authLogout();
      }
    });
  }

  authLogout = () => {
    this.auth.logout();
      this.router.navigate(["/"])
  }
}
