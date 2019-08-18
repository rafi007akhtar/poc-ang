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

  submits() {
    let details = [this.name, this.empid, this.mob];
    console.log(details);
  }

  ngOnInit() {

  }
}
