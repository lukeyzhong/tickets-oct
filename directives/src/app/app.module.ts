import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgfortrackbyComponent } from './ngfortrackby/ngfortrackby.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CustomdiectiveComponent } from './customdiective/customdiective.component';
import { ColordirDirective } from './customdiective/colordir.directive';


@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgifComponent,
    NgfortrackbyComponent,
    NgswitchComponent,
    CustomdiectiveComponent,
    ColordirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
