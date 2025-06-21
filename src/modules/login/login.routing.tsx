import { RouteObject } from "react-router";
import Login from ".";

export const loginRoutes: RouteObject = {
    path: 'login',
    index: true,
    element: <Login />
}