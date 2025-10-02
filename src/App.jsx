import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import News from './pages/News.jsx';
import Esports from './pages/Esports.jsx';
import Support from './pages/Support.jsx';
import XboxGamepress from './pages/XboxGamepress.jsx';
import Login from './pages/Login.jsx';
import Download from './pages/Download.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container flex-grow mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/support" element={<Support />} />
            <Route path="/xboxgamepress" element={<XboxGamepress />} />
            <Route path="/login" element={<Login />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </main>
      </div>
    </Router>
      )
}

export default App
