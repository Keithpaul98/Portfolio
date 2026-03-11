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
        title: "SwiftBudget - Personal Finance Application",
        description: " Status: Live v1.0 | A modern personal finance application for tracking income, expenses, budget goals, and projects — all in Malawi Kwacha (MK). Migrated from Flask to Next.js for better performance and security.",
        technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS v4", "shadcn/ui", "Recharts", "EmailJS", "Netlify"],
        imageUrl: "/images/swiftbudget.png",
        images: [
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1773255023/dashboard_egooaf.png",
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1773255021/transactions_aogrgr.png",
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1773255022/budget_goals_td52f8.png",
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1773255023/projects_tqgqww.png",
            "https://res.cloudinary.com/dszhg6iac/image/upload/v1773255022/Profile_n1um2y.png"
        ],
        liveUrl: "https://swiftbudget.netlify.app/",
        githubUrl: "https://github.com/Keithpaul98/Swift_Budget",
        features: [
            "Transaction Management: Add, edit, delete income/expense records with search, type/date filters, and pagination",
            "Category System: 17 pre-loaded categories + custom categories with duplicate prevention",
            "Budget Goals: Set weekly/monthly/yearly spending limits with progress bars and threshold alerts",
            "Project Grouping: Organize transactions by project with budget tracking",
            "Dashboard: Financial overview with bar/pie charts (Recharts), monthly navigation, and summary stats",
            "CSV Export: Download filtered transactions as a spreadsheet",
            "Email/Password Auth: Signup, login, and password reset via Supabase Auth",
            "Session Timeout: Auto-logout after 30 minutes of inactivity",
            "Rate Limiting: Login lockout after 5 failed attempts; contact form limited to 3/min",
            "Row Level Security: Database-level data isolation per user",
            "Security Headers: CSP, HSTS, X-Frame-Options, and comprehensive security configuration",
            "Audit Logging: All data changes logged for accountability",
            "Real-Time Password Feedback: Live checklist showing password requirements as you type",
            "Toast Notifications: Instant feedback for all actions",
            "Dark Mode: System theme detection with responsive design",
            "23 Unit Tests: Vitest + Testing Library for currency formatting, constants, and audit logging"
        ],
        longDescription: "SwiftBudget is a modern personal finance application built with Next.js 16, React 19, TypeScript, and Supabase PostgreSQL. Migrated from the original Flask application to leverage modern React architecture, the app features comprehensive transaction management with search, filters, and pagination, a robust category system with 17 defaults plus custom categories, budget goals with visual progress tracking, and project-based transaction grouping. The dashboard provides financial insights through Recharts visualizations with monthly navigation and summary statistics. Security is paramount with Supabase Row Level Security ensuring database-level data isolation, session timeout after 30 minutes of inactivity, rate limiting on login (5 attempts) and contact form (3/min), 7 security headers (CSP, HSTS, X-Frame-Options), and comprehensive audit logging. The application demonstrates advanced Next.js development with the App Router, React Server Components, middleware for authentication and route guards, server-side API routes for email (EmailJS), and shadcn/ui v4 components with Tailwind CSS v4. Deployed on Netlify with automated CI/CD from GitHub, the project includes 23 unit tests (Vitest), comprehensive documentation (ARCHITECTURE.md, DOCUMENTATION.md), and a 7-table database schema with check constraints and foreign keys. The tech stack showcases production-grade practices including TypeScript type safety, error boundaries, loading skeletons, toast notifications, real-time password validation feedback, and CSV export functionality. Future enhancements include recurring transactions UI, multi-currency support, offline capabilities, and real-time multi-device sync.",
        startDate: "February 2026",
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
