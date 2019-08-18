import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service"
import { AppComponent } from "../app.component"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ CommonService ]
})
export class FormComponent implements OnInit {
  title = 'poc-ang';
  name: string = "";
  empid: number;
  mob: number;
  email: string;
  address: string;

  constructor(
    private cs: CommonService,
    private ap: AppComponent
    ) 
    { }

  submits() {
    let details = {
      "name": this.name, 
      "empid": this.empid, 
      "mob": this.mob, 
      "email": this.email, 
      "address": this.address
    };
    console.log(details);
    this.cs.displayDetails(details)
  }

  ngOnInit() {
    this.ap.home = false;
  }

}
