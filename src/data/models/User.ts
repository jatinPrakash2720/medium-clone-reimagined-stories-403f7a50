
export interface User {
  _id?: string;
  email: string;
  username: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  joinedAt: Date;
  isVerified: boolean;
  followers: string[]; // Array of user IDs
  following: string[]; // Array of user IDs
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  preferences: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    theme: 'light' | 'dark' | 'auto';
  };
  stats: {
    totalStories: number;
    totalClaps: number;
    totalViews: number;
    totalComments: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends Omit<User, 'email' | 'preferences'> {
  isFollowing?: boolean;
}
