import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Song } from '../DTOs/Song';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private playSongSubject = new Subject<Song>();

  constructor() { }

  public GetPlaySongObservable(): Observable<Song> {
    return this.playSongSubject.asObservable();
  }
  public PlaySong(song: Song) {
    this.playSongSubject.next(song);
  }

}
