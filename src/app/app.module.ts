import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RekanDetailComponent } from './rekan-detail/rekan-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeChildComponent } from './home-child/home-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RekanDetailComponent,
    HomeChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
