import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    /** whether user' has a collection of content'. */
    public hasCollection = false;

    constructor() { }

    ngOnInit(): void {
    }

}
