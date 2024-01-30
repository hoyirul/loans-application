import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/auth/storage.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  form!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = []; // Fix: Initialize roles as an empty array

  constructor(
    private authService: AuthService,
    public auth: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  authLogin(): void {
    const { email, password } = this.form.value;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.handleLoginSuccess(data);
      },
      error: err => {
        this.handleLoginError(err);
      }
    });
  }

  handleLoginSuccess(data: any): void {
    this.auth.saveToken(data.data.access_token);
    this.auth.saveUser(data.data.user);

    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.roles = this.auth.getUser().roles;

    this.router.navigate(['/']);
    window.location.reload();

    Swal.fire(
      'Welcome!',
      'Loans App login was successful!',
      'success'
    );

    this.clearForm();
  }

  handleLoginError(err: { error: { message: string; data: any; }; }): void {
    if (err.error.message === 'Validation errors') {
      // Handle validation errors
      const validationErrors = err.error.data;
      for (const field in validationErrors) {
        if (validationErrors.hasOwnProperty(field)) {
          this.form.get(field)?.setErrors({ serverError: validationErrors[field][0] });
          Swal.fire(
            'Warning!',
            `${validationErrors[field][0]}`,
            'warning'
          );
        }
      }
    } else {
      // Handle other errors
      Swal.fire(
        'Warning!',
        `${err.error.message}`,
        'warning'
      );
    }

    this.isLoginFailed = true;
  }

  clearForm(): void {
    this.form.reset();
  }
}
