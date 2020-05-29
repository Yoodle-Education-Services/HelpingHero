import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteerComponent } from '../volunteer/volunteer.component'
import { RequestComponent } from '../request/request.component'
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AdminComponent } from '../admin/admin.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'request', component: RequestComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'volunteer', component: VolunteerComponent },
  
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
