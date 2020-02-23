import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../DTOs/Artist';
import { Observable, Subject } from 'rxjs';
import { Album } from '../DTOs/Album';
import { Song } from '../DTOs/Song';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private refreshDbSubject = new Subject<boolean>();
  private backendUrl = 'https://10.0.0.58:5000/api/Music/';
  constructor(private http: HttpClient) { }


  public GetArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.backendUrl + 'GetArtists');
  }

  public RefreshDatabase(): void {
    this.http.get<boolean>(this.backendUrl + 'RefreshDatabase').subscribe(x => this.refreshDbSubject.next(x));
  }

  public GetRefreshDbObservable(): Observable<boolean> {
    return this.refreshDbSubject.asObservable();
  }

  public GetAlbumsOfArtist(artistId: number): Observable<Album[]> {
    return this.http.get<Album[]>(this.backendUrl + 'GetAlbumsOfArtist?artistId=' + artistId);
  }

  public GetSongsOfAlbum(albumId: number): Observable<Song[]> {
    return this.http.get<Song[]>(this.backendUrl + 'GetSongsOfAlbum?albumId=' + albumId);
  }
  public GetAudioStreamURL(songId: number): string {
    return this.backendUrl + 'GetAudioStream?songId=' + songId;
  }
}
