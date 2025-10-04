import { Trophy, Users, Clock, Calendar, Award } from 'lucide-react';
import React from 'react';


export default function Esports() {
  const tournaments = [
    { id: 1, name: 'World Championship 2024', game: 'League of Legends', date: '2024-11-15', prize: '$2,000,000' },
    { id: 2, name: 'The International 2024', game: 'Dota 2', date: '2024-10-20', prize: '$3,500,000' },
    { id: 3, name: 'CS:GO Major', game: 'Counter-Strike 2', date: '2024-12-05', prize: '$1,500,000' },
  ];

  const teams = [
    { id: 1, name: 'Team Liquid', game: 'Multiple', logo: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Fnatic', game: 'League of Legends', logo: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Natus Vincere', game: 'CS:GO', logo: 'https://via.placeholder.com/50' },
  ];

  const highlights = [
    { id: 1, title: 'EPIC 1v5 Clutch', game: 'Valorant', views: '1.2M', duration: '2:45' },
    { id: 2, title: 'Tournament Finals', game: 'Rocket League', views: '856K', duration: '15:22' },
    { id: 3, title: 'Pro Player Montage', game: 'Apex Legends', views: '2.1M', duration: '4:30' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Esports Hub
          </h1>
          <p className="text-xl text-gray-300">Your ultimate destination for competitive gaming</p>
        </header>

        {/* Upcoming Tournaments */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Trophy className="w-8 h-8 mr-2 text-yellow-400" />
            <h2 className="text-3xl font-bold">Upcoming Tournaments</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{tournament.name}</h3>
                    <p className="text-gray-400">{tournament.game}</p>
                  </div>
                  <div className="text-yellow-400">
                    <Calendar className="inline mr-1" size={18} />
                    {new Date(tournament.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">{tournament.prize}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Top Teams */}
          <section>
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 mr-2 text-blue-400" />
              <h2 className="text-3xl font-bold">Top Teams</h2>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              {teams.map((team, index) => (
                <div key={team.id} className="flex items-center py-3 border-b border-gray-700 last:border-0">
                  <span className="text-gray-400 w-6 text-center">{index + 1}</span>
                  <img src={team.logo} alt={team.name} className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <h3 className="font-medium">{team.name}</h3>
                    <p className="text-sm text-gray-400">{team.game}</p>
                  </div>
                  <button className="ml-auto text-sm text-blue-400 hover:text-blue-300">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Latest Highlights */}
          <section>
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 mr-2 text-red-400" />
              <h2 className="text-3xl font-bold">Latest Highlights</h2>
            </div>
            <div className="space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight.id} className="bg-gray-800 rounded-lg overflow-hidden flex">
                  <div className="w-1/3 bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-60 rounded-full p-2">
                        <Clock className="w-5 h-5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-1.5 py-0.5 rounded text-xs">
                      {highlight.duration}
                    </span>
                  </div>
                  <div className="p-4 w-2/3">
                    <h3 className="font-medium line-clamp-2">{highlight.title}</h3>
                    <p className="text-sm text-gray-400">{highlight.game}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-400">
                      <span>{highlight.views} views</span>
                      <button className="ml-auto text-blue-400 hover:text-blue-300">
                        Watch
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}