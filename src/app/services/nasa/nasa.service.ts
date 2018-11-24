import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface NasaSearchResult {
  collection: {
    items: any[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private baseUrl =  'https://images-api.nasa.gov';

  constructor(private http: HttpClient) { }

  search(q: string) {
    return this.http.get<NasaSearchResult>(`${this.baseUrl}/search`, {
      params: {
        media_type: 'image',
        q
      }
    })
  }
}
