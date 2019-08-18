import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service"

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [CommonService]
})
export class DisplayComponent implements OnInit {

  users: any;
  keys: any;
  constructor() { }

  ngOnInit() {
    this.users = CommonService.users;
    this.keys = Object.keys(this.users[0]);
    console.log(this.keys);
  }

}
