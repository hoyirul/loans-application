import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/auth/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    public _storage: StorageService
  ) {
  }

}
