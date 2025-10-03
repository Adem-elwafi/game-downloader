// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Games', path: '/games' },
    { name: 'News', path: '/news' },
    { name: 'Esports', path: '/esports' },
    { name: 'Support', path: '/support' },
    { name: 'Xbox Gamepress', path: '/xboxgamepress' },
  ];

  return (
    <nav className="bg-[var(--color-primary)] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          <span className="text-[var(--color-highlight)]">Games</span>
          <span className="text-white">Downloader</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <div key={link.name} className="group">
              <Link
                to={link.path}
                className="relative px-2 py-1 font-medium 
                          text-white hover:text-[var(--color-hover)] 
                          transition duration-200"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 
                             bg-[var(--color-hover)] transition-all duration-300 
                             group-hover:w-full"></span>
              </Link>
            </div>
          ))}
          <Link
            to="/download"
            className="ml-4 px-5 py-2 rounded-md font-semibold 
                      bg-[var(--color-highlight)] text-[var(--color-primary)] 
                      shadow-md hover:bg-[var(--color-hover)] hover:text-white 
                      transition duration-300 transform hover:scale-105"
          >
            Download
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#640D5F]">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:text-[#EB5B00] transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/download"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-md font-semibold 
              bg-[#FFCC00] text-[#640D5F] shadow-md 
              hover:bg-[#EB5B00] hover:text-white 
              transition duration-300 transform hover:scale-105"
          >
            Download
          </Link>
        </div>
      )}
    </nav>
  );
}