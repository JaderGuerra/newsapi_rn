export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: null;
  publishedAt: string;
  content: null;
}

export interface Source {
  id: ID;
  name: Name;
}

export enum ID {
  GoogleNews = "google-news",
}

export enum Name {
  GoogleNews = "Google News",
}
