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
  constructor(private backendService: BackendService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(x =>
      this.backendService.
        GetAlbumsOfArtist(Number.parseInt(x.get('artistId'), 10))
        .subscribe(y => this.albums = y)
    );
  }

}
