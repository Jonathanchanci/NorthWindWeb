import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerModule } from './customer.module';

const customerRoutes: Routes = [
{
  path: '',
  children: [
    {
      path:'',
      component: CustomerListComponent
    }
  ]
}
];

@NgModule({
  imports: [
    //CommonModule
    RouterModule.forChild(customerRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class CustomerRoutingModule { }
