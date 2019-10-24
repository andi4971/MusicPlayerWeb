import {
  Component
} from '@angular/core';
import {
  BackendService
} from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'musicPlayerWeb';

  constructor(private backendService: BackendService) {}
  refreshDbClicked(): void {
    this.backendService.RefreshDatabase();
    }
}