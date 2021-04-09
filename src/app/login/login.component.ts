import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { WhiteSpaceValidator } from '../shared/validators/WhiteSpaceValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError = '';
  loginForm : FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.buildLogingForm();
  }

  buildLogingForm():void{
    this.loginForm = this.fb.group({
      email: [
        '', 
        [
          Validators.required, 
          Validators.email,
          WhiteSpaceValidator.cannotContainSpace
        ]
      ],
      password: ['', 
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(50),
          WhiteSpaceValidator.cannotContainSpace
        ]
      ]
    });
  }

  login(submittedForm: FormGroup){
    this.authService.login(submittedForm.value.email, submittedForm.value.password).
      subscribe(authResponse => {
        this.router.navigate(['/home']);
      }, error => this.loginError = error);
  }

}
