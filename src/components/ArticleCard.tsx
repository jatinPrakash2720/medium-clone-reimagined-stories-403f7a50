
import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Share, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    avatar: string;
    isFollowing?: boolean;
  };
  publishDate: string;
  readTime: string;
  image?: string;
  tags: string[];
  claps: number;
  isBookmarked?: boolean;
  layout?: 'featured' | 'standard' | 'compact';
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  subtitle,
  author,
  publishDate,
  readTime,
  image,
  tags,
  claps,
  isBookmarked = false,
  layout = 'standard'
}) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [clapCount, setClapCount] = useState(claps);
  const [hasClapped, setHasClapped] = useState(false);

  const handleClap = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasClapped) {
      setClapCount(prev => prev + 1);
      setHasClapped(true);
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setBookmarked(!bookmarked);
  };

  if (layout === 'featured') {
    return (
      <article className="group cursor-pointer mb-12">
        <Link to={`/article/${id}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">{author.name}</span>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-sm text-gray-400">{publishDate}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 line-clamp-3">
                {subtitle}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{readTime} read</span>
                  <div className="flex items-center space-x-1">
                    {tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleClap}
                    className={`flex items-center space-x-1 ${hasClapped ? 'text-green-600' : 'text-gray-400'} hover:text-green-600 transition-colors`}
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{clapCount}</span>
                  </button>
                  
                  <button
                    onClick={handleBookmark}
                    className={`${bookmarked ? 'text-green-600' : 'text-gray-400'} hover:text-green-600 transition-colors`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {image && (
              <div className="order-first md:order-last">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer py-8 border-b border-gray-100 last:border-b-0">
      <Link to={`/article/${id}`}>
        <div className="flex items-start justify-between">
          <div className="flex-1 mr-4">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">{author.name}</span>
              <span className="text-sm text-gray-400">·</span>
              <span className="text-sm text-gray-400">{publishDate}</span>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
              {title}
            </h2>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {subtitle}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{readTime} read</span>
                <div className="flex items-center space-x-1">
                  {tags.slice(0, 1).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleClap}
                  className={`flex items-center space-x-1 ${hasClapped ? 'text-green-600' : 'text-gray-400'} hover:text-green-600 transition-colors`}
                >
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{clapCount}</span>
                </button>
                
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
                
                <button
                  onClick={handleBookmark}
                  className={`${bookmarked ? 'text-green-600' : 'text-gray-400'} hover:text-green-600 transition-colors`}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {image && (
            <div className="flex-shrink-0">
              <img
                src={image}
                alt={title}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded"
              />
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
