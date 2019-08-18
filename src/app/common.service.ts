import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  users = [];

  displayDetails(details: any) {
    this.users.push(details);
    alert("Successfully added!");
    console.log(this.users);
  }
}
