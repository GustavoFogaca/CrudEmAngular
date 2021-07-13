import { User } from "./user-models";
import { UserService } from "../user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  user: User = {
    name: "",
    date: "",
    cpf: "",
    mail: "",
    phone: "",
    dataCadastro: "",
  };

  constructor(private userService: UserService, private router: Router) {}

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage("Operacao executada ok!! ");
      this.router.navigate(["/users"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/users"]);
  }
  ngOnInit(): void {}
}
