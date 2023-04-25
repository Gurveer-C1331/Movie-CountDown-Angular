import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { DiscoverCardData, SearchResults } from '../discover/model/search-results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /** url and apiKey. */
  private url = environment.tmdb.url;
  private apiKey = environment.tmdb.apiKey;

  constructor(private http: HttpClient) { }

  /**
   * Retrieve list of movies and tv shows based on user's search string.
   *
   * @param searchString - search string provided by the user
   * @param page -
   * @returns - Observable containing list of movies and tv data based on user's search string
   */
  public getSearchResults(searchString: string, page: number): Observable<SearchResults> {
    return this.http.get<SearchResults>(this.url + '/search/multi?api_key=' + this.apiKey +
        '&query=' + searchString + '&region=US&include_adult=false&page=' + page);
  }

  /**
   * Retrieve movie data based on id provided.
   *
   * @param id -
   * @returns - Observable containing movie data
   */
  public getMovieById(id: string): Observable<DiscoverCardData> {
    return this.http.get<DiscoverCardData>(this.url + '/movie/' + id + '?api_key=' + this.apiKey);
  }

  /**
   * Retrieve tv data based on id provided.
   *
   * @param id -
   * @returns - Observable containing tv data
   */
  public getTVById(id: string): Observable<DiscoverCardData> {
    return this.http.get<DiscoverCardData>(this.url + '/tv/' + id + '?api_key=' + this.apiKey);
  }
}
