import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { SongsComponent } from './components/songs/songs.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    SongsComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    ScrollingModule,
    NgScrollbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
