import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approval-create',
  templateUrl: './approval-create.component.html',
  styleUrls: ['./approval-create.component.css']
})
export class ApprovalCreateComponent {
  form!: FormGroup;
  response: any;
  approval_users: any;
  approvals: any;
  id: any;

  constructor(
    private _service: EndpointService,
    private route: ActivatedRoute
  ) {
  }

  formatDateTime(dateString: string): string {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${this.padZero(dateObject.getMonth() + 1)}-${this.padZero(dateObject.getDate())} ${this.padZero(dateObject.getHours())}:${this.padZero(dateObject.getMinutes())}:${this.padZero(dateObject.getSeconds())}`;
    return formattedDate;
  }

  padZero(value: number): string {
    return String(value).padStart(2, '0');
  }

  initForm(): void {
    this.form = new FormGroup({
      user_id: new FormControl('-1', Validators.required),
      level: new FormControl('-1', Validators.required)
    });
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

  // get approval
  getApprovals = () => {
    this.id = this.route.snapshot.paramMap.get('order_id');
    this._service.getApprovalByOrderId(this.id).subscribe(
      (data: any) => {
        this.approvals = data.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  createApproval(): void {
    const body = {
      user_id: this.form.value.user_id,
      order_id: this.id,
      level: this.form.value.level,
    }
    this._service.createApproval(body).subscribe({
      next: data => {
        this.handleSuccess(data, 'Approval has been created.');
      },
      error: err => {
        this.handleError(err);
      }
    });
  }

  // delete approval
  deleteApproval(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this approval!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it.',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.deleteApproval(id).subscribe({
          next: data => {
            this.handleSuccess(data, 'Approval has been deleted.');
          },
          error: err => {
            this.handleError(err);
          }
        });
      }
    });
  }

  handleSuccess(data: any, message: any): void {
    this.getApprovals();
    this.initForm();
    Swal.fire(
      'Success!',
      message,
      'success'
    );
  }

  handleError(err: any): void {
    this.getApprovals();
    Swal.fire(
      'Error!',
      'Approval has not been created.',
      'error'
    );
  }

  ngOnInit(): void {
    this.initForm();
    this.getApprovalUsers();
    this.getApprovals();
  }
}
