import { Component, OnInit } from "@angular/core";

console.log("customers component loaded");

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
