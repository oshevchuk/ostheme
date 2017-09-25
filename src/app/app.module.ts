import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HomeComponent} from "./components/Home/home.component";
import {ContactComponent} from "./components/Contact/contact.component";
import {AppRoutingModule} from "./modules/app-routing.module";

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, HomeComponent, ContactComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
