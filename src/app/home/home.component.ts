import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { CookieService } from 'src/app/shared/cookie.service';

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

    /** if data is still loading */
    public isLoading: boolean = false;

    constructor(private homeService: HomeService, private cookieService: CookieService) { }

    ngOnInit(): void {

        //this.cookieService.setCookie("movieCollection", ["768362", "505642", "603692", "934433", "693134"]);
        //this.cookieService.setCookie("tvCollection", ["82856", "456", "1434", "100088"]);

        this.movieCollection = this.cookieService.getCookie('movieCollection');
        this.tvCollection = this.cookieService.getCookie('tvCollection');
        console.log(this.movieCollection);
        console.log(this.tvCollection);

        //!!!maybe change how the card data is retrieved
        //instead of having each card loading it's own data, load all in one place so:
        //-> easier to track progess of loading data, helps to turn on and off the laoding animation
        //-> easy to implement solutions to make it faster to make tons of api calls
        //maybe do this after completing the tv card component
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
        //this.cookieService.setCookie("movieCollection", this.movieCollection);
        console.log("removed movie - " + id);
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
        //this.cookieService.setCookie("tvCollection", this.tvCollection);
        console.log("removed tv - " + id);
    }
}
