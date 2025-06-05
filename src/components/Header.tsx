
import React, { useState } from 'react';
import { Search, Edit, Bell, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-black">Medium</h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/topics" className="text-gray-600 hover:text-black transition-colors">
                Topics
              </Link>
              <Link to="/following" className="text-gray-600 hover:text-black transition-colors">
                Following
              </Link>
              <Link to="/recommended" className="text-gray-600 hover:text-black transition-colors">
                Recommended
              </Link>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/write"
              className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            >
              <Edit className="w-4 h-4" />
              <span>Write</span>
            </Link>
            
            <button className="hidden md:block text-gray-600 hover:text-black transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            
            <div className="hidden md:block w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-black transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Medium"
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm"
              />
            </div>
            <nav className="space-y-2">
              <Link to="/topics" className="block py-2 text-gray-600">Topics</Link>
              <Link to="/following" className="block py-2 text-gray-600">Following</Link>
              <Link to="/recommended" className="block py-2 text-gray-600">Recommended</Link>
              <Link to="/write" className="block py-2 text-gray-600">Write</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
