import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError = '';
  loginForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildLogingForm();
  }

  buildLogingForm():void{
    this.loginForm = this.fb.group({
      email: [
        '', 
        [
          Validators.required, 
          Validators.email
        ]
      ],
      password: ['', 
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(50)
        ]
      ]
    });
  }

  login(submittedForm: FormGroup){
    debugger;
  }

}
