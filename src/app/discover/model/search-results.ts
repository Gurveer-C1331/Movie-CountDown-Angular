export class SearchResults {
    page: number;
    results: DiscoverCardData[];
    total_pages: number;
    total_results: number;
}

export class DiscoverCardData {
    id: number;
    title: string;
    name: string;
    media_type: string;
    poster_path: string;
}
