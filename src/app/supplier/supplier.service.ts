import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from './models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  getSupplierList(page: number, rows: number):Observable<Supplier[]>{
    return this.http.get<Supplier[]>(`${environment.urlService}supplier/GetPaginatedSupplier/${page}/${rows}`);
  }
}
