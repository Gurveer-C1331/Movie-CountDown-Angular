import { MovieCardData } from '../movie-card/model/movie-card';
import { TVCardData } from '../tv-card/model/tv-card';

export class DisplayData {
    type: string;
    releaseDate: string;
    name: string;
    data: MovieCardData | TVCardData;
}
