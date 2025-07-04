import { Meta, Outlet } from "react-router";

export function meta() {
    return [
        { title: "Projects - Keith Paul Nkwanda" },
        { name: "description", content: "A showcase of projects by Keith Paul Nkwanda." },
    ];
}

export default function ProjectsLayout() {
    return <Outlet />;
}