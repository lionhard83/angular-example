import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KarlComponent } from './components/karl/karl.component';
import { MattComponent } from './components/matt/matt.component';
import { TempComponent } from './components/temp/temp.component';
import { MorraComponent } from './components/morra/morra.component';
import { TrisComponent } from './components/tris/tris.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { SongComponent } from './components/song/song.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentWithParamsComponent } from './components/component-with-params/component-with-params.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ExplicitPipe } from './pipes/explicit.pipe';
import { ReleaseDatePipe } from './pipes/release-date.pipe';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    KarlComponent,
    MattComponent,
    TempComponent,
    MorraComponent,
    TrisComponent,
    MusicListComponent,
    SongComponent,
    NavbarComponent,
    ComponentWithParamsComponent,
    SingleArtistComponent,
    CurrencyPipe,
    ExplicitPipe,
    ReleaseDatePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'app-root'}),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:
        {
          provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
