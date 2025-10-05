import React, { useState } from 'react';
import { Calendar, Clock, Users, Trophy, ArrowRight, Search, Filter, ChevronDown } from 'lucide-react';

// Sample data for tournaments
const tournaments = [
  {
    id: 1,
    title: 'Championship Series 2023',
    game: 'Valorant',
    date: '2023-12-15',
    time: '18:00',
    participants: 32,
    prize: '$100,000',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true
  },
  {
    id: 2,
    title: 'Summer Showdown',
    game: 'League of Legends',
    date: '2023-11-25',
    time: '15:30',
    participants: 16,
    prize: '$75,000',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    featured: true
  },
  {
    id: 3,
    title: 'Winter Clash',
    game: 'CS:GO',
    date: '2024-01-10',
    time: '20:00',
    participants: 24,
    prize: '$85,000',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false
  },
  {
    id: 4,
    title: 'Spring Invitational',
    game: 'Dota 2',
    date: '2024-03-05',
    time: '17:00',
    participants: 12,
    prize: '$120,000',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true
  },
  {
    id: 5,
    title: 'Pro League Season 4',
    game: 'Rainbow Six Siege',
    date: '2023-12-01',
    time: '19:30',
    participants: 20,
    prize: '$65,000',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    featured: false
  },
  {
    id: 6,
    title: 'World Championship',
    game: 'Fortnite',
    date: '2024-02-20',
    time: '21:00',
    participants: 100,
    prize: '$250,000',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true
  }
];

// Sample data for teams
const teams = [
  { id: 1, name: 'Team Phoenix', game: 'Valorant', logo: '🐉', wins: 24, losses: 6 },
  { id: 2, name: 'Shadow Assassins', game: 'League of Legends', logo: '🗡️', wins: 32, losses: 8 },
  { id: 3, name: 'Nova Esports', game: 'CS:GO', logo: '🌟', wins: 28, losses: 12 },
  { id: 4, name: 'Titan Gaming', game: 'Dota 2', logo: '⚡', wins: 19, losses: 11 },
  { id: 5, name: 'Apex Predators', game: 'Apex Legends', logo: '🦁', wins: 21, losses: 9 },
  { id: 6, name: 'Storm Riders', game: 'Fortnite', logo: '🌪️', wins: 26, losses: 14 }
];

// Sample data for live matches
const liveMatches = [
  {
    id: 1,
    team1: { name: 'Team Phoenix', logo: '🐉', score: 12 },
    team2: { name: 'Nova Esports', logo: '🌟', score: 10 },
    game: 'Valorant',
    event: 'Championship Series',
    time: 'LIVE',
    bestOf: 'BO3',
    viewers: '45.2K'
  },
  {
    id: 2,
    team1: { name: 'Shadow Assassins', logo: '🗡️', score: 1 },
    team2: { name: 'Titan Gaming', logo: '⚡', score: 1 },
    game: 'League of Legends',
    event: 'Summer Showdown',
    time: 'LIVE',
    bestOf: 'BO5',
    viewers: '78.5K'
  },
  {
    id: 3,
    team1: { name: 'Apex Predators', logo: '🦁', score: 0 },
    team2: { name: 'Storm Riders', logo: '🌪️', score: 0 },
    game: 'Apex Legends',
    event: 'Pro League',
    time: 'UPCOMING',
    bestOf: 'BO5',
    viewers: '32.1K'
  }
];

export default function Esports() {
  const [activeTab, setActiveTab] = useState('tournaments');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState('All Games');
  const [showFilters, setShowFilters] = useState(false);

  const games = ['All Games', ...new Set(tournaments.map(t => t.game))];

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        tournament.game.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGame = selectedGame === 'All Games' || tournament.game === selectedGame;
    return matchesSearch && matchesGame;
  });

  const featuredTournaments = filteredTournaments.filter(t => t.featured);
  const upcomingTournaments = filteredTournaments.filter(t => new Date(t.date) > new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Esports Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Watch live tournaments, track your favorite teams, and stay updated with the latest in competitive gaming.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
              Watch Live Now
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-900/50 rounded-lg font-medium transition-colors">
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            {['tournaments', 'teams', 'matches', 'news'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search tournaments, teams, or games..."
              className="block w-full pl-10 pr-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} />
              </button>
              
              {showFilters && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Game</label>
                      <select
                        className="block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                      >
                        {games.map(game => (
                          <option key={game} value={game}>{game}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-purple-600 rounded border-gray-600 focus:ring-purple-500 bg-gray-700" />
                        <span className="ml-2 text-sm text-gray-300">Featured Only</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Calendar View
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Live Matches */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-purple-500 rounded-full mr-3"></span>
              Live Matches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveMatches.map((match) => (
                <div key={match.id} className="bg-gray-800 rounded-xl overflow-hidden border-l-4 border-purple-500">
                  <div className="p-1 bg-gradient-to-r from-purple-900/50 to-transparent">
                    <div className="flex justify-between items-center px-4 py-1">
                      <span className="text-xs font-medium text-purple-300">{match.event}</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-xs font-medium text-red-400">{match.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs text-gray-400">{match.game}</span>
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{match.bestOf}</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{match.team1.logo}</span>
                          <span className="font-medium">{match.team1.name}</span>
                        </div>
                        <span className="text-xl font-bold">{match.team1.score}</span>
                      </div>
                      
                      <div className="h-px bg-gray-700"></div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{match.team2.logo}</span>
                          <span className="font-medium">{match.team2.name}</span>
                        </div>
                        <span className="text-xl font-bold">{match.team2.score}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-700 flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="h-4 w-4 mr-1" />
                        {match.viewers} watching
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                        Watch <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Tournaments */}
          {featuredTournaments.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Trophy className="h-6 w-6 text-yellow-400 mr-2" />
                Featured Tournaments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTournaments.slice(0, 3).map((tournament) => (
                  <div key={tournament.id} className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <div className="relative h-40">
                      <img 
                        src={tournament.image} 
                        alt={tournament.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/800x400?text=Tournament';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                        FEATURED
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
                          {tournament.game}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {tournament.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(tournament.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {tournament.time}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {tournament.participants} teams
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                        <span className="text-yellow-400 font-bold">{tournament.prize}</span>
                        <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                          View Details <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Upcoming Tournaments */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Calendar className="h-6 w-6 text-blue-400 mr-2" />
                Upcoming Tournaments
              </h2>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Tournament
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Game
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Prize Pool
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Teams
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {upcomingTournaments.slice(0, 5).map((tournament) => (
                      <tr key={tournament.id} className="hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                              <Trophy className="h-5 w-5 text-yellow-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">{tournament.title}</div>
                              <div className="text-sm text-gray-400">{tournament.event || 'Official Tournament'}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{tournament.game}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">
                            {new Date(tournament.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            <span className="text-gray-500 mx-1">•</span>
                            {tournament.time}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-yellow-400 font-medium">{tournament.prize}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex -space-x-2">
                            {Array.from({ length: Math.min(4, tournament.participants) }).map((_, i) => (
                              <div key={i} className="h-8 w-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs font-medium">
                                {i === 3 && tournament.participants > 4 ? `+${tournament.participants - 3}` : i + 1}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-purple-400 hover:text-purple-300">
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Top Teams */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="h-6 w-6 text-green-400 mr-2" />
              Top Teams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team, index) => (
                <div key={team.id} className="bg-gray-800 rounded-xl p-5 hover:bg-gray-750 transition-colors">
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-xl bg-gray-700 flex items-center justify-center text-3xl mr-4">
                      {team.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold">{team.name}</h3>
                          <p className="text-sm text-gray-400">{team.game}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-400 font-bold mr-1">#{index + 1}</span>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <span>Win Rate</span>
                          <span className="text-white font-medium">
                            {Math.round((team.wins / (team.wins + team.losses)) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${(team.wins / (team.wins + team.losses)) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span>{team.wins}W</span>
                          <span>{team.losses}L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 mt-16 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Tournament</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest esports news, tournament updates, and exclusive offers delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
