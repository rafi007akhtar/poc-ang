import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from "./form/form.component"
import { DisplayComponent } from './display/display.component';
import { RxformComponent } from "./rxform/rxform.component"


const routes: Routes = [
  { path: "display", component: DisplayComponent },
  { path: "form", component: FormComponent },
  { path: "reactive", component: RxformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);
