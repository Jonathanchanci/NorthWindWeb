import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { TableViewComponent } from 'src/app/shared/table-view/table-view.component';
import { OrderList } from '../models/order-list';
import { OrderContainerService } from './order-container.service';



@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss'],
  providers: [OrderContainerService]
})
export class OrderContainerComponent implements OnInit, AfterViewInit {

  items: OrderList[] = [];
  public colums: object[] =[];
  numberOfRecords = 0
  public detailColumns: object[] = [];
  @ViewChild("tableView") tableView: TableViewComponent<any>;
  @ViewChild("orderIdCellTemplate") private orderIdCellTemplate: TemplateRef<any>;
  @ViewChild("orderNumberCellTemplate") private orderNumberCellTemplate: TemplateRef<any>;

  pageSizeOptions: number[] = [5 , 10, 20, 30, 50];
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private ref: ChangeDetectorRef, private service: OrderContainerService) { }
  ngAfterViewInit(): void {
    this.colums = this.getColums();
    this.detailColumns = this.getDetailsColums();
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.getOrders(1, 10);    
  }

  getOrders(page: number, rows: number): void {
    this.service.getOrderList(page, rows)
      .subscribe( response => {
        this.items = response;
        this.numberOfRecords = response[0].totalRecords;
      });
  }

  private getColums(): Object[]{
    return[
      {
        name: "id",
        flexGrow: 0.5,
        cellTemplate : this.orderIdCellTemplate
      },
      {
        name: "Customer",
        flexGrow: 1,
        prop: "customer"
      },
      {
        name: "Total",
        flexGrow: 0.5,
        prop: "totalAmount"
      },
      {
        name: "# Orden",
        flexGrow: 0.5,
        cellTemplate: this.orderNumberCellTemplate
      }
    ]
  }

  private getDetailsColums(): object[]{
    return[
      {
        name: "Product",
        flexGrow: 0.5,
        prop: "productName"
      },
      {
        name: "Unit Price",
        flexGrow: 0.5,
        prop: "unitPrice"
      },
      {
        name: "Quantity",
        flexGrow: 0.5,
        prop: "quantity"
      }
    ]
  }

  toggleExpandRow(row){
    this.tableView.toggleExpandRow(row);
    this.ref.detectChanges();
  }

  changePage(event: any): void{
    this.getOrders(event.pageIndex + 1, event.pageSize);
  }
}
