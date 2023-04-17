import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { DiscoverCardData } from '../model/search-results';

@Component({
  selector: 'app-discover-card',
  templateUrl: './discover-card.component.html',
  styleUrls: ['./discover-card.component.css']
})
export class DiscoverCardComponent implements OnInit {

    /** Discover card type. */
    @Input() public cardType: string;

    /** Discover card data. */
    @Input() public cardData: DiscoverCardData;

    /** if the movie is already in user's collection. */
    @Input() public inCollection: boolean;

    /** Event emitter when remove button is clicked.  */
    @Output() public removed = new EventEmitter<number>();

    /** Event emitter when add button is clicked. */
    @Output() public added = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

}
