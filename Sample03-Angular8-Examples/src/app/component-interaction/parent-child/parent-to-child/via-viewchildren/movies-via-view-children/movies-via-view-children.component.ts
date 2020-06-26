import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Movie} from '../../movie';
import {MovieDetailsViaViewChildrenComponent} from '../movie-details-via-view-children/movie-details-via-view-children.component';

@Component({
  selector: 'app-movies-via-view-children',
  templateUrl: './movies-via-view-children.component.html',
  styles: []
})
export class MoviesViaViewChildrenComponent implements OnInit, AfterViewInit {
// https://stackblitz.com/edit/angular-8-viewchild-example
// https://stackoverflow.com/questions/40165294/access-multiple-viewchildren-using-viewchild
// https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e
// https://medium.com/@joshblf/wtf-is-ng-content-8382b2a664e1

  /*  @ViewChild(MovieDetailsViaViewChildrenComponent, {static: false})
  movieComponent: MovieDetailsViaViewChildrenComponent;*/
  movies: Movie[];

  @ViewChildren('movieDetailComponents') movieDetailComponents: QueryList<MovieDetailsViaViewChildrenComponent>;

  constructor() { }

  ngOnInit(): void {
    this.movies = [
      new Movie(101, 'Don', 'TKS', 'AP', 'SN', false),
      new Movie(102, 'PK', 'SN', 'TKS', 'AP', false),
      new Movie(103, 'Krish', 'SN', 'AP', 'TKS', false)
    ];
  }

  ngAfterViewInit(): void {
    // console.log(`ngAfterViewInit - movieComponent is ${this.movieComponent}`);
    console.log(`ngAfterViewInit - favMovies is ${this.movieDetailComponents}`);
  }

  doFavourite(movieID: number): void {
    const movieCompInstance = this.movieDetailComponents.find(movComp => movComp.movie.id === movieID);
    movieCompInstance.toggleFavourite();
  }

/*  doFavourite2(): void {
    this.movieComponent.toggleFavourite();
  }*/

}
