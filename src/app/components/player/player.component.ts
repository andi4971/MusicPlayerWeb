import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private audioPlayer: HTMLAudioElement;
  constructor(private backendService: BackendService) { }
  songName: string;
  ngOnInit() {
    this.audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    this.audioPlayer.volume = 0.3;
    this.backendService.GetPlaySongObservable().subscribe(x => {
      this.songName = x.name;
      this.audioPlayer.src = this.backendService.GetAudioStreamURL(x.songId);
      this.audioPlayer.play();
    });
  }

}
