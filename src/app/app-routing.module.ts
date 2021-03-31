import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './auth-guard.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'galary',
    component: GalaryComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
