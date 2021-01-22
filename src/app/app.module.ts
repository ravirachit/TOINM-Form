import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToiFormComponent } from './toi-form/toi-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DocumentexistsComponent } from './documentexists/documentexists.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LinkExpireComponent } from './link-expire/link-expire.component';
import { FbLikeComponent } from './facebook';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Toiform1Component } from './number-magic/toiform1.component';
@NgModule({
  declarations: [
    AppComponent,
    ToiFormComponent,
    Toiform1Component,
    ThankYouComponent,
    DocumentexistsComponent,
    ErrorpageComponent,
    LinkExpireComponent,
    FbLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
