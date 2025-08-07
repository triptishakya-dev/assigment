  import {  Layers, Server, MonitorCheck, Code2 } from 'lucide-react';


  export const portfolioItems = [
  {
    id: 1,
    title: "Blog Website with Admin Panel",
    description: "Built a full-featured blog platform with admin panel, SEO optimization (sitemap.xml), and JWT-based authentication. Implemented post creation/editing, search functionality, and dynamic routing with smooth UI animations using Framer Motion.",
    tags: ["Next.js", "MongoDB", "Tailwind", "JWT", "SEO"],
    image: "/blog-website.jpg",
    demoUrl: "https://vercel.com/triptishakya-devs-projects/blog-website-with-admin-panel",
    githubUrl: ":https://github.com/triptishakya-dev/blog_website",
  },
  {
    id: 2,
    title: "E-commerce Platform + Admin Panel",
    description: "Developed a complete e-commerce platform with product/order management and admin dashboard. Utilized Shadcn and Framer Motion for animated UI and responsive layouts across both user and admin interfaces.",
    tags: ["Next.js", "MongoDB", "Shadcn", "Razorpay", "E-commerce"],
    image: "/ecommerce-platform.jpg",
    demoUrl: "https://e-commerce-web-tawny.vercel.app",
    githubUrl: "https://github.com/triptishakya-dev/e-commerce-web",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Implemented a real-time chat application using Socket.io with instant messaging, typing indicators, and user presence tracking. Created a responsive UI with Tailwind CSS and secured all routes via JWT authentication.",
    tags: ["Next.js", "Socket.io", "Node.js", "Real-time", "JWT"],
    image: "/chat-app.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "BringSmile Donation Platform + Razorpay",
    description: "A comprehensive donation platform featuring Razorpay payment integration, dynamic donor forms, and an admin dashboard with donation management capabilities including search and filtering. Includes automated email notifications via Resend API for enhanced donor engagement.",
    tags: ["Next.js", "Razorpay", "MongoDB", "Admin Panel", "Tailwind"],
    image: "/donation-website.jpg",
    demoUrl: " https://bring-smile-d8d4.vercel.app",
    githubUrl: "https://github.com/triptishakya-dev/bring-smile",
  },
  {
    id: 5,
    title: "Vercel Clone",
    description: "Built and published several NPM packages, contributing reusable components and tools to the JavaScript/React ecosystem for developers worldwide.",
    tags: ["NPM", "React", "JavaScript", "Open Source", "Components"],
    image: "/npm-packages.jpg",
    demoUrl: "https://www.npmjs.com/~yourusername",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Portfolio Website with Next.js",
    description: "Personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies featuring responsive design, smooth animations, and optimized performance.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Portfolio", "Responsive"],
    image: "/portfolio-website.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Annimated Website",
    description: "Technical blog platform focused on web development, performance optimization, and best practices. Features content creation capabilities and knowledge sharing within the tech community.",
    tags: ["Next.js", "MDX", "Blog", "SEO", "Performance"],
    image: "/tech-blog.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
];




export const skills = [
  {
    id: 1,
    title: "Frontend Development",
    percentage: 95,
    description: "Building user interfaces and client-side applications using React.js, focusing on component-based architecture, state management, hooks, and responsive design.",
    icon: Code2,
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    title: "Backend Development", 
    percentage: 92,
    description: "Developing server-side applications and APIs using Node.js, Express.js, and handling database operations, authentication, and server logic.",
    icon: MonitorCheck,
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: 3,
    title: "Full Stack Development",
    percentage: 88,
    description: "Combining frontend and backend skills to build complete applications, managing end-to-end development including API design, server logic, and user interfaces.",
    icon: Server,
    color: "from-green-400 to-emerald-400",
  },
  {
    id: 4,
    title: "Database Management",
    percentage: 89,
    description: "Designing, implementing, and managing databases, optimizing data storage, retrieval, and ensuring data integrity and security.",
    icon: Layers,
    color: "from-indigo-400 to-purple-400",
  },
];

  