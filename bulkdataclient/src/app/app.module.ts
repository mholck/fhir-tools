import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';

import { NavigationModule } from './navigation/navigation.module';
import { SharedModule } from './shared/shared.module';
import { BulkDataMaterialModule } from '../bulkdata-material.module';
import { HomeComponent } from './home/home.component';
import { PatientsPanelComponent } from './patient-panel/patient-panel.component';
import { GroupDialogComponent } from './patient-panel/group-dialog/group-dialog.component';
import { ExtractComponent } from './extract/extract.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { PatientPanelService } from './patient-panel/patient-panel.service';
import { ExtractService } from './extract/extract.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    PatientsPanelComponent,
    ExtractComponent,
    GroupDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    HttpModule,
    HttpClientModule,
    NavigationModule,
    BulkDataMaterialModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  exports: [GroupDialogComponent],
  entryComponents: [GroupDialogComponent],
  providers: [PatientPanelService, ExtractService],
  bootstrap: [AppComponent]
})
export class AppModule {}
