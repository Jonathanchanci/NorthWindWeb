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

  customers: Customer[] = [];
  constructor(private customerServices: CustomerService) { 
    this.getCustomer(1, 20);
  }

  ngOnInit() {
  }

  getCustomer(page: number, rows: number): void{
    this.customerServices.getCustomerList(page, rows).
      subscribe(
        response => this.customers = response
      );
  }
}
