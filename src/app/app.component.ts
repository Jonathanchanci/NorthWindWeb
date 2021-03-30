import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'northwindWeb';

  _displayLogin = false;
constructor(private authServices: AuthService){

}
  get displayMenu(){
    return this._displayLogin;
  }

  ngOnInit(): void {
    this.authServices.authStatus.subscribe(
      authStatus => {
        const jwt = this.authServices.getToken();
        setTimeout(() => (this._displayLogin = !(jwt == null || jwt === ''), 0));
      }
    );
  }

}
