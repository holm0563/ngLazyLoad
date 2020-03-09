import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomersComponent } from "./customers.component";
import { CustomersPage1Component } from "./customers-page1/customers-page1.component";
import { CustomersPage2Component } from "./customers-page2/customers-page2.component";

export const customerRoutes: Routes = [
  {
    path: "",
    component: CustomersComponent,
    children: [
      {
        path: "1",
        component: CustomersPage1Component
      },
      {
        path: "2",
        component: CustomersPage2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
