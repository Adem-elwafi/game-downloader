import React, { useState } from 'react';

// Sample game data - replace with actual data from your backend
const allGames = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    developer: 'CD Projekt Red',
    price: 59.99,
    rating: 4.5,
    category: 'RPG',
    image: 'https://tse3.mm.bing.net/th/id/OIP.3WL2A794HRwvQ8xg-SToCgHaDt?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    featured: true
  },
  {
    id: 2,
    title: 'Elden Ring',
    developer: 'FromSoftware',
    price: 59.99,
    rating: 4.8,
    category: 'Action RPG',
    image: 'https://th.bing.com/th/id/OIP.wxaqVJ-1zCmwzXHl2KxjhQHaEK?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    featured: true
  },
  {
    id: 3,
    title: 'God of War: Ragnarök',
    developer: 'Santa Monica Studio',
    price: 69.99,
    rating: 4.9,
    category: 'Action-Adventure',
    image: 'https://tse1.mm.bing.net/th/id/OIP.fkKAA6eeDLMw3UgsfwHCHgHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: ['PlayStation'],
    featured: true
  },
  {
    id: 4,
    title: 'Hogwarts Legacy',
    developer: 'Avalanche Software',
    price: 59.99,
    rating: 4.7,
    category: 'Action RPG',
    image: 'https://th.bing.com/th/id/OIP.zu_wl30wxFcXi4JgS5S_dQHaEK?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    featured: false
  },
  {
    id: 5,
    title: 'Starfield',
    developer: 'Bethesda Game Studios',
    price: 69.99,
    rating: 4.3,
    category: 'Action RPG',
    image: 'https://cdn.wccftech.com/wp-content/uploads/2023/12/starfield-art-HD-scaled.jpg',
    platforms: ['PC', 'Xbox'],
    featured: true
  },
  {
    id: 6,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    developer: 'Nintendo EPD',
    price: 59.99,
    rating: 4.9,
    category: 'Action-Adventure',
    image: 'https://th.bing.com/th/id/R.def196325cbf271a9e6c2890a967c62b?rik=xt2m5D2G8r2Wdg&pid=ImgRaw&r=0',
    platforms: ['Nintendo Switch'],
    featured: true
  },
];

const categories = ['All', 'Action', 'Adventure', 'RPG', 'Strategy', 'Sports', 'Simulation'];
const platforms = ['All', 'PC', 'PlayStation', 'Xbox', 'Nintendo Switch'];

export default function Games() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        game.developer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || game.category.includes(selectedCategory);
    const matchesPlatform = selectedPlatform === 'All' || game.platforms.includes(selectedPlatform);
    
    return matchesSearch && matchesCategory && matchesPlatform;
  });

  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    // Default: featured first, then by title
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Game Library
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover and download the latest and greatest games across all platforms.
          Your next gaming adventure starts here.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <select
              className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      {sortedGames.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedGames.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x225?text=Game+Image';
                  }}
                />
                {game.featured && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                    FEATURED
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{game.title}</h3>
                  <div className="flex items-center bg-gray-700 px-2 py-1 rounded">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{game.rating}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{game.developer}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.platforms.map(platform => (
                    <span key={platform} className="px-2 py-1 bg-gray-700 text-xs rounded">
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${game.price.toFixed(2)}</span>
                  <button className="!bg-[#8b5cf6] hover:!bg-[#7c3aed] px-4 py-2 text-white rounded-lg transition-colors font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">No games found matching your criteria.</p>
          <button 
            className="mt-4 text-purple-400 hover:text-purple-300"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedPlatform('All');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
