
import React, { useState } from 'react';
import Header from '../components/Header';
import { Search, TrendingUp } from 'lucide-react';

const TopicsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All', 'Technology', 'Programming', 'Design', 'Business', 'Science', 
    'Health', 'Politics', 'Arts', 'Sports', 'Travel', 'Food'
  ];

  const topics = [
    {
      name: 'JavaScript',
      category: 'Programming',
      followers: '1.2M',
      stories: '45K',
      trending: true,
      description: 'The world\'s most popular programming language'
    },
    {
      name: 'React',
      category: 'Programming',
      followers: '856K',
      stories: '32K',
      trending: true,
      description: 'A JavaScript library for building user interfaces'
    },
    {
      name: 'Machine Learning',
      category: 'Technology',
      followers: '2.1M',
      stories: '78K',
      trending: true,
      description: 'Artificial intelligence and data science'
    },
    {
      name: 'UX Design',
      category: 'Design',
      followers: '654K',
      stories: '28K',
      trending: false,
      description: 'User experience and interface design'
    },
    {
      name: 'Startup',
      category: 'Business',
      followers: '987K',
      stories: '56K',
      trending: true,
      description: 'Entrepreneurship and business building'
    },
    {
      name: 'Web Development',
      category: 'Programming',
      followers: '1.5M',
      stories: '89K',
      trending: false,
      description: 'Building applications for the web'
    },
    {
      name: 'Data Science',
      category: 'Technology',
      followers: '743K',
      stories: '41K',
      trending: true,
      description: 'Analytics, statistics, and data visualization'
    },
    {
      name: 'Product Management',
      category: 'Business',
      followers: '432K',
      stories: '19K',
      trending: false,
      description: 'Strategy and product development'
    },
    {
      name: 'iOS Development',
      category: 'Programming',
      followers: '298K',
      stories: '15K',
      trending: false,
      description: 'Building apps for iPhone and iPad'
    },
    {
      name: 'Productivity',
      category: 'Business',
      followers: '1.1M',
      stories: '67K',
      trending: true,
      description: 'Time management and efficiency'
    }
  ];

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      topic.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const trendingTopics = topics.filter(topic => topic.trending).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Topics</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category.toLowerCase())}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.toLowerCase()
                        ? 'bg-green-100 text-green-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Trending Now</h3>
              </div>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={topic.name} className="flex items-start space-x-3">
                    <span className="text-2xl font-bold text-gray-300 mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-900">{topic.name}</h4>
                      <p className="text-sm text-gray-500">{topic.followers} followers</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Topics Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredTopics.map((topic) => (
                <div key={topic.name} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{topic.description}</p>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {topic.category}
                      </span>
                    </div>
                    {topic.trending && (
                      <div className="flex items-center space-x-1 text-orange-500">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-medium">Trending</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{topic.followers} followers</span>
                      <span>·</span>
                      <span>{topic.stories} stories</span>
                    </div>
                    
                    <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredTopics.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No topics found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsPage;
