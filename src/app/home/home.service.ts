import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { MovieCardData } from './movie-card/model/movie-card';
import { TVCardData } from './tv-card/model/tv-card';

@Injectable()
export class HomeService {

    /** url and apiKey. */
    private url = environment.tmdb.url;
    private apiKey = environment.tmdb.apiKey;

    constructor(private http: HttpClient) { }

    /**
     * Retrieve movie data for moveId provided.
     *
     * @param movieId - id for a movie
     * @returns - Observable containing movie data for movieId
     */
    public getMovieData(movieId: number | string): Observable<MovieCardData> {
        return this.http.get<any>(this.url + '/movie/' + movieId + '?api_key=' + this.apiKey);
    }

    /**
     * Retrieve tv series data for tvId provided.
     *
     * @param tvId - id for a tv series
     * @returns - Observable containing tv series data for tvId
     */
    public getTVData(tvId: number | string): Observable<TVCardData> {
        return this.http.get<any>(this.url + '/tv/' + tvId + '?api_key=' + this.apiKey);
    }
}
