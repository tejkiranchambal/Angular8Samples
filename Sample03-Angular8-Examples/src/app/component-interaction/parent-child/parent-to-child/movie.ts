export class Movie {
  id: number;
  movieName: string;
  director: string;
  producer: string;
  writer: string;
  favourite: boolean;

  constructor(id: number, movName: string, dirName: string, prodName: string, writerName: string, isFavourite: boolean) {
    this.id = id;
    this.movieName = movName;
    this.director = dirName;
    this.producer = prodName;
    this.writer = writerName;
    this.favourite = isFavourite;
  }
}
