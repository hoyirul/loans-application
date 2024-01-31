import { Component } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';

@Component({
  selector: 'app-approval-index',
  templateUrl: './approval-index.component.html',
  styleUrls: ['./approval-index.component.css']
})
export class ApprovalIndexComponent {
  approvals: any;

  constructor(
    private _service: EndpointService
  ) {
    this.getApprovals();
  }

  getApprovals = () => {
    this._service.getApprovals().subscribe(
      (data: any) => {
        this.approvals = data.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  formatDateTime(dateString: string): string {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${this.padZero(dateObject.getMonth() + 1)}-${this.padZero(dateObject.getDate())} ${this.padZero(dateObject.getHours())}:${this.padZero(dateObject.getMinutes())}:${this.padZero(dateObject.getSeconds())}`;
    return formattedDate;
  }

  padZero(value: number): string {
    return String(value).padStart(2, '0');
  }
}
