import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { interval } from 'rxjs';

import { HomeService } from '../home.service';
import { TVCardData, ProductionCompany, Episode } from './model/tv-card';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.css']
})
export class TvCardComponent implements OnInit {

    /** TV id. */
    @Input() public tvId: number;

    /** Event emitter when remove button is clicked.  */
    @Output() public removed = new EventEmitter<number>();

    /** TV show card data. */
    public tvData: TVCardData;

    /** TV show's networks. */
    public networks: ProductionCompany[];

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

        this.homeService.getTVData(this.tvId).subscribe(
            data => {
                console.log(data);

                this.tvData = data;
                this.networks = data.networks;

                this.setTVData();
                
                this.releaseDate = new Date(this.tvData.display_episode.air_date+"T00:00:00");
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
     * Updates tv data based on the latest episode aired OR to be aired.
     */
    public setTVData(): void {

        let displayEpisode: Episode;
        const lastEpisode = this.tvData.last_episode_to_air;
        const nextEpisode = this.tvData.next_episode_to_air;
        const seasons = this.tvData.seasons;

        if (this.tvData.next_episode_to_air) { displayEpisode = nextEpisode; }
        else { displayEpisode = lastEpisode; }

        let seasonNumber;
        if (seasons[displayEpisode.season_number]) { seasonNumber = displayEpisode.season_number }
        else { seasonNumber = seasons.length - 1; }

        this.tvData.name += ' (' + seasons[seasonNumber].name + ')';
        if (seasons[seasonNumber].poster_path) { this.tvData.poster_path = seasons[seasonNumber].poster_path; }

        this.tvData.display_episode = displayEpisode;
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
