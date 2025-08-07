import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black min-h-screen flex flex-col justify-end">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Main Footer Card */}
        <div className="relative mb-8">
          <div className=" container mx-auto bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20,20 Q40,10 60,20 T100,20" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M10,40 Q30,30 50,40 T90,40" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M15,60 Q35,50 55,60 T95,60" stroke="white" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
              {/* Image Section */}
              <div className="flex-shrink-0 order-1 lg:order-none">
                <div className="relative group">
                  <div className="w-36 h-28 sm:w-44 sm:h-32 lg:w-52 lg:h-36 bg-white rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/image/footer.png" 
                      alt="Modern workspace with laptop showing design work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating elements around image */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full opacity-80"></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-none">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4">
                  Thanks for visit my website
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl">
                  If you have any questions you can write me to any of my social networks, I am sure I will answer you.
                </p>
              </div>
              
              {/* Decorative circles */}
              <div className="hidden lg:block order-3">
                <div className="relative">
                  <div className="w-20 h-20 border-2 border-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-3 left-3 w-14 h-14 border border-white/30 rounded-full"></div>
                  <div className="absolute top-6 left-6 w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-lg">W</span>
            </div>
            <img src="/image/footer2.png" alt="not found" />
            <span className="text-white font-semibold text-xl">Web</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 lg:gap-12">
            {['Home', 'Portfolio', 'Skills', 'About Me'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden gap-4">
            {['Home', 'Portfolio', 'Skills', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
