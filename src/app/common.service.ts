import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  static users = [
    {
      "name": "Md Rafi Akhtar",
      "empid": 1699584,
      "mob": 9674639341,
      "email": "alimdrafi@gmail.com",
      "address": "185/1, Park Street, Kolkata 17"
    }
  ];
  
  displayDetails(details: any) {
    CommonService.users.push(details);
    alert("Successfully added!");
    console.log(CommonService.users);
  }
}
