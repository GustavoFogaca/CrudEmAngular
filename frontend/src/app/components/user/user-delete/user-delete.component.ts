import { User } from "../user-create/user-models";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-delete",
  templateUrl: "./user-delete.component.html",
  styleUrls: ["./user-delete.component.css"],
})
export class UserDeleteComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  user: User;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.userService.readById(id).subscribe((user) => {
      this.user = user;
    });
  }

  deleteUser(): void {
    this.userService.delete(this.user.id).subscribe(() => {
      this.userService.showMessage("Cadastro excluido ");
      this.router.navigate(["/users"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/users"]);
  }
}
