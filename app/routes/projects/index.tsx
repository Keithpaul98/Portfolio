import { useState } from "react";
import { Link } from "react-router";
import { projects, getAllTechnologies } from "../../data/projects";
import type { Project } from "../../data/projects";

// Project card component
function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <div 
            className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="h-48 overflow-hidden relative">
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
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
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 text-center group-hover:shadow-lg group-hover:shadow-blue-500/25"
                    >
                        View Details
                    </Link>
                    {project.liveUrl && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 border-green-600 hover:bg-green-600 text-green-400 hover:text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 border-gray-600 hover:border-gray-400 text-gray-400 hover:text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
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
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
                        A collection of software solutions I've built, showcasing my expertise in full-stack development, AI integration, and modern web technologies.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                            />
                            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        
                        <select
                            value={selectedTech}
                            onChange={(e) => setSelectedTech(e.target.value)}
                            className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 min-w-[200px]"
                        >
                            <option value="">All Technologies</option>
                            {allTechnologies.map((tech) => (
                                <option key={tech} value={tech}>{tech}</option>
                            ))}
                        </select>
                    </div>

                    {/* Results count */}
                    <div className="text-center text-gray-400 mb-8">
                        {filteredProjects.length === projects.length ? (
                            <span>Showing all {projects.length} projects</span>
                        ) : (
                            <span>Found {filteredProjects.length} of {projects.length} projects</span>
                        )}
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-300 mb-2">No projects found</h3>
                        <p className="text-gray-400 mb-6">Try adjusting your search criteria</p>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedTech("");
                            }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
