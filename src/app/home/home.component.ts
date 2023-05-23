import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeService } from './home.service';
import { CollectionService } from '../shared/collection.service';
import { MovieCardData } from './movie-card/model/movie-card';
import { Episode, TVCardData } from './tv-card/model/tv-card';
import { DisplayData } from './model/display-data';
import { forkJoin, catchError, of, Observable, Subscription } from 'rxjs';
import {PaginationInstance} from 'ngx-pagination';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    /** list of movie ids. */
    public movieCollection: string[];

    /** list of tv ids. */
    public tvCollection: string[];

    /** combined list of Movie and TV card data. */
    public cardData: DisplayData[] = [];

    /** pagination configuration. */
    public maxSize = 5;
    public config: PaginationInstance = {
        itemsPerPage: 20,
        currentPage: 1
    };

    /** icons. */
    public faArrowUp = faArrowUpLong;
    public faArrowDown = faArrowDownLong;
    public faFilter = faFilter;
    public faArrowLeft = faAngleLeft;
    public faArrowRight = faAngleRight;

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

    /** subscriptions. */
    private contentApiSubscription: Subscription;
    private queryParamSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private homeService: HomeService,
        private collectionService: CollectionService) { }

    ngOnInit(): void {

        this.movieCollection = this.collectionService.getCollection('movieCollection');
        this.tvCollection = this.collectionService.getCollection('tvCollection');
        console.log(this.movieCollection);
        console.log(this.tvCollection);

        const calls: Record<string, Observable<MovieCardData | TVCardData>> = {};

        if (!this.isEmpty(this.movieCollection)) {
            this.movieCollection.forEach(movie => {
                calls['movie' + movie] = this.homeService.getMovieData(movie).pipe(catchError(() => of(null as any)));
            });
        }

        if (!this.isEmpty(this.tvCollection)) {
            this.tvCollection.forEach(tv => {
                calls['tv' + tv] = this.homeService.getTVData(tv).pipe(catchError(() => of(null as any)));
            });
        }

        this.contentApiSubscription = forkJoin(calls)
        .subscribe(
            data => {
                Object.keys(data).forEach(key => {
                    const content = data[key];
                    if (content !== null && this.determineIfMovie(content)) {
                        const movie: MovieCardData = content;
                        if (movie.release_date === '') {
                            movie.release_date = '9999-12-31';
                        }
                        this.cardData.push({ type: 'movie', releaseDate: movie.release_date, name: movie.title, data: movie });
                    }
                    else if (content !== null && this.determineIfTV(content)) {
                        const tv: TVCardData = content;
                        if (tv.next_episode_to_air) { tv.display_episode = tv.next_episode_to_air; }
                        else if (tv.last_episode_to_air) { tv.display_episode = tv.last_episode_to_air; }
                        else {
                            tv.display_episode = {
                                // eslint-disable-next-line @typescript-eslint/naming-convention
                                air_date: '9999-12-31',
                                // eslint-disable-next-line @typescript-eslint/naming-convention
                                episode_number: 1,
                                id: 0,
                                name: 'TBA',
                                // eslint-disable-next-line @typescript-eslint/naming-convention
                                season_number: 1
                            };
                        }
                        this.cardData.push({ type: 'tv', releaseDate: tv.display_episode.air_date, name: tv.name, data: tv });
                    }
                });

                this.queryParamSubscription = this.route.queryParamMap.subscribe(
                    params => {
                        const page = Number(params.get('page'));
                        if (page > 0 && page <= Math.ceil(this.cardData.length / this.config.itemsPerPage)) {
                            this.config.currentPage = Number(params.get('page'));
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

                this.isMovieReady = true;
                this.isTVReady = true;
                this.cardData.sort(this.sortByRelease);

                Notification.requestPermission();
                const titles = this.soonRelease();
                this.displayNotifications(titles);
            }
        );
    }

    ngOnDestroy(): void {

        this.contentApiSubscription.unsubscribe();
        this.queryParamSubscription.unsubscribe();
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
        this.collectionService.setCollection('movieCollection', this.movieCollection);

        this.cardData = this.cardData.filter(content =>
            ((this.determineIfMovie(content.data) && id !== content.data.id) || this.determineIfTV(content.data)));
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

        this.cardData = this.cardData.filter(content =>
            ((this.determineIfTV(content.data) && id !== content.data.id) || this.determineIfMovie(content.data)));
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
        this.router.navigate(
            [],
            {
                relativeTo: this.route,
                queryParams: {page: 1},
                queryParamsHandling: 'merge'
            }
        );
    }

    /**
     * Routes user to a different page
     *
     * @param page
     */
    public changePage(page: number) {

        this.router.navigate(
            [],
            {
                relativeTo: this.route,
                queryParams: {page},
                queryParamsHandling: 'merge'
            }
        );
        window.scroll(0, 0);
    }

    /**
     * Determines if object is of type MovieCardData.
     *
     * @param toBeDetermined - data object
     * @returns if object is of type MovieCardData
     */
    public determineIfMovie(toBeDetermined: any): toBeDetermined is MovieCardData {

        if((toBeDetermined as MovieCardData).title) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Determines if object is of type TVCardData.
     *
     * @param toBeDetermined - data object
     * @returns if object is of type TVCardData
     */
    public determineIfTV(toBeDetermined: any): toBeDetermined is TVCardData {

        if((toBeDetermined as TVCardData).name) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Generates string containing titles of content releasing in the next 7 days.
     *
     * @returns - string containing titles of upcoming content
     */
    private soonRelease(): string {

        let titles = '';
        this.cardData.forEach(card => {
            const today = new Date();
            const difference = (new Date(card.releaseDate+'T00:00:00').getTime() + 1000*60*60*24*0 ) - today.getTime();

            if (difference / (1000 * 60 * 60 * 24) < 8 && difference / (1000 * 60 * 60 * 24) > 0 ) {
                if (this.determineIfTV(card.data)) {
                    const seasonNumber = card.data.display_episode.season_number;
                    const episodeNumber = card.data.display_episode.episode_number;
                    titles += card.name + ' - S' + seasonNumber + 'E' + episodeNumber + '\n';
                }
                else {
                    titles += card.name + '\n';
                }
            }
        });

        return titles;
    }

    /**
     * Displays notification of content releasing in the next 7 days.
     *
     * @param titles - string containing titles of upcoming content
     */
    private displayNotifications(titles: string): void {

        const lastNotificationDate: string | null = localStorage.getItem('lastNotification');
        const difference = lastNotificationDate ? new Date().setHours(0,0,0,0) - new Date(lastNotificationDate).getTime() : -1;

        if (Notification.permission === 'granted' && (difference > 0 || lastNotificationDate === null)) {
            navigator.serviceWorker.register('ngsw-worker.js').catch(() => {
                new Notification('Releasing in 7 days', {
                    body: titles,
                    icon: 'assets/M.png'
                });
            });
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification('Releasing in 7 days', {
                    body: titles,
                    icon: 'assets/M.png'
                });
            });
            localStorage.setItem('lastNotification', new Date().toDateString());
        }
    }

    /**
     * Sorts the list of card data by content release data.
     *
     * @param cardA
     * @param cardB
     * @returns
     */
    private sortByRelease(cardA: DisplayData, cardB: DisplayData): number {

        return new Date(cardA.releaseDate+'T00:00:00').getTime() - new Date(cardB.releaseDate+'T00:00:00').getTime();
    }

    /**
     * Sorts the list of card data by content name.
     *
     * @param cardA
     * @param cardB
     */
    private sortByName(cardA: DisplayData, cardB: DisplayData): number {

        if(cardA.name < cardB.name) { return -1; }
        if(cardA.name > cardA.name) { return 1; }
        return 0;
    }
}
