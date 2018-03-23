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

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(event) {
    
    var that = this;
this.appService.login(event).subscribe(data => {
      debugger
      if (data["Status"] == "success") {
        sessionStorage.setItem("token",data["session"][0]['loginName']);
        this.router.navigate(['/dashboard']);
      }
      else
        alert("Login failed....");
    }); 

  }
  resetClick(data?: NgForm) {
    if (data != null)
      data.reset();
  }

}
