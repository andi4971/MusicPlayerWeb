import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Song } from '../DTOs/Song';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private playListOfSongsSubject = new Subject<Song[]>();
  private playSongSubject = new Subject<Song>();
  private addSongToQueueSubjcet = new Subject<Song>();
  constructor() { }

  public PlayListOfSongs(songs: Song[]) {
    this.playListOfSongsSubject.next(songs.slice());
  }

  public GetPlayListOfSongsObservable(): Observable<Song[]> {
    return this.playListOfSongsSubject.asObservable();
  }

  public GetPlaySongObservable(): Observable<Song> {
    return this.playSongSubject.asObservable();
  }
  public PlaySong(song: Song) {
    this.playSongSubject.next(song);
  }

  public GetAddSongToQueueObservable(): Observable<Song> {
    return this.addSongToQueueSubjcet.asObservable();
  }

  public AddSongToQueue(song: Song): void {
    this.addSongToQueueSubjcet.next(song);
  }

}
