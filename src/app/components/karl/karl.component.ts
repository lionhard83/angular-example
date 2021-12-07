import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatFact } from 'src/app/models/cat-fact';
import { BreedService } from 'src/app/services/breed.service';
import { CatFactService } from 'src/app/services/cat-fact.service';

@Component({
  selector: 'app-karl',
  templateUrl: './karl.component.html',
  styleUrls: ['./karl.component.css']
})
export class KarlComponent implements OnInit, OnDestroy {

  facts: CatFact[] = [];
  constructor(private catFactService: CatFactService, private breedService: BreedService) { }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  async ngOnInit() {
    console.log('ho inzializzato il componente');
    const {data} = await this.catFactService.getAllFacts();
    this.facts = data;

    console.log('random', await this.catFactService.getRandomFact());

    console.log('breed:', await this.breedService.getBreed())

  }

}
