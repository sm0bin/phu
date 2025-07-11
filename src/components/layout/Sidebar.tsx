import { Layout, Menu } from "antd";
import { generateSidebarItems } from "../../utils/generateSidebarItems";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const role = userRole.ADMIN; // This can be dynamically set based on the user's role
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = generateSidebarItems(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = generateSidebarItems(facultyPaths, role);
      break;
    case userRole.STUDENT:
      sidebarItems = generateSidebarItems(studentPaths, role);
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          padding: "16px 0",
          fontWeight: "bold",
        }}
        className="demo-logo-vertical"
      >
        PHU
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
