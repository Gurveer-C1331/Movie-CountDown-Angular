import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    @ViewChild('searchBar') searchBar: ElementRef;

    title = 'website';

    /** icons. */
    public faClear = faXmark;
    public faSearch = faMagnifyingGlass;

    /** search string entered by the user. */
    public searchString = { q : '', page : 1};

    constructor(public router: Router) { }

    /**
     * Checks if the link is active.
     *
     * @param url - url string
     * @returns whether or not the link is active
     */
    public isLinkActive(url: string): boolean {
        const queryParamsIndex = this.router.url.indexOf('?');
        const baseUrl = queryParamsIndex === -1 ? this.router.url : this.router.url.slice(0, queryParamsIndex);
        return baseUrl === url;
    }

    /**
     * Route user to the Search results page and reset searchString.
     */
    public onSearch(): void {

        if (this.searchString.q) {
            this.router.navigate(
                ['/search'],
                { queryParams: this.searchString }
            );

            //this.searchString.q = '';
            this.searchBar.nativeElement.blur();
        }
    }
}
