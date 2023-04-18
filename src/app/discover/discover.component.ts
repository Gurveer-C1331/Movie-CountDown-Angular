import { Component, OnInit } from '@angular/core';

import { DiscoverService } from './discover.service';
import { CookieService } from '../shared/cookie.service';
import { DiscoverCardData } from './model/search-results';
import {PaginationInstance} from 'ngx-pagination';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.component.html',
    styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

    /** list of movie ids. */
    public movieCollection: string[];

    /** list of tv ids. */
    public tvCollection: string[];

    /** list of movie data. */
    public movieData: DiscoverCardData[] = [];

    /** list of tv series data. */
    public tvData: DiscoverCardData[] = [];

    /** if first set of movie data is loaded. */
    public firstLoadComplete = false;

    /** if data is loaded. */
    public isReady = false;

    /** toggles between movie and tv list. */
    public toggleMovies = true;

    /** pagination configuration. */
    public maxSize = 5;
    public movieConfig: PaginationInstance = {
        id: 'moviePagination',
        itemsPerPage: 20,
        currentPage: 1,
        totalItems: 20
    };
    public tvConfig: PaginationInstance = {
        id: 'tvPagination',
        itemsPerPage: 20,
        currentPage: 1,
        totalItems: 20
    };

    /** pagination icons. */
    public faArrowLeft = faAngleLeft;
    public faArrowRight = faAngleRight;

    constructor(private discoverService: DiscoverService, private cookieService: CookieService) { }

    ngOnInit(): void {

        this.movieCollection = this.cookieService.getCookie('movieCollection');
        this.tvCollection = this.cookieService.getCookie('tvCollection');
        console.log(this.movieCollection);
        console.log(this.tvCollection);

        this.discoverService.getUpcomingMovies(1).subscribe({
            next: data => {
                this.movieConfig.totalItems = data.total_results;
                this.movieData = data.results;
                this.isReady = true;
                this.firstLoadComplete = true;
            },
            error: error => {
                console.log(error);
                this.isReady = true;
            }
        });

        this.discoverService.getUpcomingTVSeries(1).subscribe({
            next: data => {
                this.tvConfig.totalItems = data.total_results;
                this.tvData = data.results;
            },
            error: error => {
                console.log(error);
            }
        });
    }

    /**
     * Retrieve new page containing data for 20 movies.
     *
     * @param page - api page number for latest movies
     */
    public getMoviePage(page: number) {

        this.isReady = false;
        this.discoverService.getUpcomingMovies(page).subscribe({
            next: data => {
                this.movieConfig.currentPage = page;
                this.movieConfig.totalItems = data.total_results;
                this.movieData = data.results;
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
     * Retrieve new page containing data for 20 tv series.
     *
     * @param page - api page number for latest tv series
     */
    public getTVPage(page: number) {

        this.isReady = false;
        this.discoverService.getUpcomingTVSeries(page).subscribe({
            next: data => {
                this.tvConfig.currentPage = page;
                this.tvConfig.totalItems = data.total_results;
                this.tvData = data.results;
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
