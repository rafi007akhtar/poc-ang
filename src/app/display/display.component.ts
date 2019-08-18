import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from "../common.service"

import { AppComponent } from "../app.component"

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [CommonService]
})
export class DisplayComponent implements OnInit {

  users: any;
  keys: any;

  constructor(@Inject(AppComponent) private ap: AppComponent) {
    ap.home = false;
  }

  ngOnInit() {
    this.ap.home = false;

    this.users = CommonService.users;
    this.keys = Object.keys(this.users[0]);
    console.log(this.keys);
  }

}
