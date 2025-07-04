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
│   ├── data/               # Shared data files
│   │   └── projects.ts     # Project data and interfaces
│   ├── routes/             # Page components for different routes
│   │   ├── home.tsx        # Home page component
│   │   ├── projects.tsx    # Projects layout component
│   │   │   ├── index.tsx   # Projects listing page
│   │   │   └── $projectId.tsx # Individual project detail page
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
// Example from projects.ts
interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl?: string;  // The ? means this property is optional
    githubUrl?: string;
    longDescription?: string;
    startDate?: string;
    endDate?: string;
    features?: string[];
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
  route("projects/*", "routes/projects.tsx", [
    index("routes/projects/index.tsx"),
    route(":projectId", "routes/projects/$projectId.tsx")
  ]),
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

### 4. Nested Routing Implementation (July 4, 2025)
- Created a shared data file (`app/data/projects.ts`) with Project interface and sample project data
- Enhanced the Project interface with additional fields (longDescription, dates, features)
- Added a helper function to extract all unique technologies for filtering
- Restructured the projects section to use nested routing:
  - `projects.tsx` now serves as a layout component with common header/footer
  - `projects/index.tsx` handles project listing with search and filtering
  - `projects/$projectId.tsx` displays detailed project information
- Fixed routing configuration in `routes.ts` to support nested routes using wildcard (`*`)
- Fixed TypeScript errors related to verbatimModuleSyntax by using type-only imports
- Simplified the App component in `root.tsx` to work with server-side rendering

### 5. Bug Fixes and Challenges (July 4, 2025)
- Fixed React Router warning about missing trailing wildcard by updating route path to `projects/*`
- Resolved TypeScript errors with type-only imports using `import type { Project } from '...'`
- Fixed server-side rendering issues with `createBrowserRouter`:
  - Removed client-side only router creation that was causing "document is not defined" errors
  - Simplified App component to return Layout with Outlet
  - Updated routes configuration to work with React Router v7's server-side rendering
- Updated .gitignore file with standard patterns for React projects
- Successfully pushed the project to GitHub repository

## Common Errors and Solutions

### 1. TypeScript Type vs Component Name Conflicts
When you have a component and a type with the same name, use type aliases:
```typescript
import { Route } from "react-router"; // Component
import type { Route as RouteType } from "./types"; // Type
```

### 2. Server-Side Rendering with React Router v7
Error: `ReferenceError: document is not defined`

Solution: Don't use `createBrowserRouter` in components that render on the server. Instead:
- Use the route configuration from `routes.ts`
- Simplify the App component to return Layout with Outlet
- Let React Router's built-in server-side rendering handle the routing

### 3. Nested Routes Not Rendering
Error: Child routes not showing up in parent route

Solution: 
- Add wildcard (`*`) to parent route path: `projects/*`
- Ensure parent component renders an `<Outlet />` component
- Configure nested routes properly in `routes.ts`

### 4. Type Import Errors with verbatimModuleSyntax
Error: `This import is never used as a value and must use 'import type'`

Solution: Use type-only imports for interfaces and types:
```typescript
import type { Project } from '../../data/projects';
```

## Next Steps
- Implement mobile menu functionality
- Add a footer component
- Enhance the home page with personal information and skills
- Add animations and transitions between pages
- Add more projects to the data file
- Implement pagination or infinite scroll for projects
- Add contact form functionality
- Optimize images and performance

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

### React Router v7 Nested Routes
```tsx
// Parent component (Layout)
function Projects() {
  return (
    <>
      <header>Common header</header>
      <Outlet /> {/* Child routes render here */}
      <footer>Common footer</footer>
    </>
  );
}

// Route configuration
route("projects/*", "routes/projects.tsx", [
  index("routes/projects/index.tsx"),
  route(":projectId", "routes/projects/$projectId.tsx")
])
