import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';

const routes: Routes = [
  { path: 'Artists', component: ArtistsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
