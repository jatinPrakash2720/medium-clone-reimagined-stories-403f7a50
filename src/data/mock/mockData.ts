
import { User, Article, Topic, Comment } from '../models';

export const mockUsers: User[] = [
  {
    _id: 'user1',
    email: 'emily@example.com',
    username: 'emilydev',
    displayName: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    bio: 'Senior Frontend Developer at TechCorp. Passionate about creating amazing web experiences.',
    location: 'San Francisco, CA',
    website: 'emilyrodriguez.dev',
    joinedAt: new Date('2021-03-15'),
    isVerified: true,
    followers: ['user2', 'user3'],
    following: ['user2'],
    preferences: {
      emailNotifications: true,
      pushNotifications: false,
      theme: 'light'
    },
    stats: {
      totalStories: 23,
      totalClaps: 1250,
      totalViews: 45000,
      totalComments: 189
    },
    createdAt: new Date('2021-03-15'),
    updatedAt: new Date('2024-12-15')
  }
];

export const mockArticles: Article[] = [
  {
    _id: 'article1',
    title: 'The Future of Web Development: What to Expect in 2024',
    subtitle: 'Exploring the latest trends, technologies, and frameworks',
    content: 'Full article content here...',
    excerpt: 'Exploring the latest trends, technologies, and frameworks that are shaping the future of how we build for the web.',
    slug: 'future-web-development-2024',
    authorId: 'user1',
    featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    tags: ['Web Development', 'Technology', 'JavaScript'],
    topics: ['technology', 'programming'],
    status: 'published',
    publishedAt: new Date('2024-12-15'),
    readTime: 8,
    stats: {
      views: 1250,
      claps: 127,
      comments: 23,
      saves: 45,
      shares: 12
    },
    seo: {
      metaTitle: 'The Future of Web Development: What to Expect in 2024',
      metaDescription: 'Exploring the latest trends in web development',
      keywords: ['web development', 'javascript', 'react', 'future']
    },
    isFeatured: true,
    isPremium: false,
    createdAt: new Date('2024-12-10'),
    updatedAt: new Date('2024-12-15')
  }
];

export const mockTopics: Topic[] = [
  {
    _id: 'topic1',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'The world\'s most popular programming language',
    category: 'Programming',
    stats: {
      followers: 1200000,
      stories: 45000
    },
    isTrending: true,
    createdAt: new Date('2020-01-01'),
    updatedAt: new Date('2024-12-15')
  }
];

export const mockComments: Comment[] = [
  {
    _id: 'comment1',
    articleId: 'article1',
    authorId: 'user2',
    content: 'Great article! Really insightful perspective on the future of web development.',
    stats: {
      claps: 12,
      replies: 2
    },
    isEdited: false,
    createdAt: new Date('2024-12-16'),
    updatedAt: new Date('2024-12-16')
  }
];
