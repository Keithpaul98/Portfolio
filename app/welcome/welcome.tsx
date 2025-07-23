import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 pb-4">
        <div className="flex-1 flex flex-col items-center gap-12 min-h-0 max-w-6xl mx-auto px-4">
          
          {/* Hero Section */}
          <header className="flex flex-col items-center gap-8 text-center">
            {/* Name with gradient text */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
                Keith Paul Nkwanda
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Professional title */}
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-up">
              Full-Stack Developer & Software Engineer
            </h2>

            {/* Skills badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["React", "Django", "Flutter", "TypeScript", "Python", "PostgreSQL"].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-300 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-8 max-w-4xl text-center text-gray-300 text-lg leading-relaxed animate-fade-in-up">
              I'm a 27-year-old Computing (Information Systems) Honours graduate from Greenwich University, 
              passionate about building <span className="text-blue-400 font-semibold">innovative</span> and 
              <span className="text-purple-400 font-semibold"> user-friendly</span> software solutions. 
              With expertise spanning full-stack development, AI integration, and business management systems, 
              I bring ideas to life through code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="flex items-center gap-2">
                  View My Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                to="/contact"
                className="px-8 py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Get In Touch
              </Link>
            </div>
          </header>

          {/* Stats/Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-gray-300">Major Projects</div>
              <div className="text-sm text-gray-400 mt-1">Full-stack applications</div>
            </div>
            
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
              <div className="text-gray-300">Technologies</div>
              <div className="text-sm text-gray-400 mt-1">Languages & frameworks</div>
            </div>
            
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl font-bold text-cyan-400 mb-2">AI</div>
              <div className="text-gray-300">Integration</div>
              <div className="text-sm text-gray-400 mt-1">PyTorch & OpenCV</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
