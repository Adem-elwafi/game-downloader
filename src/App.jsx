import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import News from './pages/News.jsx';
import Esports from './pages/EsportsNew.jsx';
import SupportNew from './pages/SupportNew.jsx';
import XboxGamepress from './pages/XboxGamepress.jsx';
import LoginNew from './pages/LoginNew.jsx';
import DownloadNew from './pages/DownloadNew.jsx';
import Games from './pages/Games.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container flex-grow mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/news" element={<News />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/support" element={<SupportNew />} />
            <Route path="/xboxgamepress" element={<XboxGamepress />} />
            <Route path="/login" element={<LoginNew />} />
            <Route path="/download" element={<DownloadNew />} />
            {/* Add a catch-all route for 404 pages */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
