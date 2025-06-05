
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Settings, MoreHorizontal } from 'lucide-react';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const handlePublish = () => {
    console.log('Publishing article:', { title, content });
    // In a real app, this would send data to an API
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold text-black">Medium</h1>
              <span className="text-sm text-gray-500">Draft</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPreview(!isPreview)}
                className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Preview</span>
              </button>
              
              <button className="text-gray-600 hover:text-black transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              
              <button className="text-gray-600 hover:text-black transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
              
              <button
                onClick={handlePublish}
                disabled={!title.trim() || !content.trim()}
                className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Editor */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!isPreview ? (
          <div className="space-y-8">
            {/* Title Input */}
            <div>
              <textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full text-4xl md:text-5xl font-bold text-gray-900 placeholder-gray-400 border-none outline-none resize-none leading-tight"
                rows={2}
                style={{ minHeight: '120px' }}
              />
            </div>

            {/* Content Editor */}
            <div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tell your story..."
                className="w-full text-lg text-gray-800 placeholder-gray-400 border-none outline-none resize-none leading-relaxed"
                rows={20}
                style={{ minHeight: '500px' }}
              />
            </div>

            {/* Editor Toolbar */}
            <div className="flex items-center space-x-4 py-4 border-t border-gray-200">
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-black transition-colors">
                Add image
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-black transition-colors">
                Add video
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-black transition-colors">
                Add code block
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-black transition-colors">
                Add quote
              </button>
            </div>
          </div>
        ) : (
          // Preview Mode
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-8">
              <h2 className="text-sm font-semibold text-gray-600 mb-4">Preview</h2>
              
              {title && (
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {title}
                </h1>
              )}
              
              {content && (
                <div className="prose prose-lg max-w-none">
                  {content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-lg text-gray-800 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              )}
              
              {!title && !content && (
                <p className="text-gray-400 text-lg">Start writing to see your preview...</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Publishing Options Modal would go here */}
    </div>
  );
};

export default WritePage;
