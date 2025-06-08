
export interface Notification {
  _id?: string;
  userId: string;
  type: 'follow' | 'clap' | 'comment' | 'mention' | 'article_published';
  title: string;
  message: string;
  data: {
    actorId?: string; // User who triggered the notification
    actorName?: string;
    articleId?: string;
    articleTitle?: string;
    commentId?: string;
  };
  isRead: boolean;
  createdAt: Date;
}
