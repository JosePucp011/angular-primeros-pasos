import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customertURL = `http://localhost:8082/api/customers/`;

  constructor(private httpClient: HttpClient) {

    }

  public list(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`http://localhost:8111/api/customers/all`);
  }

  public changeState(id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(this.customertURL + `update/${id}`, {});
  }


}
