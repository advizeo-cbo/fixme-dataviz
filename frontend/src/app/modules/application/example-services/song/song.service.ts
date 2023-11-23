import { Injectable } from '@angular/core';

import { Song } from './song';
import { SONGS } from './mock-songs';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  currentYearSongs$ = new BehaviorSubject<Song[]>([]);
  constructor() {
    setInterval(this.updateCurrentYearSongs.bind(this), 5000);
  }

  getSongs(year: string): Song[] {
    if (year === '2023') {
      this.updateCurrentYearSongs();
      return this.currentYearSongs$.value ;
    }
    else {
      return SONGS.find(e => e.year === year).items;
    }
  }

  getSongs$(year: string): Observable<Song[]> {
    if (year === '2023') {
      return this.currentYearSongs$;
    }
    else {
      const yearSongs =  SONGS.find(e => e.year === year).items || [];
      return new BehaviorSubject(yearSongs);
    }
  }

  private updateCurrentYearSongs() {
    const allSongs : Song[] = SONGS.reduce((p, yearSongs)=> p.concat(yearSongs.items), [] as Song[]);
    allSongs.sort((a, b) => Math.random() * 2.0 - 1.0);
    const currentYearSong : Song[] = allSongs
      .map((song, index) => { return {...song, top: ""+(index+1) } as Song; });
    this.currentYearSongs$.next(currentYearSong);
  }
}
