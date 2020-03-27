import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { Song } from 'src/app/DTOs/Song';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private audioPlayer: HTMLAudioElement;
  constructor(private backendService: BackendService, private communicationService: CommunicationService) { }
  currentSong = new Song();
  nextSong = null;
  queue = new Array<Song>();
  loop = false;
  random = false;
  ngOnInit() {
    this.audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    this.audioPlayer.volume = 0.3;

    this.communicationService.GetPlaySongObservable().subscribe(x => {
      this.PlaySong(x);
    });

    this.communicationService.GetAddSongToQueueObservable().subscribe(x => {
      this.queue.push(x);
      if (this.queue.length === 1) this.nextSong = x;
    });

    this.communicationService.GetPlayListOfSongsObservable().subscribe(x => {
      this.queue = x;
      this.OnSongEnded();
    });
  }

  public OnSongEnded(): void {
    if (this.queue.length === 0) return;
    if (this.loop) {
      let nextSong;
      if (this.random) {
        nextSong = this.queue[Math.floor(Math.random() * (this.queue.length - 1))];
      } else {
        nextSong = this.queue.shift();
      }
      this.PlaySong(nextSong);
      this.queue.push(nextSong);
    } else
      if (this.random) {
        this.PlaySong(this.queue.splice(Math.floor(Math.random() * (this.queue.length - 1)), 1)[0])
      } else {
        this.PlaySong(this.queue.shift());
      }
    if (this.queue.length === 0) {
      this.nextSong = null;
    } else {
      this.nextSong = this.queue[0];
    }
  }

  private PlaySong(song: Song) {

    this.backendService.GetBlobData(song.songId).subscribe(x => {
      let binary = this.convertDataURIToBinary('data:audio/flac;base64,'+x);
      let blob = new Blob([binary], { type: 'audio/flac' });
      let blobUrl = URL.createObjectURL(blob);
      this.audioPlayer.src = blobUrl;
      this.currentSong = song;
      this.audioPlayer.play();
    });
  }

  public CheckForNextSong(): boolean {
    return this.nextSong != null;
  }
  private convertDataURIToBinary(dataURI): Uint8Array {
    var BASE64_MARKER = ';base64,';
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
}
