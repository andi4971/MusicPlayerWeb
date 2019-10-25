import {
  Component,
  OnInit
} from '@angular/core';
import {
  Artist
} from 'src/app/DTOs/Artist';
import {
  BackendService
} from 'src/app/services/backend.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists = new Array<Artist>();
  searchValue = '';
  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.ReloadArtists();
    this.backendService.GetRefreshObservable().subscribe(x => this.ReloadArtists());
  }
  private ReloadArtists(): void {
    this.backendService.GetArtists().subscribe(x => {
      this.artists = x.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    });
  }

}