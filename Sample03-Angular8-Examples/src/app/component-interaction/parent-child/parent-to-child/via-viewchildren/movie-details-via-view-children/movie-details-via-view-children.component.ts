import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../movie';

@Component({
  selector: 'app-movie-details-via-view-children',
  templateUrl: './movie-details-via-view-children.component.html',
  styles: []
})
export class MovieDetailsViaViewChildrenComponent {

  @Input() movie: Movie;
  starSymbol = 'star-o fa-2x';

  constructor() { }

  toggleFavourite() {
    this.movie.favourite = !this.movie.favourite;
    this.starSymbol = this.movie.favourite ? 'star fa-2x' : 'star-o fa-2x';
  }

}
