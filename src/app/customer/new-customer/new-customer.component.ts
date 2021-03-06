import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { WhiteSpaceValidator } from 'src/app/shared/validators/WhiteSpaceValidator';
import { AddOrEditCustomer } from '../models/AddOrEditCustomer';
import { NewCustomerService } from './new-customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
  providers: [NewCustomerService]
})
export class NewCustomerComponent implements OnInit {

  newCustomerForm: FormGroup;
  customer: AddOrEditCustomer;
  constructor(private fb: FormBuilder, private service: NewCustomerService, 
    public dialogRef: MatDialogRef<NewCustomerComponent>) { }

  ngOnInit() {
    this.buildNewCustomerForm();
  }

  buildNewCustomerForm(): void{
    this.newCustomerForm = this.fb.group({
      firstName: ['', [Validators.required, WhiteSpaceValidator.cannotContainSpace]],
      lastName: ['', Validators.compose([Validators.required, WhiteSpaceValidator.cannotContainSpace])],
      city: ['', Validators.compose([Validators.required, WhiteSpaceValidator.cannotContainSpace])],
      country: ['', Validators.compose([Validators.required, WhiteSpaceValidator.cannotContainSpace])],
      phone: ['', Validators.compose([Validators.required, WhiteSpaceValidator.cannotContainSpace])],
    });
  }

  save(): void{
    if(this.newCustomerForm.dirty && this.newCustomerForm.valid){
      const p = Object.assign({}, this.customer, this.newCustomerForm.value);
      this.service.saveCustomer(p)
        .subscribe(response => {
          this.dialogRef.close();
        });
    } else if (!this.newCustomerForm.dirty){
      this.newCustomerForm.reset();
    }
  }
}
