import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    title: 'Tripti Shakya - Full Stack Web Developer | React.js, Next.js, Node.js',
  description: "I'm Tripti Shakya, a passionate full-stack developer with expertise in React.js, Next.js, Node.js, and MongoDB. I build scalable web applications including e-commerce platforms, chat apps, and donation websites. With a legal background and strong technical skills, I'm committed to creating user-centric solutions that make a meaningful impact.",
  keywords: 'Tripti Shakya, Full Stack Developer, React.js, Next.js, Node.js, MongoDB, Web Developer, E-commerce, Portfolio, MERN Stack',
  authors: [{ name: 'Tripti Shakya' }],
  creator: 'Tripti Shakya',
  publisher: 'Tripti Shakya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} font-poppins antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
