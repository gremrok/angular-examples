import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { JumbotronComponent }  from './components/jumbotron/jumbotron.component';
import { HomeComponent }  from './components/pages/home.component';
import { AboutComponent }  from './components/pages/about.component';
import { ProfileComponent }  from './components/profile/profile.component';
import { routing } from './app.routing';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    NavbarComponent, 
    JumbotronComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
