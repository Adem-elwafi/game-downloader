import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample game data - replace with actual data from your backend
const featuredGames = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    rating: 4.5,
    description: 'An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modifications.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.3WL2A794HRwvQ8xg-SToCgHaDt?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 2,
    title: 'Elden Ring',
    rating: 4.8,
    description: 'A new fantasy action RPG where you can create your own character and freely adventure in a vast world.',
    image: 'https://th.bing.com/th/id/OIP.wxaqVJ-1zCmwzXHl2KxjhQHaEK?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 3,
    title: 'God of War: Ragnarök',
    rating: 4.9,
    description: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.',
    image: 'https://th.bing.com/th/id/OIP.DI7scpWYWmRYQkjHeiNSVwHaEK?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
  }
];

const latestNews = [
  {
    id: 1,
    title: 'New DLC Announced for Cyberpunk 2077',
    summary: 'CD Projekt Red reveals exciting new content coming next month.',
    date: '2023-11-15',
    image: 'https://tse1.mm.bing.net/th/id/OIP.fkKAA6eeDLMw3UgsfwHCHgHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 2,
    title: 'Elden Ring Wins Game of the Year',
    summary: 'FromSoftware\'s masterpiece takes home the top prize at The Game Awards.',
    date: '2023-12-01',
    image: 'https://fextralife.com/wp-content/uploads/2022/12/Elden-Ring-GOTY-2022-2048x1106.jpg'
  },
  {
    id: 3,
    title: 'Upcoming Xbox Exclusive Showcase',
    summary: 'Microsoft teases new Xbox Game Studios titles for 2024.',
    date: '2023-11-20',
    image: 'https://tse4.mm.bing.net/th/id/OIP.o9Kz6CLUMt7-O_IhkD6EVwHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  }
];

const esportsTeams = [
  { id: 1, name: 'Team Liquid', game: 'Dota 2', logo: 'TL' },
  { id: 2, name: 'Fnatic', game: 'League of Legends', logo: 'FNC' },
  { id: 3, name: 'Natus Vincere', game: 'CS:GO', logo: 'NAVI' },
  { id: 4, name: 'Sentinels', game: 'Valorant', logo: 'SEN' }
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(100, 13, 95, 0.9), rgba(177, 44, 0, 0.8)), url(https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
        
      >
        <div className="container mx-auto z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Download the Best Games Instantly</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your gateway to top-rated games, esports updates, and exclusive Xbox content
          </p>
          <button onClick={() => navigate('/games')} className="bg-[var(--color-highlight)] cursor-pointer hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Explore Games
          </button>
        </div>
      </section>

      {/* Best-Rated Games */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Best-Rated Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{game.title}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{game.rating}/5.0</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <button className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-hover)] text-white py-2 px-4 rounded transition-colors">
                  Download Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
          <div className="flex overflow-x-auto pb-6 space-x-4">
            {latestNews.map((news) => (
              <div key={news.id} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-40 object-cover rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x225?text=News+Image';
                  }}
                />
                <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.summary}</p>
                <div className="text-sm text-gray-500">{news.date}</div>
                <a href="#" className="text-[var(--color-accent)] hover:underline">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esports Spotlight */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Esports Spotlight</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {esportsTeams.map((team) => (
            <div key={team.id} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                {team.logo}
              </div>
              <h3 className="text-xl font-bold">{team.name}</h3>
              <p className="text-gray-600">{team.game}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Support */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our dedicated support team is available 24/7 to assist you with any questions or issues.
          </p>
          <button className="bg-white text-[var(--color-primary)] hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Contact Support
          </button>
        </div>
      </section>

      {/* Xbox Gamepress Feature */}
      <section className="container mx-auto px-4">
        <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Xbox Game Pass</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Get access to over 100 high-quality games with Xbox Game Pass. New games added regularly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[var(--color-highlight)] hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors">
              Join Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
