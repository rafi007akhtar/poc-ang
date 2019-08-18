import { Component, OnInit } from '@angular/core';
import { CommonService } from "./common.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonService]
})
export class AppComponent implements OnInit {
  title = 'poc-ang';
  name: string = "";
  empid: number;
  mob: number;
  email: string;
  address: string;

  constructor(private cs: CommonService) {}

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

  }
}
