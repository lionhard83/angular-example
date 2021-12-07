import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Breed, Response } from '../models/cat-fact';
const {endpoint} = environment;

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  endPointServer = 'https://catfact.ninja';
  constructor(private httpClient: HttpClient) { }

  getBreed() {
    return this.httpClient.get(`${endpoint}/breeds`).toPromise() as  Promise<Response<Breed>>;
  }
}
