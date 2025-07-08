import React from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content, Footer } = Layout;
type MenuItem = {
  key: string;
  icon?: React.ReactNode;
  label: string;
  children?: MenuItem[];
};

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
// const items: MenuItem[] = [
//   {
//     key: "1",
//     icon: <UserOutlined />,
//     label: "nav 1",
//   },
//   {
//     key: "2",
//     icon: <VideoCameraOutlined />,
//     label: "nav 2",
//     children: [
//       {
//         key: "2-1",
//         label: "option 1",
//       },
//       {
//         key: "2-2",
//         label: "option 2",
//       },
//     ],
//   },
//   {
//     key: "3",
//     icon: <UploadOutlined />,
//     label: "nav 3",
//   },
//   {
//     key: "4",
//     icon: <UserOutlined />,
//     label: "nav 4",
//   },
// ];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", height: "100vh" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
