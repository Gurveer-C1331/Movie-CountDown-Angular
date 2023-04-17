import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { SearchResults } from './model/search-results';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  /** url and apiKey. */
  private url = environment.tmdb.url;
  private apiKey = environment.tmdb.apiKey;

  constructor(private http: HttpClient) { }

  /**
   * Retrieve list of upcoming movies.
   *
   * @param page -
   * @returns - Observable containing list of movie data for upcoming movies
   */
    public getUpcomingMovies(page: number): Observable<SearchResults> {
        const today = new Date();
        return this.http.get<SearchResults>(this.url + '/discover/movie?api_key=' + this.apiKey +
            '&region=US&sort_by=popularity.desc&release_date.gte=' + today.toJSON().substr(0,10) + '&with_release_type=3|2' +
            '&page=' + page);
    }

    /**
     * Retrieve list of upcoming tv series.
     *
     * @param page -
     * @returns - Observable containing list of tv data for upcoming series
     */
    public getUpcomingTVSeries(page: number): Observable<SearchResults> {
        const today = new Date();
        return this.http.get<SearchResults>(this.url + '/discover/tv?api_key=' + this.apiKey +
            '&with_original_language=en&sort_by=popularity.desc&air_date.gte=' + today.toJSON().substr(0,10) + '&with_type=0|2|3|4|5|6' +
            '&page=' + page);
    }
}

