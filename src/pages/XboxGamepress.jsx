import React, { useState } from 'react';
import { Calendar, Clock, Download, ArrowRight, Search, ChevronDown, Send } from 'lucide-react';

// Sample data for press releases
const pressReleases = [
  {
    id: 1,
    title: 'Xbox Game Pass Adds 10 New Games This Month',
    date: '2023-10-15',
    excerpt: 'Discover the exciting new titles coming to Xbox Game Pass this month, including day one releases and beloved classics.',
    category: 'Game Pass',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    title: 'Xbox Series X|S Sells Over 20 Million Units Worldwide',
    date: '2023-10-10',
    excerpt: 'Microsoft announces milestone achievement for its next-generation consoles, with strong growth in key markets.',
    category: 'Hardware',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    title: 'Xbox Developer Direct Event Announced for November',
    date: '2023-10-05',
    excerpt: 'Tune in for exclusive game announcements, deep dives, and updates from Xbox Game Studios and Bethesda.',
    category: 'Events',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];

// Sample data for featured games
const featuredGames = [
  {
    id: 1,
    title: 'Starfield',
    developer: 'Bethesda Game Studios',
    releaseDate: '2023-09-06',
    genre: 'Action RPG',
    image: 'https://images.unsplash.com/photo-1691650925241-c04c4aacd22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    title: 'Forza Motorsport',
    developer: 'Turn 10 Studios',
    releaseDate: '2023-10-10',
    genre: 'Racing',
    image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
  },
  {
    id: 3,
    title: 'Halo Infinite',
    developer: '343 Industries',
    releaseDate: '2021-12-08',
    genre: 'FPS',
    image: 'https://images.unsplash.com/photo-1638909194522-7df2570a31fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
  }
];

export default function XboxGamepress() {
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Game Pass', 'Hardware', 'Events', 'Xbox Studios', 'Partnerships'];

  const filteredPressReleases = activeCategory === 'All' 
    ? pressReleases 
    : pressReleases.filter(release => release.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Xbox Gamepress</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Your source for the latest Xbox news, announcements, and press releases
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Games */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Games</h2>
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              View all <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{game.title}</h3>
                    <span className="px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded-full">{game.genre}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{game.developer}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Released: {new Date(game.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Latest News</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {filteredPressReleases.map((release) => (
              <article key={release.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <img 
                      className="h-48 w-full object-cover md:h-full" 
                      src={release.image} 
                      alt={release.title} 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full">
                        {release.category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {release.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors">
                      <a href="#" className="block">
                        {release.title}
                      </a>
                    </h3>
                    <p className="text-gray-300 mb-4">{release.excerpt}</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-200 mb-8">Subscribe to our newsletter for the latest Xbox news and updates</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-grow">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-sm text-gray-300">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}