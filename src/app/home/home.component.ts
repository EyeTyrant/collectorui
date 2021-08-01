import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { UserService } from "../_services/user.service";
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { LoginFormComponent } from "../login-form/login-form.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  menuVisible: boolean;

  constructor(private userService: UserService, public dialog: MatDialog) {}
  // TODO: SHOW MENU LINK ON HOMEPAGE ONLY IF USER IS LOGGED IN

  ngOnInit() {
    this.userService.currentMenuState.subscribe(
      (menuVisible) => (this.menuVisible = menuVisible)
    );
  }
  // OPENS REGISTRATION DIALOG FORM
  openReg() {
    // dialogConfig.disableClose = false;
    // dialogConfig.autoFocus = true;
    this.dialog.open(RegistrationFormComponent, {
      minWidth: "500px",
      minHeight: "475px",
      panelClass: "reg-dialog",
      backdropClass: "reg-dialog-backdrop",
    });
  }
  // OPENS LOGIN DIALOG FORM
  openLogin() {
    // dialogConfig.disableClose = false;
    // dialogConfig.autoFocus = true;
    this.dialog.open(LoginFormComponent, {
      minWidth: "500px",
      minHeight: "300px",
      panelClass: "login-dialog",
      backdropClass: "login-dialog-backdrop",
    });
  }

  // logout() {
  //   this.userService.logoutUser();
  // }
}
