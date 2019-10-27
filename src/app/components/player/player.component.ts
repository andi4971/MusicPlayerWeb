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
  }

  public OnSongEnded(): void {
    if (this.queue.length === 0) return;
    this.PlaySong(this.queue.shift());
    if (this.queue.length === 0) {
      this.nextSong = null;
    } else {
      this.nextSong = this.queue[0];
    }
  }

  private PlaySong(song: Song) {
    this.currentSong = song;
    this.audioPlayer.src = this.backendService.GetAudioStreamURL(song.songId);
    this.audioPlayer.play();
  }

  public CheckForNextSong(): boolean {
    return this.nextSong != null;
  }
}
