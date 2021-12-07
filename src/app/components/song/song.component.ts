import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/models/itunes';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() song: Song | undefined;
  @Output() emitter: EventEmitter<Song> = new EventEmitter();

  constructor() { }

  onClickImage() {
    this.emitter.emit(this.song);
  }

}
