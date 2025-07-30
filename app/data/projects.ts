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
        title: "Personal Portfolio Website",
        description: "A modern, production-ready portfolio website with real contact functionality, professional branding, and responsive design built with React Router v7 and TypeScript.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "React Router v7", "Vite", "EmailJS", "SVG"],
        imageUrl: "/images/port.png",
        githubUrl: "https://github.com/Keithpaul98/Portfolio",
        features: [
            "Fully functional contact form with EmailJS integration",
            "Real email delivery to professional email address",
            "WhatsApp integration for international clients (+265 99 333 1804)",
            "Professional headshot and personal branding",
            "Custom logo system with full and compact variants",
            "Custom favicon with proper browser tab display",
            "Modern glassmorphism design with gradients and animations",
            "Responsive design optimized for all devices",
            "Professional footer with social media links",
            "React Router v7 + React 19 compatibility",
            "Production build optimization with SSR support",
            "Environment variable security configuration",
            "Comprehensive documentation and deployment guide",
            "Vercel deployment ready with performance optimization"
        ],
        longDescription: "This portfolio website represents a complete, production-ready web application showcasing modern full-stack development skills. Built with React Router v7 and TypeScript, it features real-world functionality including a working contact form that sends emails via EmailJS, WhatsApp integration for international client communication, and professional branding elements. The site demonstrates expertise in modern web technologies, responsive design principles, and production deployment practices. Key technical achievements include React Router v7 + React 19 compatibility resolution, comprehensive environment variable security, and optimized build performance with both client and server-side rendering support.",
        startDate: "July 2025",
        endDate: "July 2025"
    },
    {
        id: "habit-tracker",
        title: "Habit Tracker",
        description: "A comprehensive habit tracking application to help users build and maintain positive daily habits.",
        technologies: ["Flutter", "Dart", "Shared Preferences"],
        imageUrl: "/images/habit_tracker.jpg",
        githubUrl: "https://github.com/Keithpaul98/Habit-Tracker-App",
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
        technologies: ["Django", "PostgreSQL", "HTML", "CSS", "JavaScript", "PyTorch", "OpenCV", "Diffusers", "Stripe", "xhtml2pdf", "reportlab"],
        imageUrl: "/images/preview.png",
        images: [ // Additional gallery images
            "/images/LBD.png",
            "/images/graphs.png", 
            "/images/staffd.png",
            "/images/stockd.png"
        ],
        githubUrl: "https://github.com/Keithpaul98/Personalised-Hairstyle-System",
        features: [
            "Virtual Hair Try-On: AI-powered virtual hairstyle simulation",
            "Inventory Management: Stock tracking with low stock alerts",
            "User Management: Role-based access control (admin, stylist, customer)",
            "User profiles and authentication with customer management",
            "Appointment Scheduling: Online booking system with calendar integration",
            "Appointment reminders and notifications",
            "Face analysis for personalized style recommendations",
            "Preview different hair colors and styles",
            "Service Management: Service catalog with pricing and customization",
            "Service image gallery",
            "Payment Processing: Secure Stripe integration with invoice generation",
            "Payment history tracking",
            "Product management system",
            "Reporting & Analytics: Sales reports and stylist performance metrics",
            "Customer analytics and insights",
            "Communication Tools: In-app messaging system",
            "Notification center and customer feedback"
        ],
        longDescription: "The Personalized Hairstyling System is a comprehensive business management platform designed specifically for hair salons and styling businesses. This sophisticated web application combines AI-powered virtual hair try-on technology with complete business operations management. The system features role-based access control for admins, stylists, and customers, along with advanced appointment scheduling, inventory management, and payment processing through Stripe integration. The AI components, built with PyTorch and OpenCV, provide virtual hairstyle simulation and face analysis for personalized recommendations. Additional features include comprehensive reporting and analytics, in-app communication tools, and a complete service management system with pricing and customization options.",
        startDate: "2024",
        endDate: "Present"
    }
];

// Helper function to get all unique technologies from projects
export function getAllTechnologies(): string[] {
    return Array.from(
        new Set(projects.flatMap(project => project.technologies))
    ).sort();
}
