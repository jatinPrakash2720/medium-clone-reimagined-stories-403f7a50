
export interface Article {
  _id?: string;
  title: string;
  subtitle?: string;
  content: string;
  excerpt: string;
  slug: string;
  authorId: string;
  author?: {
    _id: string;
    displayName: string;
    username: string;
    avatar?: string;
  };
  featuredImage?: string;
  tags: string[];
  topics: string[];
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
  readTime: number; // in minutes
  stats: {
    views: number;
    claps: number;
    comments: number;
    saves: number;
    shares: number;
  };
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords: string[];
  };
  isFeatured: boolean;
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ArticleCard extends Pick<Article, '_id' | 'title' | 'subtitle' | 'excerpt' | 'slug' | 'featuredImage' | 'tags' | 'publishedAt' | 'readTime' | 'stats'> {
  author: {
    displayName: string;
    username: string;
    avatar?: string;
  };
}
