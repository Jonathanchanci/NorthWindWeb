import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwindWeb';

  _displayLogin = false;

  get displayMenu(){
    return this._displayLogin;
  }
}
