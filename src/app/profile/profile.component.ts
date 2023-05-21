import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { CollectionService } from '../shared/collection.service';
import { faAdd, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

    @ViewChild('exportBtn') exportBtn: ElementRef;
    @ViewChild('importBar') importBar: ElementRef;

    /** icons. */
    public faAdd = faAdd;
    public faClear = faXmark;

    /** collection importing text. */
    public importMovieText = '';
    public importTVText = '';

    /** action message. */
    public message = '';

    constructor(private collectionService: CollectionService) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {

        this.saveCollectionData();
    }

    /**
     * Creates a download url linked to the export button.
     */
    public saveCollectionData(): void {
        const blob = new Blob([
            'Movie Collection:\n' +
            this.collectionService.getCollection('movieCollection') + '\n\n' +
            'TV Collection:\n'+
            this.collectionService.getCollection('tvCollection')
        ], {type: 'text/plain;charset=utf-8'});
        const blobURL = URL.createObjectURL(blob);

        this.exportBtn.nativeElement.href = blobURL;
        this.exportBtn.nativeElement.download = 'content_collection.txt';
    }

    /**
     * Imports the collection entered by the user.
     *
     * @param type - content type
     */
    public onImport(type: string): void {

        if (type === 'movie' && this.importMovieText) {

            this.collectionService.setCollection('movieCollection', this.importMovieText.split(','));
            this.importBar.nativeElement.blur();
            this.message = 'Movie collection successfully imported!';
        }
        else if (type === 'tv' && this.importTVText) {

            this.collectionService.setCollection('tvCollection', this.importTVText.split(','));
            this.importBar.nativeElement.blur();
            this.message = 'TV collection successfully imported!';
        }
        else {
            this.message = '';
        }
        this.saveCollectionData();
    }
}
