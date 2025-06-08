
export interface Clap {
  _id?: string;
  userId: string;
  articleId?: string;
  commentId?: string;
  count: number; // Users can clap multiple times
  createdAt: Date;
  updatedAt: Date;
}
