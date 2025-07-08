import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminDashboard from "../pages/AdminDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import { generateRoutes } from "../utils/generateRoutes";
import { adminPaths } from "./admin.routes";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";

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
  {
    path: "/faculty",
    element: <App />,
    children: generateRoutes(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: generateRoutes(studentPaths),
  },
]);

export default router;
