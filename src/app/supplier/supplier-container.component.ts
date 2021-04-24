import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SwitchViewComponent } from '../shared/switch-view/switch-view.component';
import { Supplier } from './models/supplier';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier-container',
  templateUrl: './supplier-container.component.html',
  styleUrls: ['./supplier-container.component.css'],
  providers: [SupplierService]
})
export class SupplierContainerComponent implements OnInit, AfterViewInit {

  items: Supplier[] = [];
  @ViewChild("cardViewTemplate") private cardViewTemplate: TemplateRef<any>;
  @ViewChild("tableViewTemplate") private tableViewTemplate: TemplateRef<any>;
  templates: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  defaultTemplate: string;

  constructor(private service: SupplierService, private ref: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.templates.set(SwitchViewComponent.CARD_KEY, this.cardViewTemplate);
    this.templates.set(SwitchViewComponent.TABLE_KEY, this.tableViewTemplate);
    this.ref.detectChanges();
  }


  ngOnInit() {
    this.getSupplierList(1, 10);
    this.defaultTemplate = SwitchViewComponent.CARD_KEY;
  }

  getSupplierList(page: number, rows: number): void{
    this.service.getSupplierList(page, rows)
      .subscribe(response =>{
        this.items = response;
      });
  }

}
