import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {
  form!: FormGroup;
  response: any;
  vehicles: any;
  approval_users: any;

  constructor(
    private _service: EndpointService,
    private router: Router
  ) {
  }

  initForm(): void {
    this.form = new FormGroup({
      vehicle_id: new FormControl('-1', Validators.required),
      approval_user_id: new FormControl('-1', Validators.required),
      employee_name: new FormControl('', Validators.required),
      driver_name: new FormControl('', Validators.required),
      information: new FormControl('', Validators.required)
    });
  }

  getVehicles = () => {
    this._service.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getApprovalUsers = () => {
    this._service.getUsers().subscribe(
      (data: any) => {
        this.approval_users = data.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  createOrder(): void {
    this._service.createOrder(this.form.value).subscribe({
      next: data => {
        this.handleCreateSuccess(data);
      },
      error: err => {
        this.handleCreateError(err);
      }
    });
  }

  handleCreateSuccess(data: any): void {
    this.response = data.data;
    this.router.navigate(['/orders']);
    Swal.fire(
      'Success!',
      'Order has been created.',
      'success'
    )
  }

  handleCreateError(err: { error: { message: string; data: any; }; }): void {
    if (err.error.message === 'Validation errors') {
      // Handle validation errors
      const validationErrors = err.error.data;
      for (const field in validationErrors) {
        if (validationErrors.hasOwnProperty(field)) {
          this.form.get(field)?.setErrors({ serverError: validationErrors[field][0] });
          Swal.fire(
            'Error!',
            validationErrors[field][0],
            'error'
          )
        }
      }
    } else {
      Swal.fire(
        'Error!',
        err.error.message,
        'error'
      )
    }
  }

  ngOnInit(): void {
    this.getVehicles();
    this.getApprovalUsers();
    this.initForm();
  }
}
