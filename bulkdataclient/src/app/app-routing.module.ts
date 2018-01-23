/**
 * Copyright 2018, Xyram Software Solutions. All rights reserved.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PatientsPanelComponent } from './patient-panel/patient-panel.component';
import { ExtractComponent } from './extract/extract.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'patient-panel', component: PatientsPanelComponent },
  { path: 'extract', component: ExtractComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
