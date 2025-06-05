
import React, { useState } from 'react';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [activeTab, setActiveTab] = useState('for-you');

  const featuredArticle = {
    id: '1',
    title: 'The Future of Web Development: What to Expect in 2024',
    subtitle: 'Exploring the latest trends, technologies, and frameworks that are shaping the future of how we build for the web. From AI-powered development tools to new JavaScript frameworks.',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    },
    publishDate: 'Dec 15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    tags: ['Web Development', 'Technology', 'JavaScript'],
    claps: 127
  };

  const articles = [
    {
      id: '2',
      title: 'Building Scalable React Applications: Best Practices and Patterns',
      subtitle: 'Learn how to structure your React applications for long-term maintainability and performance.',
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
      },
      publishDate: 'Dec 14',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      tags: ['React', 'JavaScript', 'Architecture'],
      claps: 89
    },
    {
      id: '3',
      title: 'The Psychology of User Interface Design',
      subtitle: 'Understanding how users interact with digital interfaces and designing for human behavior.',
      author: {
        name: 'Sarah Kim',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=150'
      },
      publishDate: 'Dec 13',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400',
      tags: ['Design', 'UX', 'Psychology'],
      claps: 156
    },
    {
      id: '4',
      title: 'From Junior to Senior: A Developer\'s Journey',
      subtitle: 'Practical advice and insights on how to advance your career in software development.',
      author: {
        name: 'David Kumar',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
      },
      publishDate: 'Dec 12',
      readTime: '10 min',
      tags: ['Career', 'Programming', 'Growth'],
      claps: 203
    },
    {
      id: '5',
      title: 'Machine Learning Fundamentals for Web Developers',
      subtitle: 'A practical introduction to ML concepts and how to integrate them into web applications.',
      author: {
        name: 'Dr. Lisa Wang',
        avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150'
      },
      publishDate: 'Dec 11',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
      tags: ['Machine Learning', 'AI', 'Web Development'],
      claps: 95
    },
    {
      id: '6',
      title: 'The Art of Code Reviews: Building Better Software Together',
      subtitle: 'How to conduct effective code reviews that improve code quality and team collaboration.',
      author: {
        name: 'Alex Thompson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
      },
      publishDate: 'Dec 10',
      readTime: '7 min',
      tags: ['Programming', 'Team', 'Best Practices'],
      claps: 74
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto flex">
        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="flex items-center space-x-8 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('for-you')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'for-you'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              For you
            </button>
            <button
              onClick={() => setActiveTab('following')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'following'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Following
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'trending'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Trending
            </button>
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <ArticleCard {...featuredArticle} layout="featured" />
          </div>

          {/* Article List */}
          <div className="space-y-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
              Load more stories
            </button>
          </div>
        </main>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
