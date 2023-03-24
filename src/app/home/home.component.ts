import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { CookieService } from 'src/app/shared/cookie.service';
import { MovieCardData } from './movie-card/model/movie-card';
import { TVCardData } from './tv-card/model/tv-card';
import { Observable, forkJoin, catchError, of } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    /** list of movie ids. */
    public movieCollection: string[];

    /** list of MovieCardData. */
    public movieData: MovieCardData[] = [];

    /** list of tv ids. */
    public tvCollection: string[];

    /** list of TVCardData. */
    public tvData: TVCardData[] = [];

    /** if movie data is loaded. */
    public isMovieReady: boolean = false;

    /** if tv data is loaded. */
    public isTVReady: boolean = false;

    constructor(private homeService: HomeService, private cookieService: CookieService) { }

    ngOnInit(): void {

        //this.cookieService.setCookie('movieCollection', ['768362', '505642', '603692', '934433', '693134', '585083', '385687','569094','603692','507086','438148','338953','447365','616037','505642','575264','677179','575265','640146','609681','877269','508947','619979','718789','634492','911916','725201','539972','962697','615469','361743','519182','539681','787699','346698','838330','756999','822119','617127','1003598','1003596','617126','986056','929170','830788','593643','762968']);
        //this.cookieService.setCookie('tvCollection', ['107113','456','97951','125282','66732','1434','128095','125949','92783','85801','122196','114469','114502','157202','157215','155427', '100088'])
        //this.cookieService.setCookie("movieCollection", ["768362", "505642", "603692", "934433", "693134"]);
        //this.cookieService.setCookie("tvCollection", ["82856", "456", "1434", "100088"]);
        // this.cookieService.setCookie('movieCollection',  []);
        // this.cookieService.setCookie('tvCollection',  []);

        this.movieCollection = this.cookieService.getCookie('movieCollection');
        this.tvCollection = this.cookieService.getCookie('tvCollection');
        console.log(this.movieCollection);
        console.log(this.tvCollection);

        const movieCalls: any[] = [];
        const tvCalls: any[] = [];
        
        if (!this.isEmpty(this.movieCollection)) {
            this.movieCollection.forEach(movie => {
                movieCalls.push(this.homeService.getMovieData(movie).pipe(catchError(() => of(null))));
            });
        }
        
        if (!this.isEmpty(this.tvCollection)) {
            this.tvCollection.forEach(tv => {
                tvCalls.push(this.homeService.getTVData(tv).pipe(catchError(() => of(null))));
            });  
        }
        
        forkJoin(movieCalls).subscribe(
            data => {
                this.movieData = data;
                this.isMovieReady = true;
            }
        );

        forkJoin(tvCalls).subscribe(
            data => {
                this.tvData = data;
                this.isTVReady = true;
            }
        );
    }

    /**
     * Checks whether a collection has no value.
     * 
     * @param name - name of the collection
     * @returns - whether or not the collection is empty
     */
     public isEmpty(collection: string[]): boolean {

        if (collection.length === 0 || collection[0] === '') {
            return true;
        }
        return false;
    }

    /**
     * Converts string id to number.
     * 
     * @param id - id of movie or tv
     * @returns - id of type number
     */
    public convertID(id: string): number {
        
        return parseInt(id, 10);
    }

    /**
     * Removes movie card.
     * 
     * @param id - id of movie card to remove
     */
    public onRemoveMovie(id: number) {

        const index = this.movieCollection.indexOf(id.toString());
        this.movieCollection.splice(index, 1);
        //!!!temporarly removed for purpose of testing
        //this.cookieService.setCookie('movieCollection', this.movieCollection);
        console.log('removed movie - ' + id);
    }

    /**
     * Removes tv series from user's collection.
     * 
     * @param id - id of tv series to remove
     */
    public onRemoveTV(id: number) {

        const index = this.tvCollection.indexOf(id.toString());
        this.tvCollection.splice(index, 1);
        //!!!temporarly removed for purpose of testing
        //this.cookieService.setCookie('tvCollection', this.tvCollection);
        console.log('removed tv - ' + id);
    }
}
