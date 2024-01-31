import { Component } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approval-by-user',
  templateUrl: './approval-by-user.component.html',
  styleUrls: ['./approval-by-user.component.css']
})
export class ApprovalByUserComponent {
  approvals: any;

  constructor(
    private _service: EndpointService
  ) {
    this.getApprovalByUserId();
  }

  getApprovalByUserId = () => {
    this._service.getApprovalByUserId().subscribe(
      (data: any) => {
        this.approvals = data.data;
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
    return String(value).padStart(2, '0');
  }

  approve(id: number): void {
    // with input information (optional) preconfirm
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will approve this order.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, approve it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.approve(id).subscribe({
          next: data => {
            this.handleSuccess(data, 'Order has been approved.');
          },
          error: err => {
            this.handleError(err);
          }
        });
      }
    })
  }

  reject(id: number): void {
    // with input information (optional) preconfirm
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will reject this order.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, reject it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.reject(id).subscribe({
          next: data => {
            this.handleSuccess(data, 'Order has been rejected.');
          },
          error: err => {
            this.handleError(err);
          }
        });
      }
    })
  }

  detail(id: number): void {
    // show detail with swall

  }

  handleSuccess(data: any, message: string): void {
    this.getApprovalByUserId();
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
}
