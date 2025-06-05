
import React from 'react';
import { TrendingUp, Users, BookOpen } from 'lucide-react';

const Sidebar = () => {
  const trendingTopics = [
    'React', 'JavaScript', 'Web Development', 'AI & Machine Learning', 
    'Productivity', 'Startup', 'Design', 'Career'
  ];

  const suggestedAuthors = [
    {
      name: 'Sarah Chen',
      bio: 'Senior Software Engineer at Google',
      followers: '12.5K',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=150'
    },
    {
      name: 'David Kumar',
      bio: 'Product Designer & Entrepreneur',
      followers: '8.2K',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      name: 'Alex Rodriguez',
      bio: 'Tech Writer & Developer Advocate',
      followers: '15.1K',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    }
  ];

  const readingList = [
    'Building Modern Web Apps with React',
    'The Future of Artificial Intelligence',
    'Design Systems That Scale'
  ];

  return (
    <aside className="w-80 bg-gray-50 min-h-screen p-6 space-y-8">
      {/* Trending Topics */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Trending Topics</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Who to Follow */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Who to Follow</h3>
        </div>
        <div className="space-y-4">
          {suggestedAuthors.map((author, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm">{author.name}</h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{author.bio}</p>
                  <p className="text-xs text-gray-500">{author.followers} followers</p>
                </div>
              </div>
              <button className="w-full mt-3 px-4 py-2 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Reading List */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Your Reading List</h3>
        </div>
        <div className="space-y-3">
          {readingList.map((article, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 line-clamp-2">{article}</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
          See all (12)
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
