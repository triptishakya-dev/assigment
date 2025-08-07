import React from "react";

const AboutMe = ({
  name = "Tripti Shakya",
testimonial = "I'm Tripti Shakya, a passionate full-stack developer with expertise in React.js, Next.js, Node.js, and MongoDB. I build scalable web applications including e-commerce platforms, chat apps, and donation websites. With a legal background and strong technical skills, I'm committed to creating user-centric solutions that make a meaningful impact.",
  showShield = true,
}) => {
  return (
    <div className="w-full mx-auto" name="aboutMe">
      <div className="relative bg-gradient-to-r from-orange-400 via-red-500 to-purple-400 py-8 sm:py-12 md:py-16 text-white text-center shadow-lg flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        {/* Name */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          {name}
        </h2>

        {/* Testimonial Text */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-medium max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto">
          "{testimonial}"
        </p>
        
        {/* Shield Icon */}
        {showShield && (
          <img 
            src="/icon/icons8-safety-50.png" 
            alt="Safety shield icon" 
            className="w-8 h-8 md:w-12 md:h-12" 
          />
        )}
      </div>
    </div>
  );
};

export default AboutMe;
