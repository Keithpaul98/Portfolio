import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Keith Paul Nkwanda - Full-Stack Developer & Software Engineer" },
    { name: "description", content: "Professional portfolio of Keith Paul Nkwanda - Full-stack developer specializing in React, Django, Flutter, and AI integration. View my projects and get in touch." },
    { name: "keywords", content: "Keith Paul Nkwanda, Full-Stack Developer, Software Engineer, React, Django, Flutter, TypeScript, Python, AI Integration, Portfolio" },
    { name: "author", content: "Keith Paul Nkwanda" },
    { property: "og:title", content: "Keith Paul Nkwanda - Full-Stack Developer" },
    { property: "og:description", content: "Professional portfolio showcasing full-stack development projects and software engineering expertise." },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
