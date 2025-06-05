
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, Share, MoreHorizontal, Twitter, Facebook, Linkedin, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const ArticlePage = () => {
  const { id } = useParams();
  const [claps, setClaps] = useState(127);
  const [hasClapped, setHasClapped] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=150',
      content: 'Great article! This really helped me understand the concepts better.',
      timestamp: '2 hours ago',
      claps: 5
    },
    {
      id: 2,
      author: 'Tom Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      content: 'I\'ve been following these practices for a while now, and they definitely make a difference in code quality.',
      timestamp: '4 hours ago',
      claps: 3
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleClap = () => {
    if (!hasClapped) {
      setClaps(prev => prev + 1);
      setHasClapped(true);
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'You',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        content: newComment,
        timestamp: 'Just now',
        claps: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  // Mock article data (in a real app, this would come from an API)
  const article = {
    title: 'The Future of Web Development: What to Expect in 2024',
    subtitle: 'Exploring the latest trends, technologies, and frameworks that are shaping the future of how we build for the web.',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      bio: 'Senior Frontend Developer at TechCorp. Passionate about creating amazing web experiences.',
      followers: '2.5K'
    },
    publishDate: 'December 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
    tags: ['Web Development', 'Technology', 'JavaScript'],
    content: `
      <p>The landscape of web development is constantly evolving, and 2024 promises to bring some exciting changes that will reshape how we build for the web. From AI-powered development tools to new JavaScript frameworks, let's explore what's on the horizon.</p>

      <h2>AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development—it's becoming an integral part of our development workflow. Tools like GitHub Copilot and ChatGPT are already helping developers write code faster and more efficiently.</p>

      <p>In 2024, we can expect to see even more sophisticated AI tools that can:</p>
      <ul>
        <li>Generate entire component libraries based on design specifications</li>
        <li>Automatically optimize code for performance</li>
        <li>Suggest accessibility improvements</li>
        <li>Debug complex issues in real-time</li>
      </ul>

      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is bringing computation closer to users, resulting in faster load times and better user experiences. Platforms like Vercel Edge Functions and Cloudflare Workers are making it easier than ever to deploy code at the edge.</p>

      <p>This shift means we need to think differently about:</p>
      <ul>
        <li>State management across distributed systems</li>
        <li>Caching strategies</li>
        <li>Database replication and synchronization</li>
      </ul>

      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (WASM) is finally reaching mainstream adoption. With better tooling and framework support, we're seeing more applications leverage WASM for performance-critical tasks.</p>

      <p>The benefits include:</p>
      <ul>
        <li>Near-native performance in the browser</li>
        <li>Ability to use languages like Rust, C++, and Go in web applications</li>
        <li>Better support for complex computations and graphics</li>
      </ul>

      <h2>New JavaScript Frameworks and Libraries</h2>
      <p>While React, Vue, and Angular continue to dominate, new frameworks are emerging that challenge traditional approaches:</p>

      <ul>
        <li><strong>Solid.js</strong> - Offers React-like syntax with better performance</li>
        <li><strong>Qwik</strong> - Focuses on instant loading and resumability</li>
        <li><strong>Fresh</strong> - A Deno-based framework with islands architecture</li>
      </ul>

      <h2>The Evolution of CSS</h2>
      <p>CSS continues to evolve with new features that make styling more powerful and intuitive:</p>

      <ul>
        <li>Container queries for responsive design</li>
        <li>CSS Grid subgrid for complex layouts</li>
        <li>New color functions and spaces</li>
        <li>Cascade layers for better specificity control</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. As these technologies mature and new ones emerge, developers will have more tools than ever to create amazing web experiences.</p>

      <p>The key is to stay curious, keep learning, and experiment with new technologies while maintaining focus on what matters most: building great products that serve users' needs.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to stories</span>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-8">
            <div className="flex items-center space-x-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{article.author.name}</h3>
                <p className="text-sm text-gray-600">{article.author.followers} followers</p>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{article.publishDate}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Social Actions */}
        <div className="flex items-center justify-between mb-8 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleClap}
              className={`flex items-center space-x-2 ${hasClapped ? 'text-green-600' : 'text-gray-600'} hover:text-green-600 transition-colors`}
            >
              <Heart className="w-5 h-5" />
              <span>{claps}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{comments.length}</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`${isBookmarked ? 'text-green-600' : 'text-gray-600'} hover:text-green-600 transition-colors`}
            >
              <Bookmark className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              <button className="text-gray-600 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
            
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Image */}
        {article.image && (
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="leading-relaxed text-gray-800"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="border border-gray-200 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.author.name}</h3>
              <p className="text-gray-600 mb-4">{article.author.bio}</p>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors">
                  Follow
                </button>
                <span className="text-sm text-gray-500">{article.author.followers} followers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Responses ({comments.length})
          </h3>

          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="mb-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="What are your thoughts?"
              className="w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows={4}
            />
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Respond
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                      <span className="text-sm text-gray-500">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{comment.content}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{comment.claps}</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
