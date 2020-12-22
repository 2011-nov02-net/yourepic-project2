import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular'
import { AppComponent } from './app.component';
import { EpicComponent } from './components/epic/epic.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent},
  { path: 'home', component: HomeComponent, canActivate: [OktaAuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'epic', component: EpicComponent, canActivate: [OktaAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
