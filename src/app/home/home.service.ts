import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class HomeService {

    /** url and apiKey. */
    private url = environment.tmdb.url;
    private apiKey = environment.tmdb.apiKey;

    constructor(private http: HttpClient) { }

    /**
     * Mock function to retrieve data for "Werewold by Night".
     * 
     * @returns - Observable containing data for "Werewolf by Night"
     */
    getMovieData(): Observable<any> {
        return this.http.get<any>(this.url+'/movie/'+894205+'?api_key='+this.apiKey);
    }
}
