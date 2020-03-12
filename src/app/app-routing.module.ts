import { NgModule } from "@angular/core";
import { Routes, RouterModule, NoPreloading } from "@angular/router";
// import { customerRoutes } from "./customers/customers-routing.module";
// import { orderRoutes } from "./orders/orders-routing.module";

const lazyRoutes: Routes = [
  {
    path: "customers",
    loadChildren: () =>
      import("./customers/customers.module").then(m => m.CustomersModule)
  },
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then(m => m.OrdersModule)
  }
];

// const routes: Routes = [
//   {
//     path: "customers",
//     children: customerRoutes
//   },
//   {
//     path: "orders",
//     children: orderRoutes
//   }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(lazyRoutes, {
      preloadingStrategy: NoPreloading // PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
