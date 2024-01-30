import { HttpHeaders } from '@angular/common/http';
import { StorageService } from 'src/app/services/auth/storage.service';

export const httpHeadersLoggedIn = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${new StorageService().getToken()}`
  })
}

export const httpHeadersNotLoggedIn = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
}
