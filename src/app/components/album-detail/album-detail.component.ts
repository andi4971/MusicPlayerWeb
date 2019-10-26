import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/DTOs/Album';

@Component({
  selector: 'album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  @Input() album: Album;
  constructor() { }

  ngOnInit() {
  }

}
