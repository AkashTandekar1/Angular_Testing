import { Component, OnInit } from '@angular/core';
import { UserslistService } from '../userslist.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';





@Component({
  selector: 'app-user-testing',
  templateUrl: './user-testing.component.html',
  styleUrls: ['./user-testing.component.css']
})
export class UserTestingComponent implements OnInit {

  text:string = "user Page"
  usersdata:any = {};


constructor(private userService:UserslistService) {
          this.usersdata = this.userService.getUsers();
}

  ngOnInit(): void {
  }

}
