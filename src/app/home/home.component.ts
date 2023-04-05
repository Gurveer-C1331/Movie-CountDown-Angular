import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { CookieService } from 'src/app/shared/cookie.service';
import { MovieCardData } from './movie-card/model/movie-card';
import { TVCardData } from './tv-card/model/tv-card';
import { forkJoin, catchError, of } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    /** list of movie ids. */
    public movieCollection: string[];

    /** list of tv ids. */
    public tvCollection: string[];

    /** combined list of Movie and TV card data. */
    public cardData: { type: string; releaseDate: number; name: string; data: MovieCardData | TVCardData }[] = [];

    /** if movie data is loaded. */
    public isMovieReady = false;

    /** if tv data is loaded. */
    public isTVReady = false;

    /** sorting order type. */
    public sortType = 'Release';

    /** filter type. */
    public filterType = 'All';

    /** sort cards in ascending order. */
    public cardsAscending = true;

    constructor(private homeService: HomeService, private cookieService: CookieService) { }

    ngOnInit(): void {

        this.cookieService.setCookie('movieCollection', [
            '385687','569094','603692','438148','447365','575264','677179','575265','640146','609681','877269','718789','634492','911916',
            '539972','519182','787699','346698','838330','822119','617127','1003598','1003596','617126','986056','929170','830788','593643',
            '661374','619730','301502','968051','664469','1022789','1022787','976573','447273','616747','762509','533535','632856','774752',
            '502356','934433','700391','697843','614479','872585','806704','726759','532408','958196','862552','881164']);
        this.cookieService.setCookie('tvCollection', [
            '107113','456','1434','122196','114469','157202','153518','158087','113988','78191','73375','210232','111803','100088','107365',
            '124800','96237','114472']);
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

        forkJoin(movieCalls)
        .subscribe(
            data => {
                //filter out null movie data
                const filterData = data.filter(movie => movie);
                this.cardData = this.cardData.concat(
                    filterData.map(movie => ({ type: 'movie', releaseDate: movie.release_date, name: movie.title, data: movie }))
                );
                this.isMovieReady = true;
            }
        );

        forkJoin(tvCalls).subscribe(
            data => {
                //filter out null tv data
                const filteredData = data.filter(tv => tv);
                this.cardData = this.cardData.concat(
                    filteredData.map(tv => {
                        if (tv.next_episode_to_air) { tv.display_episode = tv.next_episode_to_air; }
                        else { tv.display_episode = tv.last_episode_to_air; }
                        return { type: 'tv', releaseDate: tv.display_episode.air_date, name: tv.name, data: tv };
                    })
                );
                this.isTVReady = true;
                this.cardData.sort(this.sortByRelease);
                console.log(this.cardData);
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
        this.cardData = this.cardData.filter(content =>
            ((this.determineIfMovieOrTV(content.data) && id !== content.data.id) || !this.determineIfMovieOrTV(content.data)));
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
        this.cardData = this.cardData.filter(content =>
            ((!this.determineIfMovieOrTV(content.data) && id !== content.data.id) || this.determineIfMovieOrTV(content.data)));
        console.log('removed tv - ' + id);
    }

    /**
     * Toggles sorting type.
     */
    public toggleSortType(): void {

        if (this.sortType === 'Release') {
            this.sortType = 'Name';
            this.cardsAscending = true;
            this.cardData.sort(this.sortByName);
        }
        else {
            this.sortType = 'Release';
            this.cardsAscending = true;
            this.cardData.sort(this.sortByRelease);
        }
    }

    /**
     * Toggles sorting order.
     */
    public toggleSortOrder(): void {

        this.cardsAscending = !this.cardsAscending;
        this.cardData.reverse();
    }

    /**
     * Toggles filter type.
     */
    public toggleFilterType(): void {

        if (this.filterType === 'All') { this.filterType = 'Movies'; }
        else if (this.filterType === 'Movies') { this.filterType = 'TV Series'; }
        else { this.filterType = 'All'; }
    }

    /**
     * Determines if object is of type MovieCardData.
     *
     * @param toBeDetermined - data object
     * @returns if object is of type MovieCardData
     */
    public determineIfMovieOrTV(toBeDetermined: MovieCardData | TVCardData): toBeDetermined is MovieCardData {

        if((toBeDetermined as MovieCardData).release_date) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Sorts the list of card data by content release data.
     *
     * @param cardA
     * @param cardB
     * @returns
     */
    private sortByRelease(cardA: { type: string; releaseDate: number; data: MovieCardData | TVCardData },
        cardB: { type: string; releaseDate: number; data: MovieCardData | TVCardData }): number {

        return new Date(cardA.releaseDate+'T00:00:00').getTime() - new Date(cardB.releaseDate+'T00:00:00').getTime();
    }

    /**
     * Sorts the list of card data by content name.
     *
     * @param cardA
     * @param cardB
     */
    private sortByName(cardA: { type: string; name: string; data: MovieCardData | TVCardData },
        cardB: { type: string; name: string; data: MovieCardData | TVCardData }): number {

        if(cardA.name < cardB.name) { return -1; }
        if(cardA.name > cardA.name) { return 1; }
        return 0;
    }
}