import AdminDashboard from "../pages/AdminDashboard";
import CreateStudent from "../pages/CreateStudent";
import StudentData from "../pages/StudentData";
import User from "../pages/User";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    element: <User />,
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
    ],
  },
];
