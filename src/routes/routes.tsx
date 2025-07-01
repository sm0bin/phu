import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminDashboard from "../pages/AdminDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import { generateRoutes } from "../utils/generateRoutes";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: generateRoutes(adminPaths),
  },
]);

export default router;
