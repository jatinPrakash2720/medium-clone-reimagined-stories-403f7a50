
export interface Comment {
  _id?: string;
  articleId: string;
  authorId: string;
  author?: {
    _id: string;
    displayName: string;
    username: string;
    avatar?: string;
  };
  content: string;
  parentCommentId?: string; // For nested comments
  replies?: Comment[];
  stats: {
    claps: number;
    replies: number;
  };
  isEdited: boolean;
  createdAt: Date;
  updatedAt: Date;
}
