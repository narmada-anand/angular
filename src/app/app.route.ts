import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../app/login/login.component'
import { PagenotfoundComponent } from '../app/pagenotfound/pagenotfound.component';
import { ParentLoginComponent } from '../app/parent.login/parent.login.component';

const route: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'parentLogin',
    component: ParentLoginComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

export const Approutes = RouterModule.forRoot(route);