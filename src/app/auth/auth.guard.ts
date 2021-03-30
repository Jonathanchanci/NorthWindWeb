import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, IAuthStatus } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  protected currentAuthStatus: IAuthStatus;
  constructor(private authServices: AuthService, private router: Router){
    this.authServices.authStatus.subscribe(
      authStatus => {this.currentAuthStatus =(this.authServices.getAuthStatus())}
    );
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin();
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkPermissions(childRoute);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkPermissions(next);
  }

  protected checkLogin(){
    if(this.authServices.getToken() == null || this.authServices.getToken() === ''){
      alert('Debes loguearte para continuar');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  protected checkPermissions(route?: ActivatedRouteSnapshot){
    let roleMatch = true;
    if (route){
      const expectedRole = route.data.expectedRole;
      if(expectedRole){
        roleMatch = this.currentAuthStatus.role === expectedRole;
      }
    }

    if(!roleMatch){
      alert("No tienes permisos para acceder a este modulo");
      this.router.navigate(["home"]);
      return false;
    }
    return true;
  }
}
