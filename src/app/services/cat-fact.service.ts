import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { CatFact, Response } from '../models/cat-fact';
import { environment } from 'src/environments/environment';
const {endpoint} = environment;

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  constructor(private httpClient: HttpClient) { }


  getRandomFact() {
    return this.httpClient.get(`${endpoint}/fact`).toPromise() as  Promise<CatFact>;
  }

  getAllFacts() {
    return this.httpClient.get(`${endpoint}/facts`).toPromise() as  Promise<Response<CatFact>>;
  }

}
