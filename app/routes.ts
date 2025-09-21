import { type RouteConfig, route,layout } from "@react-router/dev/routes";

export default [
    layout("routes/navbar/Navbar-Layout.tsx", [
        route("home",'routes/navbar/Home.tsx'),
        route("tasks",'routes/navbar/Tasks.tsx'),
        route("users",'routes/navbar/Users.tsx'),
    ]),
    

] satisfies RouteConfig;
