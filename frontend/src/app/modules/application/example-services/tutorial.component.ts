import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

import { Song } from './song/song';

import { SongService } from './song/song.service';
import {BehaviorSubject, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-example-services',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit, OnDestroy  {

  songs: Song[];
  songSelected: Song;

  yearSelected: string;
  topNumber: number; //si on décide de le faire changer et montrer le top 50 ou autre
  subcriptionSong!: Subscription;

  constructor(private songService: SongService,
    private seoService: SeoService) {

    const content = 'Example Forms content with meta';
    this.seoService.setMetaDescription(content);

    this.seoService.setMetaTitle('angular-starter Title : example-services Page');

    this.topNumber = 10;
    this.songs = [];
    this.yearSelected = '2017';
    this.songs = this.songService.getSongs(this.yearSelected);
    this.songSelected = new Song();
    this.songSelected = this.songs[0];
  }

  ngOnInit(): void {
    this.getSongs(this.yearSelected);
  }

  getSongs(year: string): void {
    // s'il y a deja eu un subscribe on evite de recevoir les ancienne données 
    if (this.subcriptionSong) {
      this.subcriptionSong.unsubscribe();
    }

    this.subcriptionSong = this.songService.getSongs$(year).subscribe(
      {
        next : (songList) => {
          this.songs = songList;
          this.updateSelectedSong(songList);
        },
        error : (error) => {
          console.error('Erreur lors de la récupération des listes de chansons : ', error);
        }
      }
    );
  }

  select(song: Song): void {
    this.songSelected = song;
  }

  // eslint-disable-next-line
  onChangeYear($event: any): void {
    this.yearSelected = $event.target.value;
    this.getSongs(this.yearSelected);
    this.songSelected = new Song();
    this.songSelected = this.songs[0];
  }

  private updateSelectedSong(songList: Song[]): void {
    const selectedSong = songList.find(song => song.title === this.songSelected.title);
    this.songSelected = selectedSong ?? songList[0];
  }

  ngOnDestroy() {
    // Désabonnement lors de la destruction du composant
    if (this.subcriptionSong) {
      this.subcriptionSong.unsubscribe();
    }
  }
}
