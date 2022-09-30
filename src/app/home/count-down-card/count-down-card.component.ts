import { Component, OnInit, Input } from '@angular/core';

import { CountDownCard, EpisodeInfo } from './model/count-down-card';
import { HomeService } from '../home.service';

@Component({
    selector: 'app-count-down-card',
    templateUrl: './count-down-card.component.html',
    styleUrls: ['./count-down-card.component.css']
})
export class CountDownCardComponent implements OnInit {

    /** Data object for countdown card. */
    @Input() cardData: CountDownCard;

    /** card's media type */
    public mediaType: string = "TV Series";

    constructor(private homeService: HomeService) { }

    ngOnInit(): void {

        this.homeService.getMovieData().subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        )
    }

    /**
     * Checks whether element's text is longer than the text container
     * 
     * @param elementClass - class name for the text element
     * @returns - whether or not the text is longer
     */
    enableSlideText(elementClass: string): boolean {

        let textContainer: Element = document.querySelector('.text-container')!;
        let textContainerWidth = parseFloat(window.getComputedStyle(textContainer).width);
        let titleText: Element = document.querySelector(elementClass)!;

        if (titleText?.scrollWidth > textContainerWidth) {
            return true;
        }
        return false;
    }
}
