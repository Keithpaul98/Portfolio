import { useState } from "react";
import { Link } from "react-router";
import { projects, getAllTechnologies } from "../../data/projects";
import type { Project } from "../../data/projects";

// Project card component
function ProjectCard({ project, index }: { project: Project; index: number }) {
    const isLive = !!project.liveUrl;
    const isFeatured = project.id === "portfolio"; // Mark portfolio as featured
    
    return (
        <div 
            className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Status Badges */}
            <div className="absolute top-3 left-3 z-10 flex gap-2">
                {isFeatured && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Featured
                    </span>
                )}
                {isLive && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Live
                    </span>
                )}
            </div>
            
            <div className="h-48 overflow-hidden relative">
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with quick stats */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center justify-center gap-4 text-white text-sm">
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                </svg>
                                <span>{project.technologies.length} Tech</span>
                            </div>
                            {project.features && (
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                                    </svg>
                                    <span>{project.features.length} Features</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 text-white">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 flex-1">
                        {project.title}
                    </h3>
                    {(project.startDate || project.endDate) && (
                        <div className="text-xs text-gray-400 bg-gray-700/30 px-2 py-1 rounded-full ml-3 whitespace-nowrap">
                            <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                            </svg>
                            {project.startDate} {project.endDate && project.startDate ? '- ' : ''} {project.endDate}
                        </div>
                    )}
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                {/* Feature Highlights */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            Key Features:
                        </h4>
                        <div className="space-y-1">
                            {project.features.slice(0, 2).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start gap-2 text-xs text-gray-300">
                                    <svg className="w-3 h-3 mt-0.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                                    </svg>
                                    <span className="line-clamp-1">{feature}</span>
                                </div>
                            ))}
                            {project.features.length > 2 && (
                                <div className="text-xs text-gray-400 ml-5">
                                    +{project.features.length - 2} more features
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span 
                                key={techIndex} 
                                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-xs px-3 py-1 rounded-full text-gray-300 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="text-xs text-gray-400 px-2 py-1">
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                    <Link 
                        to={`/projects/${project.id}`}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                        View Details
                    </Link>
                    {project.liveUrl && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 border-green-600 hover:bg-green-600 text-green-400 hover:text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                            </svg>
                            Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 border-gray-600 hover:border-gray-400 text-gray-400 hover:text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

// Temporarily commented out due to React 19 compatibility issue
// export function meta() {
//   return [
//     { title: "Projects - Keith Paul Nkwanda" },
//     { name: "description", content: "Explore my portfolio of software development projects" },
//   ];
// }

export default function ProjectsIndex() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTech, setSelectedTech] = useState("");
    
    const allTechnologies = getAllTechnologies();
    
    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTech = selectedTech === "" || project.technologies.includes(selectedTech);
        return matchesSearch && matchesTech;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
            <div className="container mx-auto px-4 pt-24 pb-12">
                {/* Breadcrumb Navigation */}
                <div className="mb-8 animate-fade-in">
                    <nav className="flex items-center space-x-2 text-sm text-gray-400">
                        <Link to="/" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                            </svg>
                            Home
                        </Link>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                        <span className="text-blue-400 font-medium">Projects</span>
                    </nav>
                </div>

                {/* Enhanced Header Section */}
                <div className="text-center mb-16 relative">
                    <div className="relative z-10">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
                            My Projects
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up leading-relaxed">
                            A collection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">innovative software solutions</span> I've built, showcasing expertise in full-stack development, AI integration, and modern web technologies.
                        </p>
                        
                        {/* Enhanced gradient line with animation */}
                        <div className="relative mx-auto mt-8 w-32">
                            <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full blur-sm opacity-50"></div>
                        </div>
                        
                        {/* Project stats */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-8 animate-fade-in-up">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-blue-400">{projects.length}</div>
                                <div className="text-sm text-gray-400">Projects</div>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
                            <div className="block sm:hidden w-8 h-px bg-gray-600"></div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-purple-400">{getAllTechnologies().length}</div>
                                <div className="text-sm text-gray-400">Technologies</div>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
                            <div className="block sm:hidden w-8 h-px bg-gray-600"></div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{projects.filter(p => p.liveUrl).length}</div>
                                <div className="text-sm text-gray-400">Live Projects</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Search and Filter Section */}
                <div className="mb-16 max-w-5xl mx-auto">
                    <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-white">Find Your Project</h2>
                            <div className="flex-1"></div>
                            <div className="text-sm text-gray-400">
                                {filteredProjects.length} of {projects.length} projects
                            </div>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex-1 relative group">
                                <input
                                    type="text"
                                    placeholder="Search by name, description, or technology..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/70 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 group-hover:border-gray-500/70"
                                />
                                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm("")}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                        </svg>
                                    </button>
                                )}
                            </div>
                            
                            <div className="relative group min-w-[240px]">
                                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
                                </svg>
                                <select
                                    value={selectedTech}
                                    onChange={(e) => setSelectedTech(e.target.value)}
                                    className="w-full pl-12 pr-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-blue-400/70 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 appearance-none cursor-pointer group-hover:border-gray-500/70"
                                >
                                    <option value="">All Technologies</option>
                                    {allTechnologies.map((tech) => (
                                        <option key={tech} value={tech}>{tech}</option>
                                    ))}
                                </select>
                                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 10l5 5 5-5z"/>
                                </svg>
                            </div>
                            
                            {(searchTerm || selectedTech) && (
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedTech("");
                                    }}
                                    className="px-6 py-4 bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/50 hover:border-red-400/70 text-red-400 hover:text-red-300 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                    </svg>
                                    Clear Filters
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Results count */}
                <div className="text-center text-gray-400 mb-8">
                    {filteredProjects.length === projects.length ? (
                        <span>Showing all {projects.length} projects</span>
                    ) : (
                        <span>Found {filteredProjects.length} of {projects.length} projects</span>
                    )}
                </div>

                {/* Enhanced Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                            {filteredProjects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <ProjectCard project={project} index={index} />
                                </div>
                            ))}
                        </div>
                        
                        {/* Load more hint for future expansion */}
                        {filteredProjects.length >= 6 && (
                            <div className="text-center mt-12 animate-fade-in">
                                <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                    <span>All projects loaded</span>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="max-w-md mx-auto text-center py-20">
                        <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                            {/* Animated search icon */}
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center animate-pulse">
                                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-ping"></div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-300 mb-3">No projects found</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {searchTerm || selectedTech ? (
                                    <>
                                        No projects match your current search criteria.
                                        <br />
                                        Try different keywords or technologies.
                                    </>
                                ) : (
                                    "It looks like there are no projects to display."
                                )}
                            </p>
                            
                            <div className="space-y-3">
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedTech("");
                                    }}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                    </svg>
                                    Clear All Filters
                                </button>
                                
                                <Link 
                                    to="/"
                                    className="w-full px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                    </svg>
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
