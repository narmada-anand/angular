import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parent.login',
  templateUrl: './parent.login.component.html',
  styleUrls: ['./parent.login.component.css'],
  providers: [AppService]
})
export class ParentLoginComponent implements OnInit {

  constructor( private appService: AppService, private router: Router) { }

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
