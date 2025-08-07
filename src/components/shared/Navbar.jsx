import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black">
      <div className="flex items-center space-x-2">
        {/* Logo */}
    
          <img src="/image/footer2.png" alt="not found" className="h-7" />
      </div>
      <ul className="flex space-x-8 text-sm">
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
      <a
        href="#contact"
        className="bg-purple-500 hover:bg-purple-600 rounded py-2 px-5 text-white text-sm transition"
      >
        Contact Me
      </a>
    </nav>
  );
}
