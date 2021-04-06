import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

  numberOfRecords: number = 0;
  customers: Customer[] = [];
  pageSizeOptions: number[] = [5 , 10, 20, 30, 50];
  pageSize: number = 10;
  pageIndex: number = 0;
  constructor(private customerServices: CustomerService) { 
    this.getCustomer(1, this.pageSize);
  }

  ngOnInit() {
  }

  getCustomer(page: number, rows: number): void{
    this.customerServices.getCustomerList(page, rows).
      subscribe(
        response => {
          this.customers = response;
          this.numberOfRecords = response[0].totalRecords;
        }
      );
  }

  changePage(event: any): void{
    this.getCustomer(event.pageIndex + 1, event.pageSize);
  }
}
