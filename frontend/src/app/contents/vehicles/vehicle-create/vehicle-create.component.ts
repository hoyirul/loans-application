import { Component } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent {
  form!: FormGroup;
  response: any;

  constructor(
    private _service: EndpointService,
    private router: Router
  ) { }

  initForm(): void {
    this.form = new FormGroup({
      category: new FormControl('-1', Validators.required),
      type: new FormControl('-1', Validators.required),
      name: new FormControl('', Validators.required),
      police_number: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      bbm_consume: new FormControl('', Validators.required),
      service_schedule: new FormControl('', Validators.required),
    });
  }

  createVehicle(): void {
    this._service.createVehicle(this.form.value).subscribe({
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
    this.router.navigate(['/vehicles']);
    Swal.fire(
      'Success!',
      'Vehicle has been created.',
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
  }

  ngOnInit(): void {
    this.initForm();
  }
}
