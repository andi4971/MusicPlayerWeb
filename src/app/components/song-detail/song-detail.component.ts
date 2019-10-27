import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/DTOs/Song';
import { BackendService } from 'src/app/services/backend.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {

  @Input() song: Song;
  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }
  public playSong(): void {
    this.communicationService.PlaySong(this.song);
  }
}
