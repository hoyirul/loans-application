import { Component } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent {
  form!: FormGroup;
  response: any;
  id: any;

  constructor(
    private _service: EndpointService,
    private router: Router
  ) { }

  initForm(): void {
    this.form = new FormGroup({
      category: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      police_number: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      bbm_consume: new FormControl('', Validators.required),
      service_schedule: new FormControl('', Validators.required),
    });
  }

  showData = () => {
    this.id = this.router.url.split('/')[3];
    this._service.getVehicleById(this.id).subscribe(
      (data: any) => {
        this.form.patchValue({
          category: data.data.category,
          type: data.data.type,
          name: data.data.name,
          police_number: data.data.police_number,
          amount: data.data.amount,
          bbm_consume: data.data.bbm_consume,
          service_schedule: this.formatDate(data.data.service_schedule),
        });
      },
      error => {
        console.log(error);
      }
    )
  }

  formatDate(dateString: string): string {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${this.padZero(dateObject.getMonth() + 1)}-${this.padZero(dateObject.getDate())}`;
    return formattedDate;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  updateVehicle(id: number): void {
    this._service.updateVehicle(id, this.form.value).subscribe({
      next: data => {
        this.handleUpdateSuccess(data);
      },
      error: err => {
        this.handleUpdateError(err);
      }
    });
  }

  handleUpdateSuccess(data: any): void {
    this.response = data.data;
    this.router.navigate(['/vehicles']);
    Swal.fire(
      'Success!',
      'Vehicle has been updated.',
      'success'
    )
  }

  handleUpdateError(err: { error: { message: string; data: any; }; }): void {
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
    this.showData();
    this.initForm();
  }
}
