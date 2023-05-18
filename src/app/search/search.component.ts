import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from './search.service';
import { CollectionService } from '../shared/collection.service';
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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private searchSerivce: SearchService,
        private collectionService: CollectionService) { }

    ngOnInit(): void {

        this.movieCollection = this.collectionService.getCollection('movieCollection');
        this.tvCollection = this.collectionService.getCollection('tvCollection');
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
                            this.router.navigate(
                                [],
                                {
                                    relativeTo: this.route,
                                    queryParams: {page: 1},
                                    queryParamsHandling: 'merge'
                                }
                            );
                            this.isReady = true;
                        }
                    );
                }
                else if (Number(params.get('page'))) {
                    this.getSearchPage(Number(params.get('page')));
                }
                else {
                    this.router.navigate(
                        [],
                        {
                            relativeTo: this.route,
                            queryParams: {page: 1},
                            queryParamsHandling: 'merge'
                        }
                    );
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
                //redirect to page 1 if page parameter is out of bounds
                if (page > Math.ceil(data.total_results / 20)) {
                    page = 1;
                }
                this.config.currentPage = page;
                this.config.totalItems = data.total_results;
                this.searchResultData = data.results;
                console.log(this.searchResultData);
                this.router.navigate(
                    [],
                    {
                        relativeTo: this.route,
                        queryParams: {page},
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
