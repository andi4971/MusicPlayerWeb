import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/DTOs/Artist';

@Component({
  selector: 'artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  @Input() artist: Artist;
  constructor() { }

  ngOnInit() {
  }

}
