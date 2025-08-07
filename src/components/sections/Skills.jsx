"use client"
import React, { useState, useEffect, useRef } from 'react';
import { skills } from '@/constant';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);



  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to create SVG circle path
  const createCirclePath = (percentage, animate = false) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = animate 
      ? circumference - (percentage / 100) * circumference 
      : circumference;
    
    return {
      strokeDasharray,
      strokeDashoffset,
    };
  };

  return (
    <div ref={sectionRef} className=" bg-black py-16 px-4" name="skills">
      <div className="container mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const circleProps = createCirclePath(skill.percentage, isVisible);
            return (
              <div
                key={skill.id}
                className={`bg-neutral-900 border border-neutral-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Circular Progress */}
                  <div className="relative flex-shrink-0">
                    <svg
                      className="w-28 h-28 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-neutral-800"
                      />
                      
                      {/* Progress Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke={`url(#gradient-${skill.id})`}
                        strokeWidth="6"
                        fill="transparent"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: circleProps.strokeDasharray,
                          strokeDashoffset: circleProps.strokeDashoffset,
                          transition: 'stroke-dashoffset 2s ease-out',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                      
                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient id={`gradient-${skill.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f472b6" />
                          <stop offset="50%" stopColor="#fb923c" />
                          <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Percentage Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {isVisible ? skill.percentage : 0}%
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <skill.icon className="w-7 h-7 text-orange-400" />
                      <h3 className="text-white text-2xl font-bold">
                        {skill.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
