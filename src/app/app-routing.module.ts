import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  { path: 'Artists', component: ArtistsComponent },
  {path: 'Albums/:artistId', component: AlbumsComponent},
  {path: '', redirectTo: 'Artists', pathMatch: 'full'},
  {path: '**', component: ArtistsComponent},
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
