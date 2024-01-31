import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() { }

  handleExportOptions(dataToExport: any[], format: string, filename: string) {
    if (format === '.xlsx') {
      console.log('.xlsx');
      this.exportToExcel(dataToExport, filename);
    } else if (format === '.csv') {
      console.log('.csv');
      this.exportToCsv(dataToExport, filename);
    }
  }

  getHeaders(data: any[]): string[] {
    if (data.length > 0) {
      return Object.keys(data[0]);
    }
    return [];
  }

  exportToExcel(data: any[], filename: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data, { header: this.getHeaders(data) });
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelBlob: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    saveAs(excelBlob, `${filename}.xlsx`);
  }

  exportToCsv(data: any[], filename: string) {
    const csv = Papa.unparse(data, { header: true });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, filename + '.csv');
  }
}
