import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

    /**
     * Return collection value.
     *
     * @param cookieName - name of the collection
     * @returns - value of the collection
     */
    public getCollection(collectionName: string): string[] {

        const collection = localStorage.getItem(collectionName);
        if (collection) {
            return collection.split(',');
        }
        return [];
    }

    /**
     * Set a new or replace existing collection.
     *
     * @param name - name of the collection
     * @param value - value of the collection
     */
    public setCollection(collectionName: string, value: string[]) {

        localStorage.setItem(collectionName, value.join(','));
    }
}
