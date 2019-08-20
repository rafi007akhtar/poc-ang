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

  showSubmit = this.rform.valid;

  submits() {
    if (this.rform.valid)
      this.cs.displayDetails(this.rform.value);
    else {
      let invalidFields = [];
      for (let field in this.rform.controls) {
        if (this.rform.controls[field].status == "INVALID")
          invalidFields.push(field);
      }
      alert("The following fields are invalid or incomplete: \n" + invalidFields)
    }
    // console.log(this.rform.controls)
    for (let field in this.rform.controls) {
      console.log(`${field} has status ${this.rform.controls[field].status}`);
    }
  }

  ngOnInit() {
    this.ap.home = false;
  }

}
