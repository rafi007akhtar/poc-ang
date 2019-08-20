import { Component, OnInit, Inject } from '@angular/core';
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
    @Inject(CommonService) private cs: CommonService,
    @Inject(AppComponent) private ap: AppComponent
    ) 
    { }

  submits(formVals) {
    let details = {
      "name": this.name, 
      "empid": this.empid, 
      "mob": this.mob, 
      "email": this.email, 
      "address": this.address
    };
    console.log(formVals);
    this.cs.displayDetails(formVals)
  }

  ngOnInit() {
    this.ap.home = false;
  }

}
