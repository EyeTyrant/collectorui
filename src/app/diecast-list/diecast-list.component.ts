import { Component, OnInit, ViewChild } from "@angular/core";
import { CollectorService } from "../_services/collector.service";
import { DieCast } from "../_models/collection";
import { User } from "../_models/user";
import {
  MatTableDataSource,
  MatSort,
  MatDialog,
  MatDialogConfig,
} from "@angular/material";
import { DieCastInputFormComponent } from "../diecast-input-form/diecast-input-form.component";
import { UserService } from "../_services/user.service";

@Component({
  selector: "app-diecast-list",
  templateUrl: "./diecast-list.component.html",
  styleUrls: ["./diecast-list.component.css"],
})
export class DieCastListComponent implements OnInit {
  dataSource: MatTableDataSource<DieCast> = new MatTableDataSource<DieCast>();
  displayedColumns: string[] = [];
  // userService: any;
  user_id = this.userService.returnedData;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private collectorService: CollectorService,
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.displayedColumns = [
      "id",
      "year",
      "name",
      "brand",
      "mfr",
      "edit",
      // "delete", // UNCOMMENT THIS TO ADD SEPARATE DELETE COLUMN
      // "test", // UNCOMMENT THIS TO ADD TEST BUTTON COLUMN
    ];
  }

  ngOnInit() {
    this.collectorService.refrestOnSubmit.subscribe(() => {
      this.getCollection();
    });
    this.getCollection();
  }

  // TODO: change this to use getAllByUserFromServer() instead of getAllFromServer() (by passing in userId or userName?)
  private getCollection() {
    console.log(this.user_id);
    this.collectorService
      // .getAllFromServer()
      .getAllByUserFromServer(Number(this.user_id))
      .subscribe((dieCast: DieCast[]) => (this.dataSource.data = dieCast));
    this.dataSource.sort = this.sort;
  }

  public filter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  // CLICK ON ADD NEW BUTTON TO OPEN BLANK DIALOG FORM FOR INPUT
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "500px";
    dialogConfig.minHeight = "auto";
    // dialogConfig.panelClass = "add-dialog";
    this.dialog.open(DieCastInputFormComponent, dialogConfig);
  }

  // CLICK ON EDIT ICON TO OPEN DIALOG POPULATED WITH ROW DATA TO EDIT
  onEdit(item: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = item;
    this.dialog.open(DieCastInputFormComponent, dialogConfig);
  }

  // CLICK ON DELETE ICON TO DELETE ROW FROM DATABASE
  onDelete(item: string): void {
    this.collectorService
      .deleteItem(item["id"])
      .subscribe((_response) => this.ngOnInit()); //ngOnInit() reloads display component on delete in stead of entire page as with location.reload();.
  }

  // DEV.. CONSOLE LOG ROW DATA
  // logData(row: any) {
  //   console.log(`logData() from any click on a row = ${row.id}`);
  //   return row;
  // }

  // DEV.. CLICK ON TEST ICON TO CONSOLE LOG DATA
  // test(item: { id: number }) {
  //   let car = this.collectorService.getItem(item.id);
  //   car.subscribe((response) => {
  //     console.log("test() returns getItem(item.id) =", response);
  //     return response; // use response.id to return just the id
  //   });
  // }
}
