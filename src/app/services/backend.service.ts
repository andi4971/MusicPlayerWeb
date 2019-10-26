import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../DTOs/Artist';
import { Observable, Subject } from 'rxjs';
import { Album } from '../DTOs/Album';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private refreshSubject = new Subject<boolean>();
  private backendUrl = 'http://localhost:5000/api/Music/';
  constructor(private http: HttpClient) { }


  public GetArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.backendUrl + 'GetArtists');
  }

  public RefreshDatabase(): void {
    this.http.get<boolean>(this.backendUrl + 'RefreshDatabase').subscribe(x => this.refreshSubject.next(x));
  }

  public GetRefreshObservable(): Observable<boolean> {
    return this.refreshSubject.asObservable();
  }

  public GetAlbumsOfArtist(artistId: number): Observable<Album[]> {
    return this.http.get<Album[]>(this.backendUrl + 'GetAlbumsOfArtist?artistId=' + artistId);
  }
}
