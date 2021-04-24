import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-supplier-list-table',
  templateUrl: './supplier-list-table.component.html',
  styleUrls: ['./supplier-list-table.component.css']
})
export class SupplierListTableComponent implements OnInit {

  @Input() items: Supplier[] = [];
  public columns: object[]=[];
  constructor() { }

  ngOnInit() {
    this.columns =  this.getColumns();
  }

  private getColumns(): object[]{
    return[
      {
        name: "Id",
        flexGrow: 0.5,
        prop: "id"
      },
      {
        name: "Company Name",
        flexGrow: 1,
        prop: "companyName"
      },
      {
        name: "Contact Name",
        flexGrow: 1,
        prop: "contactName"
      },
      {
        name: "City",
        flexGrow: 0.5,
        prop: "city"
      }
    ]
  }
}
