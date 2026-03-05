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
        id: "swiftbudget",
        title: "SwiftBudget - Personal Budgeting App",
        description: "🟢 Status: Live Beta | A lightweight, responsive web application for personal and household budgeting with real-time financial tracking and visualization.",
        technologies: ["Flask", "Python", "PostgreSQL", "SQLAlchemy", "Bootstrap 5", "Chart.js", "Cloudinary", "Gunicorn"],
        imageUrl: "/images/swiftbudget.png",
        images: [
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1772719151/Final_Dash_r9qpyc.png",
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1772719151/transactions_op7kqp.png",
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1772719151/group_ucb964.png",
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1772719151/Budget_Goals_lko4ti.png",
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1772719150/projects_xh4hqu.png"
        ],
        liveUrl: "https://swiftbudget.onrender.com",
        githubUrl: "https://github.com/Keithpaul98/SwiftBudget",
        features: [
            "User Authentication: Secure signup/login with bcrypt password hashing",
            "User Profiles: Profile picture uploads via Cloudinary CDN",
            "Transaction Management: Full CRUD operations for income and expenses",
            "Smart Categorization: Default categories + custom user categories",
            "Budget Goals: Monthly/weekly/yearly budget limits with threshold alerts",
            "Projects/Tags: Group related transactions for better organization",
            "Interactive Dashboard: Real-time balance, spending trends, and visual charts",
            "Email Notifications: Budget alerts and welcome emails via Gmail SMTP",
            "Advanced Features: Quantity/unit price tracking, soft deletes, audit trails",
            "Malawi Kwacha Support: Full MK currency integration",
            "Auto-dismissing Alerts: Flash messages automatically fade after 4 seconds",
            "MVC + Service Layer: Framework-agnostic business logic for future migrations",
            "80%+ Test Coverage: Comprehensive unit and integration tests",
            "Production Deployment: Live on Render.com with PostgreSQL database"
        ],
        longDescription: "SwiftBudget is a production-ready personal and household budgeting application built with Flask and PostgreSQL. The application follows MVC architecture with a service layer pattern, enabling framework-agnostic business logic that facilitates future migrations. Key features include secure user authentication with bcrypt, full transaction CRUD operations, smart categorization with custom categories, budget goals with email alerts, and an interactive dashboard with Chart.js visualizations. The application demonstrates advanced Flask development with SQLAlchemy ORM, Flask-Login for session management, Flask-WTF for CSRF protection, and Cloudinary CDN integration for profile images. Deployed on Render.com with automated CI/CD from GitHub, the application includes comprehensive documentation covering system requirements, architecture, database design, API specifications, security, and testing strategies. With 80%+ test coverage and OWASP Top 10 mitigations, SwiftBudget showcases production-grade development practices including HTTPS, CSP headers, SQL injection prevention, and XSS protection.",
        startDate: "January 2026",
        endDate: "March 2026"
    },
    {
        id: "habit-tracker",
        title: "Habit Tracker V1.0",
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
        longDescription: "The Habit Tracker is a Flutter mobile application designed to help users develop and maintain positive daily habits. Users can create custom habits, track their daily progress, and view their streaks and completion rates over time. The application features an intuitive interface with visual progress indicators, making it easy to stay motivated and see improvement patterns. Built with Flutter and Dart, utilizing Shared Preferences for data persistence, it provides a seamless experience across sessions.",
        startDate: "June 2025",
        endDate: "June 2025"
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
