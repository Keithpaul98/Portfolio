import {
  isRouteErrorResponse,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useLocation,
  useRouteError,
  useNavigation,
} from "react-router";

import type { Route as RouteType } from "./+types/root";
import "./app.css";
import "./styles/animations.css";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import { useState, useEffect, createContext, useContext } from 'react';

// Loading Context
const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: (loading: boolean) => {},
});

export const useLoading = () => useContext(LoadingContext);

// Loading Spinner Component
function LoadingSpinner({ size = "md", className = "" }: { size?: "sm" | "md" | "lg", className?: string }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 border-2 border-gray-600 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-blue-400 border-r-purple-400 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

// Page Loading Overlay
function PageLoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-4">
          <LoadingSpinner size="lg" />
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-2">Loading</h3>
            <p className="text-gray-400 text-sm">Please wait while we prepare your content...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Page Transition Wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
}

export const links: RouteType.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  // Favicon with strong cache busting
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?t=" + new Date().getTime() },
  { rel: "shortcut icon", href: "/favicon.svg?t=" + new Date().getTime() },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.svg?t=" + new Date().getTime() },
  // Additional favicon formats for better browser support
  { rel: "icon", sizes: "16x16", type: "image/x-icon", href: "/favicon.ico?v=" + Date.now() },
  { rel: "icon", sizes: "32x32", type: "image/x-icon", href: "/favicon.ico?v=" + Date.now() },
];

// Navigation component
function Navigation() {
  const location = useLocation();
  const navigation = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsLoading } = useLoading();
  
  // Handle navigation loading states
  useEffect(() => {
    setIsLoading(navigation.state === "loading");
  }, [navigation.state, setIsLoading]);

  const isActive = (path: string) => {
    if (location.pathname === path) {
      return "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400";
    }
    return "text-gray-300 hover:text-white";
  };

  const isActiveBackground = (path: string) => {
    return location.pathname === path ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-blue-400/30" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsLoading(true);
    closeMobileMenu();
  };

  return (
    <>
      <nav className="bg-gray-900/95 backdrop-blur-md fixed w-full z-50 shadow-xl border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Enhanced Logo */}
            <Link to="/" onClick={handleNavClick} className="flex items-center hover:opacity-80 transition-all duration-300 z-10 group">
              <img 
                src="/images/logo.png" 
                alt="Keith Paul Nkwanda - Professional Logo" 
                className="h-8 sm:h-10 w-auto filter brightness-110 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300"
              />
            </Link>
            
            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 z-10">
              <Link 
                to="/" 
                onClick={handleNavClick}
                className={`${isActive('/')} ${isActiveBackground('/')} flex items-center space-x-2 px-4 lg:px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-cyan-500/10 hover:border-blue-400/20 border border-transparent transform cursor-pointer relative z-20 group`}
              >
                <svg className="w-5 h-5 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                <span className="font-medium text-sm lg:text-base">Home</span>
              </Link>
              <Link 
                to="/projects" 
                onClick={handleNavClick}
                className={`${isActive('/projects')} ${isActiveBackground('/projects')} flex items-center space-x-2 px-4 lg:px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-cyan-500/10 hover:border-blue-400/20 border border-transparent transform cursor-pointer relative z-20 group`}
              >
                <svg className="w-5 h-5 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                <span className="font-medium text-sm lg:text-base">Projects</span>
              </Link>
              <Link 
                to="/contact" 
                onClick={handleNavClick}
                className={`${isActive('/contact')} ${isActiveBackground('/contact')} flex items-center space-x-2 px-4 lg:px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-cyan-500/10 hover:border-blue-400/20 border border-transparent transform cursor-pointer relative z-20 group`}
              >
                <svg className="w-5 h-5 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="font-medium text-sm lg:text-base">Contact</span>
              </Link>
            </div>
            
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/50 group"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-300 group-hover:bg-blue-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-300 group-hover:bg-blue-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-300 group-hover:bg-blue-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="Keith Paul Nkwanda" 
                className="h-8 w-auto filter brightness-110"
              />
            </div>
            <button
              onClick={closeMobileMenu}
              className="w-8 h-8 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 flex items-center justify-center transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 py-6">
            <div className="space-y-2 px-6">
              <Link 
                to="/" 
                onClick={handleNavClick}
                className={`${isActive('/')} ${isActiveBackground('/')} flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-cyan-500/10 hover:border-blue-400/20 border border-transparent group`}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <svg className="w-5 h-5 transition-all duration-300 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="font-medium text-base">Home</span>
                  <p className="text-sm text-gray-400 mt-0.5">Welcome & Overview</p>
                </div>
              </Link>

              <Link 
                to="/projects" 
                onClick={handleNavClick}
                className={`${isActive('/projects')} ${isActiveBackground('/projects')} flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-cyan-500/10 hover:border-blue-400/20 border border-transparent group`}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <svg className="w-5 h-5 transition-all duration-300 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="font-medium text-base">Projects</span>
                  <p className="text-sm text-gray-400 mt-0.5">Portfolio & Work</p>
                </div>
              </Link>

              <Link 
                to="/contact" 
                onClick={handleNavClick}
                className={`${isActive('/contact')} ${isActiveBackground('/contact')} flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-cyan-500/10 hover:border-blue-400/20 border border-transparent group`}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <svg className="w-5 h-5 transition-all duration-300 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="font-medium text-base">Contact</span>
                  <p className="text-sm text-gray-400 mt-0.5">Get in Touch</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-800/50">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Keith Paul Nkwanda</p>
              <p className="text-xs text-gray-500">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Scroll-to-Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-cyan-600/90 backdrop-blur-sm border border-blue-400/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Scroll to top"
    >
      {/* Progress Ring */}
      <svg className="absolute inset-0 w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2"
          strokeDasharray={`${2 * Math.PI * 20}`}
          strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
          className="transition-all duration-300"
        />
      </svg>
      
      {/* Arrow Icon */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <svg 
          className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
    </button>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="Keith Paul Nkwanda - Professional Logo" 
                className="h-12 w-auto filter brightness-110"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer & Software Engineer passionate about creating 
              diverse, reliable, and effective solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>keithpaul.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Available Worldwide (Remote)</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/keithpaul98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/keith-paul-nkwanda-49709b356/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://x.com/Keith_Paul_Nkw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                aria-label="Twitter Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Keith Paul Nkwanda. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Built with</span>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400 text-sm font-medium">React</span>
              <span className="text-gray-500">•</span>
              <span className="text-purple-400 text-sm font-medium">TypeScript</span>
              <span className="text-gray-500">•</span>
              <span className="text-cyan-400 text-sm font-medium">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Keith Paul Nkwanda - Portfolio</title>
        <meta name="description" content="Full-Stack Developer & Software Engineer specializing in React, TypeScript, and modern web technologies" />
        {/* <Meta /> - Temporarily commented out due to React 19 compatibility issue */}
        <Links />
      </head>
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
          <Navigation />
          <main className="flex-grow pt-16">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          {isLoading && <PageLoadingOverlay />}
          <ScrollToTopButton />
        </LoadingContext.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
    details = error.data?.message || "Something went wrong.";
  } else if (error instanceof Error) {
    message = error.name;
    details = error.message;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">{message}</h1>
        <p className="text-gray-300 mb-6">{details}</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
          Go Home
        </Link>
      </div>
    </div>
  );
}
