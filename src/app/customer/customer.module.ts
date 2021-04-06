import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './/customer-routing.module';
import { MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatPaginatorModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomerModule { }
