import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DieCastListComponent } from "./diecast-list/diecast-list.component";
import { HomeComponent } from "./home/home.component";

// TODO: Activatedroute, ParamMap for activated routes and parameters a solution?
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "diecast-list", component: DieCastListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routedComponents = [DieCastListComponent];
