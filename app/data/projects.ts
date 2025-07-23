// Project data structure
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    images?: string[];
    liveUrl?: string;
    githubUrl?: string;
    features?: string[];
    longDescription?: string;
    startDate?: string;
    endDate?: string;
}

// Sample project data
export const projects: Project[] = [
    {
        id: "portfolio",
        title: "Personal Portfolio",
        description: "A modern portfolio website built with React Router and Tailwind CSS to showcase my projects and skills.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "Vite"],
        imageUrl: "https://via.placeholder.com/800x400?text=Portfolio+Website",
        githubUrl: "https://github.com/keithpaul98/portfolio",
        features: [
            "Responsive design that works on all devices",
            "Dark theme with modern UI elements",
            "Project filtering and search functionality",
            "Detailed project pages with comprehensive information",
            "Docker deployment ready"
        ],
        longDescription: "This portfolio website was built to showcase my skills and projects in web development. It features a clean, modern design with a focus on user experience. The site is built with React Router v7, TypeScript, and Tailwind CSS, demonstrating my proficiency in modern front-end technologies. The project structure includes routes for home, projects, and contact pages, with a dark theme featuring a gray/blue color scheme.",
        startDate: "July 2025",
        endDate: "Present"
    },
    {
        id: "habit-tracker",
        title: "Habit Tracker",
        description: "A comprehensive habit tracking application to help users build and maintain positive daily habits.",
        technologies: ["Flutter", "Local Storage"],
        imageUrl: "/images/habit_tracker.jpg",
        githubUrl: "https://github.com/keithpaul98/habit-tracker",
        features: [
            "Track Multiple Habits: Create and manage multiple habits in a single interface",
            "Completion Tracking: Mark habits as complete/incomplete with a simple tap",
            "Statistics Dashboard: View your progress with a summary of total habits, completed habits, and completion rate",
            "Theme Switching: Toggle between light, dark, and system default themes",
            "Edit Habits: Modify habit names after creation",
            "Sort Options: Arrange habits by name (ascending/descending) or completion status",
            "Swipe to Delete: Easily remove unwanted habits with a swipe gesture",
            "Clear Completed: Option to remove all completed habits at once",
            "Drag and Drop Reordering: Manually arrange habits in your preferred order",
            "Data Persistence: All habits and settings are saved between app sessions   "
        ],
        longDescription: "The Habit Tracker is a flutter mobile application designed to help users develop and maintain positive daily habits. Users can create custom habits, track their daily progress, and view their streaks and completion rates over time. The application features an intuitive interface with visual progress indicators, making it easy to stay motivated and see improvement patterns. Built with React and utilizing local storage for data persistence, it provides a seamless experience across sessions.",
        startDate: "June 2025",
        endDate: "Present"
    },
    {
        id: "hairstyling-system",
        title: "Personalized Hairstyling System",
        description: "An intelligent hairstyling recommendation system that provides personalized hair care and styling suggestions.",
        technologies: ["JavaScript", "HTML", "CSS", "Machine Learning", "API Integration", "Django"],
        imageUrl: "/images/preview.jpg",
        images: [ // Additional gallery images
            "/images/LBD.jpg",
            "/images/graphs.jpg", 
            "/images/staffd.png",
            "/images/stockd.png"
        ],
        githubUrl: "https://github.com/keithpaul98/hairstyling-system",
        features: [
            "Personalized hairstyle recommendations",
            "Face shape analysis and matching",
            "Hair type and texture assessment",
            "Styling tips and tutorials",
            "Product recommendations",
            "Before/after visualization tools"
        ],
        longDescription: "The Personalized Hairstyling System is an innovative web application that uses intelligent algorithms to provide customized hairstyle recommendations. By analyzing user inputs such as face shape, hair type, lifestyle preferences, and personal style, the system suggests suitable hairstyles and provides detailed styling instructions. The application includes features for hair care tips, product recommendations, and styling tutorials, making it a comprehensive solution for anyone looking to enhance their hair styling routine.",
        startDate: "2024",
        endDate: "2024"
    }
];

// Helper function to get all unique technologies from projects
export function getAllTechnologies(): string[] {
    return Array.from(
        new Set(projects.flatMap(project => project.technologies))
    ).sort();
}
