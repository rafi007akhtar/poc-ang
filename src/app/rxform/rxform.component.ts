import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from "../app.component"
import { FormControl, FormGroup } from "@angular/forms"
import { from } from 'rxjs';
import { CommonService } from "../common.service"

@Component({
  selector: 'app-rxform',
  templateUrl: './rxform.component.html',
  styleUrls: ['./rxform.component.css'],
  providers: [ CommonService ]
})
export class RxformComponent implements OnInit {

  constructor(
    @Inject (AppComponent) private ap: AppComponent,
    @Inject (CommonService) private cs: CommonService
  ) { }

  rform = new FormGroup({
    name: new FormControl(),
    empid: new FormControl(),
    mob: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
  });

  submits() {
    console.log(this.rform.valid);
    this.cs.displayDetails(this.rform.value)
  }

  ngOnInit() {
    this.ap.home = false;
  }

}
