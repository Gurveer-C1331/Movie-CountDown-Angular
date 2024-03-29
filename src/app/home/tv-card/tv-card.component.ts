import { Component, OnInit, EventEmitter, Input, Output, AfterViewChecked, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

import { TVCardData, ProductionCompany } from './model/tv-card';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.css']
})
export class TvCardComponent implements OnInit, AfterViewChecked, OnDestroy {

    /** TV show card data. */
    @Input() public tvData: TVCardData;

    /** Event emitter when remove button is clicked.  */
    @Output() public removed = new EventEmitter<number>();

    /** TV id. */
    public tvId: number;

    /** TV show's networks. */
    public networks: ProductionCompany[];

    /** Days till the movieR */
    public daysTilRelease: { 'releaseText': string; 'confirmed': boolean };

    /** Release date. */
    public releaseDate: Date;

    /** if title text overflows. */
    public isTitleLong = false;

    /** if episode text overflows. */
    public isEpisodeTextLong = false;

    /** if network text overflows. */
    public isNetworkTextLong = false;

    /** Refresh count down. */
    private refreshCountDown: any;

    /**
     * @param cd
     */
    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit(): void {

        this.tvId = this.tvData.id;
        this.networks = this.tvData.networks;
        this.releaseDate = new Date(this.tvData.display_episode.air_date+'T00:00:00');
        this.setTime(this.releaseDate);

        this.refreshCountDown = interval(1000).subscribe(
            () => this.setTime(this.releaseDate)
        );
    }

    ngAfterViewChecked(): void {

        if (this.isTitleLong !== this.enableSlideText('#title-'+this.tvId)) {
            this.isTitleLong = this.enableSlideText('#title-'+this.tvId);
            this.cd.detectChanges();
        }
        if (this.isEpisodeTextLong !== this.enableSlideText('#episode-'+this.tvId)) {
            this.isEpisodeTextLong = this.enableSlideText('#episode-'+this.tvId);
            this.cd.detectChanges();
        }
        if (this.isNetworkTextLong !== this.enableSlideText('#network-'+this.tvData.id)) {
            this.isNetworkTextLong = this.enableSlideText('#network-'+this.tvData.id);
            this.cd.detectChanges();
        }
    }

    ngOnDestroy(): void {

        this.refreshCountDown.unsubscribe();
    }

    /**
     * Checks whether element's text is longer than the text container.
     *
     * @param elementClass - class name for the text element
     * @returns - whether or not the text is longer
     */
    public enableSlideText(elementClass: string): boolean {

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const textContainer: Element = document.querySelector('.text-container')!;
        const textContainerWidth = parseFloat(window.getComputedStyle(textContainer).width);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const titleText: Element = document.querySelector(elementClass)!;

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
        const hours = '0' + Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
        const minutes = '0' + Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString();
        const seconds = '0' + Math.floor((difference % (1000 * 60)) / 1000).toString();

        //tv series has released
        if (difference / (1000 * 60 * 60 * 24) < 0) {
            this.daysTilRelease = { releaseText: 'Released', confirmed: true };
        }
        //tv with no confirmed release date
        else if (releaseDate.getFullYear() === 9999) {
            this.daysTilRelease = { releaseText: this.tvData.status, confirmed: false };
        }
        //less than a day from release
        else if (difference / (1000 * 60 * 60 * 24) < 1) {
            this.daysTilRelease = { releaseText: hours.slice(-2) + ' : ' + minutes.slice(-2) + ' : ' + seconds.slice(-2), confirmed: true };
        }
        //multiple days from release
        else { this.daysTilRelease = { releaseText: days.toString(), confirmed: true }; }
    }
}
