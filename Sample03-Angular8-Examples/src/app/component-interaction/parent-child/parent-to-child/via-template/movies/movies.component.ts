import { Component, OnInit } from '@angular/core';
import {Movie} from '../../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  constructor() { }

  ngOnInit() {
    this.movies = [];
    let movie = new Movie(101, 'Don', 'TKS', 'AP', 'SN', false);
    this.movies.push(movie);
    movie = new Movie(102, 'PK', 'SN', 'TKS', 'AP', false);
    this.movies.push(movie);
    movie = new Movie(103, 'Krish', 'SN', 'AP', 'TKS', false);
    this.movies.push(movie);
  }
// http://kfarst.github.io/angular/2017/03/29/component-interaction-in-angular/
// ng g component component-interaction/parent-child/parent-to-child/via-viewchild/movies-via-view-child
// --skipTests=true --module=component-interaction.module --inlineStyle=true --dry-run
}
