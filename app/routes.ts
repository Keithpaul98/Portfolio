import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects/*", "routes/projects.tsx", [
    index("routes/projects/index.tsx"),
    route(":projectId", "routes/projects/$projectId.tsx")
  ]),
  route("contact", "routes/contact.tsx")
] satisfies RouteConfig;
