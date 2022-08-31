import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { SubadminCompComponent } from './subadmin-comp/subadmin-comp.component';
import {Routes} from "@angular/router";
import { Admin1Component } from './admin-comp/admin1/admin1.component';
import { Admin2Component } from './admin-comp/admin2/admin2.component';



const routes : Routes = [
  {
    path: 'admincomp',
    component: AdminCompComponent,
    children: [
      {
        path: 'admin1',
        component: Admin1Component
      },
      {
        path: 'admin1',
        component: Admin2Component
      }
      ]

  },
  {
    path: 'sub-admin-comp',
    component: AdminCompComponent
  }

]

@NgModule({
  declarations: [
    AdminCompComponent,
    SubadminCompComponent,
    Admin1Component,
    Admin2Component
  ],
  imports: [
    CommonModule
  ]
})


export class AdminModule { }