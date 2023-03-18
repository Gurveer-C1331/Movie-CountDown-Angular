import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { interval } from 'rxjs';

import { HomeService } from '../home.service';
import { MovieCardData, ProductionCompany } from './model/movie-card';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

    /** Movie id. */
    @Input() public movieId: number;

    /** Event emitter when remove button is clicked.  */
    @Output() public removed = new EventEmitter<number>();

    /** Movie card data. */
    public movieData: MovieCardData;

    /** Movie's production companies. */
    public productionCompanies: ProductionCompany[];

    /** Days till the movieR */
    public daysTilRelease: string;

    /** Release date. */
    public releaseDate: Date;

    /** Refresh count down. */
    private refreshCountDown: any;

    /**
     * 
     * @param homeService 
     */
    constructor(private homeService: HomeService) { }

    ngOnInit(): void {

        this.homeService.getMovieData(this.movieId).subscribe(
            data => {
                console.log(data);

                this.movieData = data;
                this.productionCompanies = data.production_companies;
                this.releaseDate = new Date(data.release_date+"T00:00:00");
                this.setTime(this.releaseDate);
            },
            error => {
                console.log(error);
            }
        );

        this.refreshCountDown = interval(1000).subscribe(
            () => this.setTime(this.releaseDate)
        );
    }

    ngOnDelete(): void {
        this.refreshCountDown.unsubscribe();
    }

    /**
     * Checks whether element's text is longer than the text container.
     * 
     * @param elementClass - class name for the text element
     * @returns - whether or not the text is longer
     */
    public enableSlideText(elementClass: string): boolean {

        let textContainer: Element = document.querySelector('.text-container')!;
        let textContainerWidth = parseFloat(window.getComputedStyle(textContainer).width);
        let titleText: Element = document.querySelector(elementClass)!;

        //!!!!!ExpressionChangedAfterItHasBeenCheckedError fix it
        if (titleText?.scrollWidth > textContainerWidth) {
            return true;
        }
        return false;
    }

    /**
     * Sets the days, hours, minute, second and date for the card.
     * 
     * @param releaseDate - release date for the movie or series
     */
    private setTime(releaseDate: Date) {
        const today = new Date();
        const difference = (releaseDate.getTime() + 1000*60*60*24*0 ) - today.getTime();
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = "0" + Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
        const minutes = "0" + Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString();
        const seconds = "0" + Math.floor((difference % (1000 * 60)) / 1000).toString();

        //movie/tv series has released
        if (difference / (1000 * 60 * 60 * 24) < 0) {
            this.daysTilRelease = 'Released';
        }
        //less than a day from release
        else if (difference / (1000 * 60 * 60 * 24) < 1) {
            this.daysTilRelease = hours.slice(-2) + " : " + minutes.slice(-2) + " : " + seconds.slice(-2);
        }
        //multiple days from release
        else { this.daysTilRelease = days.toString(); }
    }
}
