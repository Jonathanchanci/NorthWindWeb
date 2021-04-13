import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './/order-routing.module';
import { OrderContainerComponent } from './order-container/order-container.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderContainerComponent]
})
export class OrderModule { }
