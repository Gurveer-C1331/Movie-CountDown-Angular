import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from './search.service';
import { CookieService } from '../shared/cookie.service';
import { DiscoverCardData } from '../discover/model/search-results';
import {PaginationInstance} from 'ngx-pagination';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { forkJoin, catchError, of, map } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    /** search string. */
    public searchString: string;

    /** list of movie ids. */
    public movieCollection: string[];

    /** list of tv ids. */
    public tvCollection: string[];

    /** list of search result data. */
    public searchResultData: DiscoverCardData[] = [];

    /** if data is loaded. */
    public isReady = false;

    /** pagination configuration. */
    public maxSize = 5;
    public config: PaginationInstance = {
        itemsPerPage: 20,
        currentPage: 1,
        totalItems: 20
    };

    /** pagination icons. */
    public faArrowLeft = faAngleLeft;
    public faArrowRight = faAngleRight;

    constructor(private route: ActivatedRoute,
        private searchSerivce: SearchService,
        private cookieService: CookieService) { }

    ngOnInit(): void {

        this.movieCollection = this.cookieService.getCookie('movieCollection');
        this.tvCollection = this.cookieService.getCookie('tvCollection');
        console.log(this.movieCollection);
        console.log(this.tvCollection);

        this.route.queryParamMap.subscribe(
            params => {
                this.isReady = false;
                this.searchResultData = [];
                this.searchString = String(params.get('q'));

                this.config = {
                    itemsPerPage: 20,
                    currentPage: 1,
                    totalItems: 20
                };

                if (this.searchString.includes('tmdb')) {
                    forkJoin(
                        {
                            movie: this.searchSerivce.getMovieById(this.searchString.replace('tmdb', '')).pipe(catchError(() => of(null))),
                            tv: this.searchSerivce.getTVById(this.searchString.replace('tmdb', '')).pipe(catchError(() => of(null)))
                        }
                    )
                    .subscribe(
                        data => {
                            if (data.movie) {
                                data.movie.media_type = 'movie';
                                this.searchResultData.push(data.movie);
                            }
                            if (data.tv) {
                                data.tv.media_type = 'tv';
                                this.searchResultData.push(data.tv);
                            }
                            this.isReady = true;
                        }
                    );
                }
                else {
                    this.searchSerivce.getSearchResults(this.searchString, 1).subscribe({
                        next: data => {
                            console.log(data.results);
                            this.config.totalItems = data.total_results;
                            this.searchResultData = data.results;
                            this.isReady = true;
                        },
                        error: error => {
                            console.log(error);
                            this.isReady = true;
                        }
                    });
                }
            }
        );
    }

    /**
     * Retrieve new page containing data for list of movies and tv series.
     *
     * @param page -
     */
    public getSearchPage(page: number): void {

        this.isReady = false;
        this.searchSerivce.getSearchResults(this.searchString, page).subscribe({
            next: data => {
                this.config.currentPage = page;
                this.config.totalItems = data.total_results;
                this.searchResultData = data.results;
                console.log(this.searchResultData);
                this.isReady = true;
                window.scrollTo(0, 0);
            },
            error: error => {
                console.log(error);
                this.isReady = true;
                window.scrollTo(0, 0);
            }
        });
    }

    /**
     * Adds movie card.
     *
     * @param id - id of movie card to remove
     */
    public onAddMovie(id: number) {

        this.movieCollection.push(id.toString());
        //!!!temporarily removed to be enabled later
        //this.cookieService.setCookie('movieCollection', this.movieCollection);
        console.log('added movie - ' + id);
    }

    /**
     * Removes movie card.
     *
     * @param id - id of movie card to remove
     */
    public onRemoveMovie(id: number) {

        const index = this.movieCollection.indexOf(id.toString());
        this.movieCollection.splice(index, 1);
        //!!!temporarily removed to be enabled later
        //this.cookieService.setCookie('movieCollection', this.movieCollection);
        console.log('removed movie - ' + id);
    }

    /**
     * Adds tv card.
     *
     * @param id - id of tv card to remove
     */
    public onAddTV(id: number) {

        this.tvCollection.push(id.toString());
        //!!!temporarily removed to be enabled later
        //this.cookieService.setCookie('tvCollection', this.tvCollection);
        console.log('added tv - ' + id);
    }

    /**
     * Removes tv series from user's collection.
     *
     * @param id - id of tv series to remove
     */
    public onRemoveTV(id: number) {

        const index = this.tvCollection.indexOf(id.toString());
        this.tvCollection.splice(index, 1);
        //!!!temporarily removed to be enabled later
        //this.cookieService.setCookie('tvCollection', this.tvCollection);
        console.log('removed tv - ' + id);
    }
}