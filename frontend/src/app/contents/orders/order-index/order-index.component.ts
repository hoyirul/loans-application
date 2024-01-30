import { Component } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-index',
  templateUrl: './order-index.component.html',
  styleUrls: ['./order-index.component.css']
})
export class OrderIndexComponent {
  response: any;

  constructor(
    private _service: EndpointService,
  ) { }

  formatDate(dateString: string): string {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${this.padZero(dateObject.getMonth() + 1)}-${this.padZero(dateObject.getDate())}`;
    return formattedDate;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  getOrders = () => {
    this._service.getOrders().subscribe(
      (data: any) => {
        this.response = data.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteOrder = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this order!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it!',
    }).then((result: any) => {
      if (result.value) {
        this._service.deleteOrder(id).subscribe(
          (data: any) => {
            this.getOrders();
            Swal.fire(
              'Deleted!',
              'Your order has been deleted.',
              'success'
            )
          },
          error => {
            Swal.fire(
              'Failed!',
              'Your order failed to delete.',
              'error'
            )
          }
        )
      }
    })
  }

  ngOnInit(): void {
    this.getOrders();
  }
}
