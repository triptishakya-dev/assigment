import React from "react";

const AboutMe = ({
  name = "Tripti Shakya",
  testimonial = "I'm Tripti Shakya, a passionate full-stack developer with expertise in React.js, Next.js, Node.js, and MongoDB. I build scalable web applications including e-commerce platforms, chat apps, and donation websites. With a legal background and strong technical skills, I contribute to open-source projects and actively engage in tech communities.",
  showShield = true,
}) => {
  return (
    <div className="w-full mx-auto ">
      <div
        className="relative bg-gradient-to-r from-orange-400 via-red-500 to-purple-400
       rounded-lg  py-16 text-white text-center shadow-lg flex flex-col justify-center items-center"
      >
        {/* Name */}
        <h2 className="text-3xl font-bold mb-6">{name}</h2>

        {/* Testimonial Text */}
        <p className="text-xl leading-relaxed mb-8 font-medium max-w-3xl mx-auto">
          "{testimonial}"
        </p>
        <img src="/icon/icons8-safety-50.png" alt="" className="text-white" />
      </div>
    </div>
  );
};

export default AboutMe;
