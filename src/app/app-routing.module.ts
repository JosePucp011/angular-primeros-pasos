import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ListaCustomerComponent } from './client/lista-customer/lista-customer.component';



const routes: Routes = [
  {path: '', component: ListaCustomerComponent},
  {path: '**',redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
