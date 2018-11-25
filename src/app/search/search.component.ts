import { Component, OnInit } from '@angular/core';

import { MovieSearchService } from '../movie-search.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public movie: Movie;
  public searchText = '';
  public error = '';
  public searching = false;

  constructor(private movieSearchService: MovieSearchService) {
  }

  ngOnInit() {
  }

  public search() {
    this.searching = true;
    this.movieSearchService.searchMovie(this.searchText).subscribe((movie) => {
      if (movie) {
        this.movie = movie;
      }
      this.searching = false;
    }, (error) => {
      this.searching = false;
      this.error = error;
    });
  }

}
