/* eslint-disable @typescript-eslint/naming-convention */
export class TVCardData {
    first_air_date: string;
    genres: Genre[];
    id: number;
    last_air_date: string;
    last_episode_to_air: Episode;
    next_episode_to_air: Episode;
    display_episode: Episode;
    name: string;
    networks: ProductionCompany[];
    number_of_episodes: number;
    number_of_seasons: number;
    original_name: string;
    poster_path: string;
    production_companies: ProductionCompany[];
    seasons: Season[];
    status: string;
}

export class Genre {
    id: number;
    name: string;
}

export class ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export class Episode {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    season_number: number;
}

export class Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    poster_path: string;
    season_number: number;
}
