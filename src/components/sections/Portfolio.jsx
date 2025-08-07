"use client"
import React, { useState } from 'react';
import { ExternalLink, Eye, X, Github, Globe } from 'lucide-react';

export default function PortfolioEnhanced() {
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
  {
    id: 1,
    title: "Blog Website with Admin Panel",
    description: "Full-featured blog platform with admin panel, SEO optimization (sitemap.xml), and JWT-based authentication. Features post creation/editing, search functionality, and dynamic routing with smooth UI animations.",
    tags: ["Next.js", "MongoDB", "Tailwind", "JWT", "SEO"],
    image: "/blog-website.jpg",
    demoUrl: "#", // Add your actual live demo URL
    githubUrl: "#", // Add your actual GitHub repository URL
  },
  {
    id: 2,
    title: "E-commerce Platform with Razorpay",
    description: "Complete e-commerce platform with product/order management, secure payments via Razorpay, and comprehensive admin dashboard. Built with responsive layouts and animated UI components.",
    tags: ["Next.js", "MongoDB", "Shadcn", "Razorpay", "E-commerce"],
    image: "/ecommerce-platform.jpg",
    demoUrl: "#", // Add your actual live demo URL
    githubUrl: "#", // Add your actual GitHub repository URL
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Real-time chat application using Socket.io with instant messaging, typing indicators, and user presence tracking. Features responsive UI with Tailwind CSS and JWT authentication.",
    tags: ["Next.js", "Socket.io", "Node.js", "Real-time", "JWT"],
    image: "/chat-app.jpg",
    demoUrl: "#", // Add your actual live demo URL
    githubUrl: "#", // Add your actual GitHub repository URL
  },
  {
    id: 4,
    title: "Donation Platform",
    description: "Full-featured donation platform with dynamic donor forms, Razorpay payment gateway, and admin dashboard. Includes automated thank-you emails via Resend API and comprehensive donor management.",
    tags: ["Next.js", "Razorpay", "MongoDB", "Admin Panel", "Tailwind"],
    image: "/donation-website.jpg",
    demoUrl: "#", // Add your actual live demo URL
    githubUrl: "#", // Add your actual GitHub repository URL
  },
  {
    id: 5,
    title: "NPM Package Collection",
    description: "Collection of reusable React components and JavaScript utilities published on NPM. Contributing tools and components to the JavaScript/React ecosystem for developers worldwide.",
    tags: ["NPM", "React", "JavaScript", "Open Source", "Components"],
    image: "/npm-packages.jpg",
    demoUrl: "https://www.npmjs.com/~yourusername", // Add your NPM profile
    githubUrl: "#", // Add your GitHub repository for packages
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies featuring responsive design, smooth animations, and optimized performance.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Portfolio", "Responsive"],
    image: "/portfolio-website.jpg",
    demoUrl: "#", // Add your portfolio URL
    githubUrl: "#", // Add your portfolio GitHub repository
  },
  {
    id: 7,
    title: "Tech Blog Platform",
    description: "Technical blog platform focused on web development, performance optimization, and best practices. Features markdown support, syntax highlighting, and SEO optimization.",
    tags: ["Next.js", "MDX", "Blog", "SEO", "Performance"],
    image: "/tech-blog.jpg",
    demoUrl: "#", // Add your blog URL
    githubUrl: "#", // Add your blog GitHub repository
  },
  {
    id: 8,
    title: "API Integration Dashboard",
    description: "Dashboard application demonstrating various API integrations including REST APIs, authentication systems, and data visualization. Built with modern React patterns and responsive design.",
    tags: ["React.js", "REST API", "Dashboard", "Data Visualization", "JWT"],
    image: "/api-dashboard.jpg",
    demoUrl: "#", // Add your demo URL
    githubUrl: "#", // Add your GitHub
}]

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="container mx-auto">
        {/* Portfolio Header */}
        <div className="mb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            PORTFOLIO
          </h1>
          <p className="text-gray-400 text-lg">
            Showcasing my latest work and projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-purple-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openModal(item)}
                      className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="View details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Product Detail Button */}
                <button 
                  onClick={() => openModal(item)}
                  className="w-full bg-neutral-800 hover:bg-purple-600 text-white text-sm py-3 px-4 rounded-lg transition-all duration-300 font-medium"
                >
                  View Product Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
            <div className="bg-neutral-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg mb-6">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover rounded-lg mix-blend-overlay opacity-80"
                    />
                  </div>
                  
                  <h2 className="text-white text-2xl font-bold mb-4">
                    {selectedItem.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6">
                    {selectedItem.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={selectedItem.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={selectedItem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
