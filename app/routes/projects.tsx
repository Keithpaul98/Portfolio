import { Outlet } from "react-router";

// Temporarily commented out due to React 19 compatibility issue
// export function meta() {
//   return [
//     { title: "Projects - Keith Paul Nkwanda" },
//     { name: "description", content: "A showcase of projects by Keith Paul Nkwanda." },
//   ];
// }

export default function ProjectsLayout() {
    return <Outlet />;
}