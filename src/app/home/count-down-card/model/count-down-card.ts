export class CountDownCard {
    id: number;
    title: string;
    mediaType: string;
    studio: string;
    genre: string;
    episodeInfo: EpisodeInfo;
    releaseDate: string;
}

export class EpisodeInfo {
    seasonNumber: number;
    seasonTitle: string;
    episodeNumber: number;
    episodeTitle: string;
}