"use client"
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-black relative">
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <img src="/image/footer2.png" alt="not found" className="h-7" />
      </div>

      {/* Desktop Navigation - Hidden on mobile and tablet */}
      <ul className="hidden lg:flex space-x-8 text-sm">
        <li>
          <a href="#home" className="text-white hover:text-purple-300 transition">Home</a>
        </li>
        <li>
          <a href="#portfolio" className="text-white hover:text-purple-300 transition">Portfolio</a>
        </li>
        <li>
          <a href="#skills" className="text-white hover:text-purple-300 transition">Skills</a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-purple-300 transition">About Me</a>
        </li>
      </ul>

      {/* Desktop Contact Button - Hidden on mobile and tablet */}
      <a
        href="#contact"
        className="hidden lg:block bg-purple-500 hover:bg-purple-600 rounded py-2 px-5 text-white text-sm transition"
      >
        Contact Me
      </a>

      {/* Mobile Menu Button - Visible on mobile and tablet */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu - Visible when toggled */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 lg:hidden">
          <ul className="flex flex-col py-4">
            <li>
              <a
                href="#home"
                className="block px-8 py-3 text-white hover:text-purple-300 hover:bg-gray-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block px-8 py-3 text-white hover:text-purple-300 hover:bg-gray-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block px-8 py-3 text-white hover:text-purple-300 hover:bg-gray-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-8 py-3 text-white hover:text-purple-300 hover:bg-gray-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </a>
            </li>
            <li className="px-8 py-3">
              <a
                href="#contact"
                className="block bg-purple-500 hover:bg-purple-600 rounded py-2 px-5 text-white text-sm transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
