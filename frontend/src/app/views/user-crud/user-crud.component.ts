import { HeaderService } from "../../components/template/header/header.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-crud",
  templateUrl: "./user-crud.component.html",
  styleUrls: ["./user-crud.component.css"],
})
export class UserCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Usuarios",
      icon: "face",
      routeUrl: "/users",
    };
  }

  createCad(): void {
    this.router.navigate(["/users/create"]);
  }

  ngOnInit(): void {}
}
