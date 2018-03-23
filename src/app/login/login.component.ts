import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginClick(event) {
    debugger
    if(event == 1)
    this.router.navigate(['/adminLogin']);
    else if(event == 2)
    this.router.navigate(['/parentLogin']);
  }

}
