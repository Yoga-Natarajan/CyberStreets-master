import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripComponent} from './trip/trip.component';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'trip', component: TripComponent },
  { path: 'app', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
