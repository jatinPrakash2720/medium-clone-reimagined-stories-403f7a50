
export type { User, UserProfile } from './User';
export type { Article, ArticleCard } from './Article';
export type { Comment } from './Comment';
export type { Topic } from './Topic';
export type { List } from './List';
export type { Notification } from './Notification';
export type { Clap } from './Clap';
export type { Follow } from './Follow';

// Common API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Search and Filter types
export interface SearchQuery {
  q?: string;
  tags?: string[];
  topics?: string[];
  author?: string;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: 'relevance' | 'date' | 'claps' | 'views';
  sortOrder?: 'asc' | 'desc';
}

export interface FilterOptions {
  page?: number;
  limit?: number;
  search?: SearchQuery;
}
