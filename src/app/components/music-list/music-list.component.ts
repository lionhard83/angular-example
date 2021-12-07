import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/itunes';
import { ITunesService } from 'src/app/services/itunes.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent {
  songs: Song[] = [];
  currentSong: Song | undefined;
  searchTerm: string = '';
  constructor(private iTunesService: ITunesService) { }

  async search() {
    if (this.searchTerm !== '') {
      const {results} = await this.iTunesService.search(this.searchTerm);
      this.songs = results;
    }
  }

  setSong(song: Song) {
    this.currentSong = song;
  }

}
