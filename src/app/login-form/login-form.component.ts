// LOGIN DIALOG FORM

import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";

import { UserService } from "../_services/user.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "../_models/user";
import { Observable } from "rxjs";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private frmBldr: FormBuilder,
    private userService: UserService,
    // public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.loginForm = this.frmBldr.group({
      // id: this.data ? this.data.id : "",
      userName: this.data ? this.data.userName : "",
      password: this.data ? this.data.password : "",
    });
  }

  onLoginSubmit(any: any): void {
    // if (this.loginForm.valid) {
    this.userService.submitLoginInput(this.loginForm.value).subscribe(
      (data: any) => {
        // console.log(
        //   "%cLogin Data Received",
        //   "color: greenyellow; font-size: 20px",
        //   data
        // );
        if (
          data == "Invalid Password" ||
          data == "Invalid User Name, Please Register"
        ) {
          console.log(data);
          alert(data);
          this.showMenuFalse();
        } else {
          this.showMenuTrue();
          console.log(data);
          // SENDS RETURNED DATA TO returnedId VARIABLE IN USERSERVICE TO BE SHARED
          this.userService.returnedData = data;
          // alert(data);
        }
      }
      // (response) => {
      //   console.log(
      //     "%cSuccessful login",
      //     "color: green; font-size: 20px",
      //     response // return statement from successful login is null (empty string (return "";))
      //   );
      // }
      // (error: any) => {
      //   console.log(
      //     "%cERROR !! ERROR",
      //     "color: orangered; font-size: 25px",
      //     this.loginForm.value,
      //     error
      //   );
      // }
    );
    // }
  }

  showMenuTrue() {
    this.userService.seeMenu(true);
  }
  showMenuFalse() {
    this.userService.seeMenu(false);
  }

  // RESETS DIALOG FORM ON CLOSE
  onClose() {
    this.loginForm.reset();
    this.dialogRef.close();
  }
}
