import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OrdersComponent } from "./orders.component";

export const orderRoutes: Routes = [{ path: "", component: OrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(orderRoutes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
