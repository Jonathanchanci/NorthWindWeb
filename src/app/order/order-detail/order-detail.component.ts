import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderList } from '../models/order-list';
import { OrderDetailService } from './order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [ OrderDetailService]
})
export class OrderDetailComponent implements OnInit, AfterViewInit {

  orderId:number;
  orderItem: OrderList = new OrderList();
  public detailColums: object[] = [];

  constructor(private service: OrderDetailService, private router: ActivatedRoute, 
    private ref: ChangeDetectorRef) { }

    
  ngAfterViewInit(): void {
   this.detailColums = this.getDetailsColumns();
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.router.params.subscribe(params =>{
      this.orderId = params.id;
      this.getOrderById(params.id);
    });
  }

  getOrderById(orderId: number): void{
    this.service.getOrderById(orderId)
      .subscribe(response => {
        this.orderItem = response;
      });
  }

  private getDetailsColumns(): object[]{
    return [
      {
        name: "Product",
        flexGrow: 0.5,
        prop: "productName"
      },
      {
        name: "UnitPrice",
        flexGrow: 0.5,
        prop: "unitPrice"
      },
      {
        name: "Quiantity",
        flexGrow: 0.5,
        prop: "quantity"
      },
    ]
  }

}
