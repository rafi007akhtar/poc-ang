import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service"

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [CommonService]
})
export class DisplayComponent implements OnInit {

  constructor(private cs: CommonService) { }

  ngOnInit() {
  }

}
