import { Pipe, PipeTransform } from '@angular/core';

import { MovieCardData } from './movie-card/model/movie-card';
import { TVCardData } from './tv-card/model/tv-card';
import { DisplayData } from './model/display-data';

@Pipe({
  name: 'filterCards',
  pure: false
})
export class FilterCardsPipe implements PipeTransform {

  transform(items: DisplayData[], contentType: string): DisplayData[] {

        if (!items || !contentType) {
            return items;
        }

        if (contentType === 'Movies') {
            return items.filter(card => card.type === 'movie');
        }
        else if (contentType === 'TV Series') {
            return items.filter(card => card.type === 'tv');
        }
        else { return items; }
  }

}
