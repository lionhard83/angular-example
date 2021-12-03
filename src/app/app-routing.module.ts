import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KarlComponent } from './components/karl/karl.component';
import { MattComponent } from './components/matt/matt.component';
import { MorraComponent } from './components/morra/morra.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
