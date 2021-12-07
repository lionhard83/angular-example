import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITunesResponse } from '../models/itunes';
const {iTunesEndpoint} = environment;

@Injectable({
  providedIn: 'root'
})
export class ITunesService {

  constructor(private httpClient: HttpClient) { }

  search(term: string) {
    return this.httpClient.get(`${iTunesEndpoint}/search?term=${term}`).toPromise() as Promise<ITunesResponse>;
  }
}
