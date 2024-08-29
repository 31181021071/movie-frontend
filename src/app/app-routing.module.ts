import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { ProfileAdminComponent } from './components/admin-page/profile-admin/profile-admin.component';
import { LoansComponent } from './components/loans/loans.component';
import { AdminPageComponent } from './components/admin-page/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthActivateRouteGuard]},
  { path: 'logout', component: LogoutComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'profile-user', component: ProfileUserComponent, canActivate: [AuthActivateRouteGuard]},
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthActivateRouteGuard]},
  // { path: 'admin-page', component: AdminPageComponent},
  { path: 'myLoans', component: LoansComponent, canActivate: [AuthActivateRouteGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
