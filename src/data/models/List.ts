
export interface List {
  _id?: string;
  name: string;
  description?: string;
  authorId: string;
  author?: {
    _id: string;
    displayName: string;
    username: string;
    avatar?: string;
  };
  articles: string[]; // Array of article IDs
  isPublic: boolean;
  stats: {
    followers: number;
    articles: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
