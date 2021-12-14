import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentWithParamsComponent } from './components/component-with-params/component-with-params.component';
import { KarlComponent } from './components/karl/karl.component';
import { MattComponent } from './components/matt/matt.component';
import { MorraComponent } from './components/morra/morra.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { TempComponent } from './components/temp/temp.component';
import { TrisComponent } from './components/tris/tris.component';

const routes: Routes = [
  {
    path: 'karl', component: KarlComponent,
  }, {
    path: 'matt', component: MattComponent
  },
  {
    path: 'temp', component: TempComponent
  },
  {
    path: 'morra', component: MorraComponent
  },
  {
    path: 'tris', component: TrisComponent
  },
  {
    path: 'songs', component: MusicListComponent
  },
  {
    path: 'artists/:id', component: SingleArtistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
