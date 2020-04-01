import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/DTOs/Song';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  artistId: number;
  songs = new Array<Song>();
  searchValue = '';
  constructor(private backendService: BackendService, private route: ActivatedRoute, private communicationService: CommunicationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      this.artistId = Number.parseInt(x.get('artistId'), 10);
      console.log(Number.parseInt(x.get('albumId'), 10));
      this.backendService
        .GetSongsOfAlbum(
          Number.parseInt(x.get('albumId'), 10))
        .subscribe(y => this.songs = y.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }));
    });
  }
  playAlbumClicked(): void {
    this.communicationService.PlayListOfSongs(this.songs);
  }

}
