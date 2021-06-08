import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private httpClient: HttpClient) { }

  getSaluti() {

    return this.httpClient.get('http://localhost:8050/api/saluti/Matteo');
    
  }
}
