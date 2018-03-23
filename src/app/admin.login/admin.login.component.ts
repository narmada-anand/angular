import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin.login',
  templateUrl: './admin.login.component.html',
  styleUrls: ['./admin.login.component.css'],
  providers: [AppService]
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onLogin(event) {
    
    var that = this;


  }
  resetClick(data?: NgForm) {
    if (data != null)
      data.reset();
  }

}
