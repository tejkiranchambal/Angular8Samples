import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styles: []
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie;
  starSymbol = 'star-o fa-2x';

  constructor() { }

  ngOnInit() {
  }

  toggleFavourite() {
    this.movie.favourite = !this.movie.favourite;
    this.starSymbol = this.movie.favourite ? 'star fa-2x' : 'star-o fa-2x';
  }

}
