import { development, production, testing } from 'src/environments/environment';

export class baseUrl {
  _apiUrl() {
    return development.apiURL;
  }
}
