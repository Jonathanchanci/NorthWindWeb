import { Component, OnInit } from '@angular/core';
import { Supplier } from './models/supplier';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier-container',
  templateUrl: './supplier-container.component.html',
  styleUrls: ['./supplier-container.component.css'],
  providers: [SupplierService]
})
export class SupplierContainerComponent implements OnInit {

  supplierList: Supplier[] = [];
  constructor(private service: SupplierService) { }

  ngOnInit() {
    this.getSupplierList(1, 10);
  }

  getSupplierList(page: number, rows: number): void{
    this.service.getSupplierList(page, rows)
      .subscribe(response =>{
        this.supplierList = response;
      });
  }

}
