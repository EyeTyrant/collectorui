import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule,
  MatIconModule,
  MatDialogModule,
  MatGridListModule,
  MatToolbarModule,
  MatTabsModule,
} from "@angular/material";

const material = [
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule,
  MatIconModule,
  MatDialogModule,
  MatGridListModule,
  MatToolbarModule,
  MatTabsModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
