import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersComponent } from "./customers.component";
import { CustomersPage1Component } from "./customers-page1/customers-page1.component";
import { CustomersPage2Component } from "./customers-page2/customers-page2.component";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersPage1Component,
    CustomersPage2Component
  ],
  imports: [CommonModule, CustomersRoutingModule]
})
export class CustomersModule {}
