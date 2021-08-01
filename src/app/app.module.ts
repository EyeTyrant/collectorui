import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
// import { InputComponent } from "./input/input.component";
// import { DisplayComponent } from "./display/display.component";
import { CollectorService } from "./_services/collector.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { DieCastListComponent } from "./diecast-list/diecast-list.component";
import { DieCastInputFormComponent } from "./diecast-input-form/diecast-input-form.component";
import { MatGridListModule } from "@angular/material";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule, routedComponents } from "./app-routing.module";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SessionIdInterceptor } from "./_helpers/session-id-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    HeaderComponent,
    // InputComponent,
    // DisplayComponent,
    // DieCastListComponent,
    DieCastInputFormComponent,
    HomeComponent,
    RegistrationFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    // MatGridListModule,
    AppRoutingModule,
  ],
  providers: [
    CollectorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionIdInterceptor,
      multi: true,
    },
  ],
  entryComponents: [
    DieCastInputFormComponent,
    RegistrationFormComponent,
    LoginFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
