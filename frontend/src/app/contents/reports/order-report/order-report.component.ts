import { Component } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoints/endpoint.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExportExcelService } from 'src/app/services/exports/export-excel.service';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css']
})
export class OrderReportComponent {
  start: any;
  end: any;
  orders: any;
  form!: FormGroup;

  constructor(
    private _service: EndpointService,
    private _export: ExportExcelService
  ) {
  }

  initForm(): void {
    this.form = new FormGroup({
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required)
    });
  }

  getOrders = () => {
    this._service.getOrders().subscribe(
      (data: any) => {
        this.orders = data.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getOrdersByDate = () => {
    this._service.getReportOrdersByDate(this.form.value).subscribe(
      (data: any) => {
        this.start = this.formatDate(this.form.value.start_date);
        this.end = this.formatDate(this.form.value.end_date);
        this.orders = data.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  exportExcel(): void {
    this._export.handleExportOptions(this.orders, '.xlsx', `orders ${this.start} to ${this.end}`);
  }

  exportCsv(): void {
    this._export.handleExportOptions(this.orders, '.csv', `orders ${this.start} to ${this.end}`);
  }

  formatDateTime(dateString: string): string {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${this.padZero(dateObject.getMonth() + 1)}-${this.padZero(dateObject.getDate())} ${this.padZero(dateObject.getHours())}:${this.padZero(dateObject.getMinutes())}:${this.padZero(dateObject.getSeconds())}`;
    return formattedDate;
  }

  formatDate(dateString: string): string {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.getFullYear()}-${this.padZero(dateObject.getMonth() + 1)}-${this.padZero(dateObject.getDate())}`;
    return formattedDate;
  }

  padZero(value: number): string {
    return String(value).padStart(2, '0');
  }

  ngOnInit(): void {
    this.initForm();
    this.getOrders();
  }
}
