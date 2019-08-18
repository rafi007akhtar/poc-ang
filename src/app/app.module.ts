import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { DisplayComponent } from './display/display.component'

import { APP_ROUTES_PROVIDER } from "./app-routing.module";
import { FormComponent } from './form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
