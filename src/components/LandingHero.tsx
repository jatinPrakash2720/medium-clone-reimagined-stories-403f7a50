
import React from 'react';
import { ArrowRight, Edit3, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingHero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Where good ideas
            <br />
            <span className="text-blue-600">find you</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Read, write and connect with millions of readers and writers worldwide. 
            Share your story with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/write"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 group"
            >
              <span>Start writing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/topics"
              className="border-2 border-gray-200 text-black px-8 py-4 rounded-full text-lg font-medium hover:border-gray-300 transition-colors"
            >
              Explore topics
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Everything you need to share your story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools you need to write, publish, and grow your audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Beautiful Editor</h3>
              <p className="text-gray-600 leading-relaxed">
                Write with a distraction-free editor that adapts to your needs. 
                Format your content beautifully with our intuitive tools.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Global Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with millions of readers and writers from around the world. 
                Build your following and engage with your audience.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Discover Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore thousands of stories across every topic imaginable. 
                Find your next favorite read with our personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-16">
            Join millions of people using Medium
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-black mb-2">100M+</div>
              <div className="text-xl text-gray-600">Monthly readers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-black mb-2">2M+</div>
              <div className="text-xl text-gray-600">Writers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-black mb-2">10M+</div>
              <div className="text-xl text-gray-600">Stories published</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Start your writing journey today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of writers and readers. Share your unique perspective with the world.
          </p>
          <Link
            to="/write"
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 group"
          >
            <span>Get started for free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
