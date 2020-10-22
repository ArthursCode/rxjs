import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SetupComponent} from './setup/setup.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/setup',
    pathMatch: 'full',
  },
  {
    path: 'setup',
    component: SetupComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
