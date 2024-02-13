export interface SearchData {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface SearchType {
  query: string;
  results: SearchData[];
  status: 'idle' | 'loading' | 'successful' | 'failed';
  found?: number;
  error?: string;
}
