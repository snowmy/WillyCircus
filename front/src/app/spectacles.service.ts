import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpectaclesService {

  constructor(public httpClient: HttpClient) { }

  programme(): Observable<any> {
    return this.httpClient.get('http://localhost:3010/spectacles');
  }

  artists(): Observable<any> {
    return this.httpClient.get('http://localhost:3010/artistes');
  }

  ajoutSpectacles(data): Observable<any> {
    return this.httpClient.post('http://localhost:3010/spectacles', data);
  }

}
