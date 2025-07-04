# Portfolio Website Documentation

## Project Overview
This portfolio website is built using modern web technologies to showcase your projects and skills. It serves as both a personal portfolio and a learning project for React and TypeScript.

## Technologies Used
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A strongly typed programming language that builds on JavaScript
- **React Router v7**: For handling navigation and routing in the application
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development

## Project Structure
```
portfolio/
├── app/                    # Main application code
│   ├── routes/             # Page components for different routes
│   │   ├── home.tsx        # Home page component
│   │   ├── projects.tsx    # Projects showcase page
│   │   └── contact.tsx     # Contact page
│   ├── welcome/            # Welcome components
│   ├── root.tsx            # Root layout and routing setup
│   ├── routes.ts           # Route configuration
│   └── app.css             # Global styles
├── public/                 # Static assets
├── node_modules/           # Dependencies (not tracked in git)
├── package.json            # Project configuration and dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler configuration
```

## Key Concepts Explained

### React Basics
React is a JavaScript library for building user interfaces. It uses a component-based architecture where UI elements are broken down into reusable components.

**Components**: Self-contained pieces of code that return what should appear on screen. For example, in our project:
- `Navigation` component: Handles the navigation bar
- `ProjectCard` component: Displays information about a single project

### TypeScript Basics
TypeScript adds static typing to JavaScript, which helps catch errors during development rather than at runtime.

**Type Definitions**: 
```typescript
// Example from projects.tsx
interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl?: string;  // The ? means this property is optional
    githubUrl?: string;
}
```

**Type Imports and Aliases**:
```typescript
// Example from root.tsx
import type { Route as RouteType } from "./+types/root";
```
This imports the `Route` type but renames it to `RouteType` to avoid conflicts with the React Router component.

### React Router
React Router is a standard library for routing in React applications. It enables navigation between different components without page reloads.

**Route Configuration**:
```typescript
// From routes.ts
export default [
  index("routes/home.tsx"),
  route("projects", "routes/projects.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
```

**Navigation Links**:
```tsx
<Link to="/projects" className={...}>Projects</Link>
```

### Tailwind CSS
Tailwind is a utility-first CSS framework that allows you to build designs directly in your markup.

**Example**:
```tsx
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
```
- `bg-gray-800`: Dark gray background
- `rounded-lg`: Large border radius
- `overflow-hidden`: Hide content that exceeds the div's boundaries
- `shadow-lg`: Large drop shadow

## Changes Made

### 1. Initial Setup
- Created basic project structure with React Router and TypeScript
- Set up routing for home, projects, and contact pages

### 2. Projects Page Enhancement
- Added a `Project` interface to define the structure of project data
- Created sample project data with placeholders
- Implemented a `ProjectCard` component to display project information
- Added responsive grid layout for projects display

### 3. Navigation Implementation
- Created a `Navigation` component in root.tsx
- Added links to all pages with active state highlighting
- Made the navigation responsive with a mobile menu button
- Fixed TypeScript errors by renaming imported types to avoid conflicts

## Next Steps
- Implement mobile menu functionality
- Add a footer component
- Enhance the home page with personal information and skills
- Add animations and transitions between pages

## React & TypeScript Tips

### JSX/TSX Syntax
JSX/TSX allows you to write HTML-like code in JavaScript/TypeScript:
```tsx
function Welcome() {
  return <h1>Hello, world!</h1>;
}
```

### Component Props
Props are how components receive data:
```tsx
function ProjectCard({ project }: { project: Project }) {
  return <div>{project.title}</div>;
}
```

### Conditional Rendering
```tsx
{projects.length > 0 ? (
  <div>Projects exist!</div>
) : (
  <div>No projects yet</div>
)}
```

### Mapping Over Arrays
```tsx
{projects.map(project => (
  <ProjectCard key={project.id} project={project} />
))}
```

### TypeScript Type vs Component Name Conflicts
When you have a component and a type with the same name, use type aliases:
```typescript
import { Route } from "react-router"; // Component
import type { Route as RouteType } from "./types"; // Type
```
