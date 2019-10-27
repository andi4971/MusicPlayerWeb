import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/DTOs/Album';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums = new Array<Album>();
  searchValue = '';
  artistId: number;
  constructor(private backendService: BackendService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      this.artistId = Number.parseInt(x.get('artistId'), 10);
      this.backendService.
        GetAlbumsOfArtist(this.artistId)
        .subscribe(y => this.albums = y);
    }
    );
  }

}
