
import React, { useState } from 'react';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import { Settings, Share, MoreHorizontal, MapPin, Calendar, Link as LinkIcon } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('stories');
  const [isFollowing, setIsFollowing] = useState(false);

  const user = {
    name: 'Emily Rodriguez',
    username: '@emilydev',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    bio: 'Senior Frontend Developer at TechCorp. Passionate about creating amazing web experiences and sharing knowledge with the community.',
    location: 'San Francisco, CA',
    joined: 'Joined March 2021',
    website: 'emilyrodriguez.dev',
    followers: '2.5K',
    following: '847',
    stories: '23'
  };

  const userStories = [
    {
      id: '1',
      title: 'The Future of Web Development: What to Expect in 2024',
      subtitle: 'Exploring the latest trends, technologies, and frameworks that are shaping the future of how we build for the web.',
      author: {
        name: user.name,
        avatar: user.avatar
      },
      publishDate: 'Dec 15',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      tags: ['Web Development', 'Technology', 'JavaScript'],
      claps: 127
    },
    {
      id: '2',
      title: 'Building Accessible React Components: A Complete Guide',
      subtitle: 'Learn how to create React components that work for everyone, including users with disabilities.',
      author: {
        name: user.name,
        avatar: user.avatar
      },
      publishDate: 'Dec 8',
      readTime: '12 min',
      tags: ['React', 'Accessibility', 'Frontend'],
      claps: 89
    },
    {
      id: '3',
      title: 'CSS Grid vs Flexbox: When to Use Which',
      subtitle: 'A practical guide to choosing between CSS Grid and Flexbox for your layout needs.',
      author: {
        name: user.name,
        avatar: user.avatar
      },
      publishDate: 'Nov 28',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400',
      tags: ['CSS', 'Web Development', 'Layout'],
      claps: 156
    }
  ];

  const aboutSections = [
    {
      title: 'About Emily',
      content: `Emily is a passionate frontend developer with over 6 years of experience building web applications. She specializes in React, TypeScript, and modern CSS, and loves sharing her knowledge through writing and speaking at conferences.
      
      When she's not coding, Emily enjoys hiking, photography, and exploring new coffee shops in San Francisco.`
    },
    {
      title: 'Experience',
      content: `Senior Frontend Developer at TechCorp (2022 - Present)
      Frontend Developer at StartupXYZ (2020 - 2022)
      Junior Developer at WebAgency (2018 - 2020)`
    },
    {
      title: 'Skills',
      content: `JavaScript, TypeScript, React, Vue.js, CSS/Sass, Node.js, GraphQL, Testing (Jest, Cypress), UI/UX Design, Accessibility`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            
            {/* User Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">{user.name}</h1>
                  <p className="text-gray-600 mb-3">{user.username}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      isFollowing
                        ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                  
                  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Share className="w-5 h-5" />
                  </button>
                  
                  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{user.bio}</p>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{user.joined}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <LinkIcon className="w-4 h-4" />
                  <a href={`https://${user.website}`} className="text-green-600 hover:text-green-700">
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-8 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.followers}</div>
              <div className="text-sm text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.following}</div>
              <div className="text-sm text-gray-500">Following</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.stories}</div>
              <div className="text-sm text-gray-500">Stories</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-8 mb-8 border-b border-gray-200 bg-white rounded-t-lg px-8">
          <button
            onClick={() => setActiveTab('stories')}
            className={`pb-4 pt-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'stories'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-4 pt-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'about'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('lists')}
            className={`pb-4 pt-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'lists'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Lists
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-lg">
          {activeTab === 'stories' && (
            <div className="p-8">
              <div className="space-y-6">
                {userStories.map((story) => (
                  <ArticleCard key={story.id} {...story} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="p-8 space-y-8">
              {aboutSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'lists' && (
            <div className="p-8">
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No lists created yet.</p>
                <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                  Create your first list
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
