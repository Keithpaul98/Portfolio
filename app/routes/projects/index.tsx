import { useState } from "react";
import { Meta, Link } from "react-router";
import { projects, getAllTechnologies } from "../../data/projects";
import type { Project } from "../../data/projects";

// Project card component
function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="flex gap-4 mt-4">
                    <Link 
                        to={`/projects/${project.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        View Details
                    </Link>
                    {project.liveUrl && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export function meta() {
    return [
        { title: "Projects - Keith Paul Nkwanda" },
        { name: "description", content: "A showcase of projects by Keith Paul Nkwanda." },
    ];
}

export default function ProjectsIndex() {
    const [selectedTech, setSelectedTech] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    
    // Get all unique technologies
    const allTechnologies = getAllTechnologies();
    
    // Filter projects based on selected technology and search query
    const filteredProjects = projects.filter(project => {
        const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true;
        const matchesSearch = searchQuery 
            ? project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
              project.description.toLowerCase().includes(searchQuery.toLowerCase())
            : true;
        return matchesTech && matchesSearch;
    });

    return (
        <main className="pt-16 p-4 container mx-auto min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">My Projects</h1>
            
            <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    {/* Search input */}
                    <div className="w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Technology filter */}
                    <div className="w-full md:w-2/3 flex flex-wrap gap-2 justify-end">
                        <button
                            onClick={() => setSelectedTech(null)}
                            className={`px-3 py-1 rounded-full text-sm ${
                                selectedTech === null 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                        >
                            All
                        </button>
                        {allTechnologies.map(tech => (
                            <button
                                key={tech}
                                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                                className={`px-3 py-1 rounded-full text-sm ${
                                    tech === selectedTech 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-white p-8 bg-gray-800 rounded-lg">
                    <p className="text-xl">No projects match your filters.</p>
                    <button 
                        onClick={() => {
                            setSelectedTech(null);
                            setSearchQuery("");
                        }}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </main>
    );
}
