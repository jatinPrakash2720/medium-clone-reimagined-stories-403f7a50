
export interface Topic {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  image?: string;
  stats: {
    followers: number;
    stories: number;
  };
  isTrending: boolean;
  createdAt: Date;
  updatedAt: Date;
}
