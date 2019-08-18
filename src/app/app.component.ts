import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poc-ang';
  name: string = "";
  empid: number;
  mob: number;
  email: string;
  address: string;

  submits() {
    let details = {
      "name": this.name, 
      "empid": this.empid, 
      "mob": this.mob, 
      "email": this.email, 
      "address": this.address
    };
    console.log(details);
  }

  ngOnInit() {

  }
}
