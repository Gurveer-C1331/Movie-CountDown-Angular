export class MovieCardData {
    genres: Genre[];
    id: number;
    original_title: string;
    poster_path: string;
    production_companies: ProductionCompany[];
    release_date: string;
    title: string;
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
