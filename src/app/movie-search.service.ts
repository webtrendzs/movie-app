import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { MovieResourceService } from './omdb-api/movie-resource.service';
import { Movie } from './movie';
import { flatMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  public movie: Subject<Movie> = new Subject();

  constructor(protected movieResource: MovieResourceService) {
  }

  public searchMovie(term: string, plot?): Observable<Movie> {
    return this.movieResource.getMovie(term, plot).pipe(flatMap((row) => {
      return of(new Movie(row));
    }), take(1));
  }
}
