import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Artist, Song } from 'src/app/models/itunes';
import { ITunesService } from 'src/app/services/itunes.service';

@Component({
  selector: 'app-single-artist',
  templateUrl: './single-artist.component.html',
  styleUrls: ['./single-artist.component.css']
})
export class SingleArtistComponent implements OnInit {
  artist: Artist | undefined;
  songs: Song[] = [];
  maxValue: number = 0;
  currentValueMin: number = 0;
  currentValueMax: number = 0;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private itunesService: ITunesService) {
      this.router.events.subscribe((response)=>{
        if (response instanceof NavigationEnd) {
          this.songs = [];
          this.ngOnInit()
        }
      })
    }

  async ngOnInit(): Promise<void> {
    const {id} = this.activateRoute.snapshot.params as {id: string};

    const {results} = await this.itunesService.lookup(id);
    this.artist = results[0];
    this.songs = (await this.itunesService.search(this.artist.artistName)).results;
    this.maxValue = this.songs.reduce((acc, {collectionPrice}) => (acc > Number(collectionPrice) || !collectionPrice) ? acc : Number(collectionPrice), 0)
    const {maxPrice, minPrice} = this.activateRoute.snapshot.queryParams as {maxPrice: string, minPrice: string};
    this.currentValueMax = Number(maxPrice) || this.maxValue;
    this.currentValueMin = Number(minPrice) || 0;
    if (maxPrice) {
      this.songs = this.songs.filter(song => song.collectionPrice <= Number(maxPrice))
    }
    if (minPrice) {
      this.songs = this.songs.filter(song => song.collectionPrice >= Number(minPrice))
    }
  }

  debounce(func: Function, timeout = 1000){
    console.log('debounce');
    let timer: any ;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }


  update(_: unknown) {
    this.changeRoute();
  }

  changeRoute() {
    this.router.navigate(
      [],
      {
        relativeTo: this.activateRoute,
        queryParams: {maxPrice: this.currentValueMax, minPrice: this.currentValueMin},
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

}
