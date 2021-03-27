import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role.enum';
import { catchError, map } from "rxjs/operators";
import * as decode from "jwt-decode";
import { transformError } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authProvider: (email:string, password: string) => Observable<IServerAuthResponse>;
  authStatus = new BehaviorSubject<IAuthStatus>(defaultAuthSatatus);
  
  constructor(private httpClient: HttpClient) { 
    this.authProvider = this.userAuthProvider;
  }

  private userAuthProvider(email: string, password: string): Observable<IServerAuthResponse>{
    return this.httpClient.post<IServerAuthResponse>(`${environment.urlService}token`, {email:email, password: password});
  }

  login(email: string, password: string): Observable<IAuthStatus>{
    this.logout();

    const loginResponse = this.authProvider(email, password).pipe(
      map(value => {
        const result = decode(value.access_Token);
        return result as IAuthStatus;
      }), catchError(transformError)
    );

      loginResponse.subscribe(
        res => {
          this.authStatus.next(res);
        },
        err => {
          this.logout();
          return observableThrowError(err);
        }
      );

    return loginResponse;
  }

  logout(){
    this.authStatus.next(defaultAuthSatatus);
  }
}

export interface IAuthStatus{
  role: Role;
  primarysid: number;
  unique_name: string;
}

interface IServerAuthResponse{
  access_Token: string;
}

const defaultAuthSatatus: IAuthStatus = {
  role: Role.None,
  primarysid: null,
  unique_name: null,
};