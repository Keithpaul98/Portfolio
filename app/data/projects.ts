// Project data structure
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
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
        technologies: ["React", "TypeScript", "Tailwind CSS", "React Router"],
        imageUrl: "https://via.placeholder.com/800x400?text=Portfolio+Website",
        githubUrl: "https://github.com/keithpaul98/portfolio",
        features: [
            "Responsive design that works on all devices",
            "Dark theme with modern UI elements",
            "Project filtering and search functionality",
            "Detailed project pages with comprehensive information",
            "Contact form with validation"
        ],
        longDescription: "This portfolio website was built to showcase my skills and projects in web development. It features a clean, modern design with a focus on user experience. The site is built with React Router v7, TypeScript, and Tailwind CSS, demonstrating my proficiency in modern front-end technologies. The project structure includes routes for home, projects, and contact pages, with a dark theme featuring a gray/blue color scheme.",
        startDate: "June 2023",
        endDate: "Present"
    },
    {
        id: "e-commerce",
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        imageUrl: "https://via.placeholder.com/800x400?text=E-Commerce+Platform",
        liveUrl: "https://ecommerce-demo.keithpaul.dev",
        githubUrl: "https://github.com/keithpaul98/ecommerce",
        features: [
            "User authentication and account management",
            "Product catalog with categories and filters",
            "Shopping cart with persistent storage",
            "Secure checkout with Stripe integration",
            "Order history and tracking",
            "Admin dashboard for product management"
        ],
        longDescription: "This e-commerce platform provides a complete solution for online stores. Built with a React frontend and Node.js/Express backend, it offers a seamless shopping experience from browsing products to checkout. The platform includes user authentication, a product catalog with filtering options, shopping cart functionality, and secure payment processing through Stripe. The MongoDB database ensures efficient data storage and retrieval.",
        startDate: "January 2023",
        endDate: "May 2023"
    },
    {
        id: "weather-app",
        title: "Weather Dashboard",
        description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
        technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
        imageUrl: "https://via.placeholder.com/800x400?text=Weather+Dashboard",
        liveUrl: "https://weather.keithpaul.dev",
        githubUrl: "https://github.com/keithpaul98/weather-app",
        features: [
            "Current weather conditions display",
            "5-day forecast with detailed information",
            "Location search with autocomplete",
            "Responsive design for mobile and desktop",
            "Weather alerts and notifications",
            "Unit conversion (Celsius/Fahrenheit)"
        ],
        longDescription: "The Weather Dashboard is a web application that provides users with up-to-date weather information for any location worldwide. Using a third-party weather API, it displays current conditions, hourly forecasts, and a 5-day outlook. Users can search for locations, save favorites, and receive weather alerts. The application features a clean, intuitive interface that works well on both mobile and desktop devices.",
        startDate: "November 2022",
        endDate: "December 2022"
    }
];

// Helper function to get all unique technologies from projects
export function getAllTechnologies(): string[] {
    return Array.from(
        new Set(projects.flatMap(project => project.technologies))
    ).sort();
}
