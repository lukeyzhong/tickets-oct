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

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgifComponent,
    NgfortrackbyComponent,
    NgswitchComponent,
    CustomdiectiveComponent
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
