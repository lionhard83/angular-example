import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KarlComponent } from './components/karl/karl.component';
import { MattComponent } from './components/matt/matt.component';
import { TempComponent } from './components/temp/temp.component';
import { MorraComponent } from './components/morra/morra.component';
import { TrisComponent } from './components/tris/tris.component';

@NgModule({
  declarations: [
    AppComponent,
    KarlComponent,
    MattComponent,
    TempComponent,
    MorraComponent,
    TrisComponent
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
