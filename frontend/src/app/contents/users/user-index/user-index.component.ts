import { Component } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {
  form!: FormGroup;
  response: any;

  constructor(
    private _service: EndpointService
  ) { }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  getUsers = () => {
    this._service.getUsers().subscribe(
      (data: any) => {
        this.response = data.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  createUser = () => {
    Swal.fire({
      title: 'Create User',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Email">',
      focusConfirm: false,
      preConfirm: () => {
        const name = (<HTMLInputElement>document.getElementById('swal-input1')).value;
        const email = (<HTMLInputElement>document.getElementById('swal-input2')).value;

        this._service.createUser({ name, email }).subscribe({
          next: data => {
            this.handleSuccess(data, 'User has been created.');
          },
          error: err => {
            this.handleError(err);
          }
        });
      }
    })
  }

  updateUser = (id: number) => {
    this._service.getUserById(id).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Update User',
          html:
            `<input id="swal-input1" class="swal2-input" value="${data.data.name}">` +
            `<input id="swal-input2" class="swal2-input" value="${data.data.email}">`,
          focusConfirm: false,
          preConfirm: () => {
            const name = (<HTMLInputElement>document.getElementById('swal-input1')).value;
            const email = (<HTMLInputElement>document.getElementById('swal-input2')).value;

            this._service.updateUser(id, { name, email }).subscribe({
              next: data => {
                this.handleSuccess(data, 'User has been updated.');
              },
              error: err => {
                this.handleError(err);
              }
            });
          }
        })
      },
      error => {
        console.log(error);
      }
    )
  }

  handleSuccess(data: any, message: any): void {
    this.getUsers();
    Swal.fire(
      'Success!',
      message,
      'success'
    )
  }

  handleError(err: { error: { message: string; data: any; }; }): void {
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
      Swal.fire(
        'Warning!',
        `${err.error.message}`,
        'warning'
      );
    }
  }

  formatDateTime(dateString: string): string {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${this.padZero(dateObject.getMonth() + 1)}-${this.padZero(dateObject.getDate())} ${this.padZero(dateObject.getHours())}:${this.padZero(dateObject.getMinutes())}:${this.padZero(dateObject.getSeconds())}`;
    return formattedDate;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  ngOnInit(): void {
    this.initForm();
    this.getUsers();
  }
}
