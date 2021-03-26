import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { CustomerModule } from './customer/customer.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'customer',
    loadChildren: './customer/customer.module#CustomerModule'
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    //CommonModule
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
