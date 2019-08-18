import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  static users = [];

  displayDetails(details: any) {
    CommonService.users.push(details);
    alert("Successfully added!");
    console.log(CommonService.users);
  }
}
