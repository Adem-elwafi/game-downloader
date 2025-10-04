import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaGamepad } from 'react-icons/fa';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'New AAA Title Breaks Sales Records',
      excerpt: 'The latest open-world adventure has sold over 10 million copies in its first week, setting a new industry record.',
      date: '2025-10-02',
      readTime: '5 min read',
      category: 'releases',
      image: 'https://via.placeholder.com/400x225/1a1a2e/e94560?text=Game+Release',
    },
    {
      id: 2,
      title: 'Upcoming Console Update Announced',
      excerpt: 'Next-gen console update brings 120fps support and faster load times to all existing games.',
      date: '2025-10-01',
      readTime: '4 min read',
      category: 'hardware',
      image: 'https://via.placeholder.com/400x225/16213e/00b4d8?text=Console+Update',
    },
    {
      id: 3,
      title: 'Indie Game Wins Big at Awards',
      excerpt: 'Small studio takes home Game of the Year at the annual gaming awards ceremony.',
      date: '2025-09-30',
      readTime: '3 min read',
      category: 'awards',
      image: 'https://via.placeholder.com/400x225/0f3460/00ff9d?text=Indie+Game',
    },
    {
      id: 4,
      title: 'E-Sports Championship Finals Next Week',
      excerpt: 'Top teams from around the world compete for the $5 million prize pool in the grand finals.',
      date: '2025-09-28',
      readTime: '6 min read',
      category: 'esports',
      image: 'https://via.placeholder.com/400x225/1a1a2e/e94560?text=E-Sports',
    },
  ];

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'releases', name: 'New Releases' },
    { id: 'updates', name: 'Game Updates' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'esports', name: 'E-Sports' },
    { id: 'awards', name: 'Awards' },
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Gaming News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest gaming news, releases, and industry updates from around the world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? '!bg-blue-600 text-white'
                  : '!bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-semibold rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    {item.date}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-1" />
                    {item.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6">
              <FaGamepad className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Never Miss an Update</h2>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for weekly gaming news and exclusive content.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;