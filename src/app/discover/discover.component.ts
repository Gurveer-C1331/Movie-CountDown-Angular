import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DiscoverService } from './discover.service';
import { CollectionService } from '../shared/collection.service';
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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private discoverService: DiscoverService,
        private collectionService: CollectionService) { }

    ngOnInit(): void {

        this.movieCollection = this.collectionService.getCollection('movieCollection');
        this.tvCollection = this.collectionService.getCollection('tvCollection');
        console.log(this.movieCollection);
        console.log(this.tvCollection);

        this.route.queryParamMap.subscribe(
            params => {
                if (String(params.get('type')) === 'movie' && Number(params.get('page'))) {
                    this.toggleMovies = true;
                    this.getMoviePage(Number(params.get('page')));
                }
                else if (String(params.get('type')) === 'tv' && Number(params.get('page'))) {
                    this.toggleMovies = false;
                    this.getTVPage(Number(params.get('page')));
                }
                else {
                    this.router.navigate(
                        [],
                        {
                            relativeTo: this.route,
                            queryParams: {type: 'movie', page: 1},
                            queryParamsHandling: 'merge'
                        }
                    );
                }
            }
        );
    }

    /**
     * Toggles between movie and tv sections.
     *
     * @param contentType - movie or tv
     */
    public toggleContent(contentType: string) {

        if (contentType === 'movie') {
            this.toggleMovies = true;
            this.getMoviePage(this.movieConfig.currentPage);
        }
        else {
            this.toggleMovies = false;
            this.getTVPage(this.tvConfig.currentPage);
        }
    }

    /**
     * Retrieve new page containing data for 20 movies.
     *
     * @param page - api page number for latest movies
     */
    public getMoviePage(page: number): void {

        this.isReady = false;
        this.discoverService.getUpcomingMovies(page).subscribe({
            next: data => {
                //redirect to page 1 if page parameter is out of bounds
                if (page > Math.ceil(data.total_results / 20)) {
                    page = 1;
                }
                this.movieConfig.currentPage = page;
                this.movieConfig.totalItems = data.total_results;
                this.movieData = data.results;
                this.router.navigate(
                    [],
                    {
                        relativeTo: this.route,
                        queryParams: {type: 'movie', page: this.movieConfig.currentPage},
                        queryParamsHandling: 'merge'
                    }
                );
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
                //redirect to page 1 if page parameter is out of bounds
                if (page > Math.ceil(data.total_results / 20)) {
                    page = 1;
                }
                this.tvConfig.currentPage = page;
                this.tvConfig.totalItems = data.total_results;
                this.tvData = data.results;
                this.router.navigate(
                    [],
                    {
                        relativeTo: this.route,
                        queryParams: {type: 'tv', page: this.tvConfig.currentPage},
                        queryParamsHandling: 'merge'
                    }
                );
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
        this.collectionService.setCollection('movieCollection', this.movieCollection);
    }

    /**
     * Removes movie card.
     *
     * @param id - id of movie card to remove
     */
    public onRemoveMovie(id: number) {

        const index = this.movieCollection.indexOf(id.toString());
        this.movieCollection.splice(index, 1);
        this.collectionService.setCollection('movieCollection', this.movieCollection);
    }

    /**
     * Adds tv card.
     *
     * @param id - id of tv card to remove
     */
    public onAddTV(id: number) {

        this.tvCollection.push(id.toString());
        this.collectionService.setCollection('tvCollection', this.tvCollection);
    }

    /**
     * Removes tv series from user's collection.
     *
     * @param id - id of tv series to remove
     */
    public onRemoveTV(id: number) {

        const index = this.tvCollection.indexOf(id.toString());
        this.tvCollection.splice(index, 1);
        this.collectionService.setCollection('tvCollection', this.tvCollection);
    }
}
