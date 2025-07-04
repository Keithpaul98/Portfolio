import { useState, useEffect } from "react";
import { Meta, Link, useParams, useNavigate } from "react-router";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";

export function meta({ params }: { params: { projectId: string } }) {
    const project = projects.find(p => p.id === params.projectId);
    
    if (!project) {
        return [
            { title: "Project Not Found - Keith Paul Nkwanda" },
            { name: "description", content: "The requested project could not be found." },
        ];
    }
    
    return [
        { title: `${project.title} - Keith Paul Nkwanda` },
        { name: "description", content: project.description },
    ];
}

export default function ProjectDetail() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Simulate loading data
        setIsLoading(true);
        
        // Find the project with the matching ID
        const foundProject = projects.find(p => p.id === projectId);
        
        if (foundProject) {
            setProject(foundProject);
        }
        
        setIsLoading(false);
    }, [projectId]);
    
    if (isLoading) {
        return (
            <div className="pt-16 p-4 container mx-auto min-h-screen flex items-center justify-center">
                <div className="text-white text-xl">Loading project details...</div>
            </div>
        );
    }
    
    if (!project) {
        return (
            <div className="pt-16 p-4 container mx-auto min-h-screen">
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-gray-300 mb-6">The project you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => navigate("/projects")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <main className="pt-16 p-4 container mx-auto min-h-screen">
            <div className="mb-6">
                <Link 
                    to="/projects"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Projects
                </Link>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                {/* Project Header */}
                <div className="relative">
                    <div className="h-64 md:h-96 overflow-hidden">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
                        <div className="p-6 md:p-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
                            {(project.startDate || project.endDate) && (
                                <p className="text-gray-300 text-sm mb-2">
                                    {project.startDate} {project.endDate && project.startDate ? '- ' : ''} {project.endDate}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="p-6 md:p-8 text-white">
                    {/* Project Links */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {project.liveUrl && (
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub Repository
                            </a>
                        )}
                    </div>
                    
                    {/* Project Description */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {project.longDescription || project.description}
                        </p>
                    </div>
                    
                    {/* Technologies Used */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="bg-gray-700 px-3 py-2 rounded-md text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Navigation to other projects */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Other Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                        .filter(p => p.id !== project.id)
                        .slice(0, 3)
                        .map(p => (
                            <Link 
                                key={p.id} 
                                to={`/projects/${p.id}`}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
                            >
                                <div className="h-40 overflow-hidden">
                                    <img 
                                        src={p.imageUrl} 
                                        alt={p.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                                    <p className="text-gray-400 text-sm line-clamp-2">{p.description}</p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </main>
    );
}
