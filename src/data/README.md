# Data Models and Services

This folder contains the complete data modeling structure for the Medium clone application. The models are designed to be easily migrated to MongoDB.

## Structure

### Models (`/models`)
- **User.ts** - User accounts, profiles, preferences, and stats
- **Article.ts** - Blog posts, content, metadata, and analytics
- **Comment.ts** - Comments system with nested replies support
- **Topic.ts** - Content categorization and topic following
- **List.ts** - User-created article collections
- **Notification.ts** - User notifications system
- **Clap.ts** - Article and comment reactions
- **Follow.ts** - User following relationships

### Services (`/services`)
- **DataService.ts** - Centralized data operations with abstract base class
- **index.ts** - Service exports and DataManager utility

### Mock Data (`/mock`)
- **mockData.ts** - Sample data for development and testing

## MongoDB Migration

The schemas are designed with MongoDB in mind:

1. **Document Structure**: All models use `_id` as the primary key
2. **Embedded Documents**: Related data is structured for efficient querying
3. **Indexing Ready**: Key fields are identified for database indexing
4. **Relationships**: References between documents using IDs

### Recommended MongoDB Collections:
- `users`
- `articles` 
- `comments`
- `topics`
- `lists`
- `notifications`
- `claps`
- `follows`

### Key Indexes to Create:
- `users.username` (unique)
- `users.email` (unique)
- `articles.slug` (unique)
- `articles.authorId`
- `articles.status`
- `comments.articleId`
- `follows.followerId`
- `follows.followingId`

## Usage

```typescript
import { userService, articleService } from '@/data/services';

// Get user articles
const articles = await articleService.getByAuthor(userId);

// Create new article
const newArticle = await articleService.create({
  title: 'My Article',
  content: 'Article content...',
  // ... other fields
});
```

## Future Enhancements

When migrating to MongoDB:
1. Replace mock implementations in services with actual MongoDB queries
2. Add proper error handling and validation
3. Implement caching strategies
4. Add data migration scripts
5. Set up proper indexing for performance
