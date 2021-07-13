import { UserService } from "../user.service";
import { User } from "../user-create/user-models";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";

@Component({
  selector: "app-user-read",
  templateUrl: "./user-read.component.html",
  styleUrls: ["./user-read.component.css"],
})
export class UserReadComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;

  users: User[];

  displayedColumns: string[] = [
    "id",
    "name",
    "date",
    "cpf",
    "mail",
    "phone",
    "dataCadastro",
    "action",
  ];

  ngOnInit(): void {
    this.userService.read().subscribe((users) => {
      // this.sortedData = this.users.slice();
      this.users = users;

      const sortState: Sort = { active: "dataCadastro", direction: "desc" };
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);

      console.log(users);
    });
  }
  constructor(private userService: UserService) {}

  //
  //TENTATIVA DE REALIZAR o SORT
  //
  // sortedData: User[];

  // sortData(sort: Sort) {
  //   const data = this.users.slice();
  //   if (!sort.active || sort.direction === "") {
  //     this.sortedData = data;
  //     return;
  //   }
  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === "asc";
  //     switch (sort.active) {
  //       case "name":
  //         return compare(a.name, b.name, isAsc);
  //       case "dataCadastro":
  //         return compare(a.dataCadastro, b.dataCadastro, isAsc);
  //       default:
  //         return 0;
  //     }
  //   });
  // }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
