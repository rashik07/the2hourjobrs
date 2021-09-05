import React, { useState, useRef, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import Link from "next/link";
import {
  DesktopOutlined,
  RadiusSettingOutlined,
  PieChartOutlined,
  FolderOpenOutlined,
  FileOutlined,
  TeamOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const sidebar = ({ selector, setloader }) => {
  const { Title } = Typography;
  const [collapsed, setcollapsed] = useState(false);

  const collapse = () => {
    setcollapsed({ collapsed });
  };

  return (
    <div>
      <Sider
        className="sidebar-layout-background"
        width={200}
        collapsible
        collapse={collapse}
      >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <a
              href="#"
              onClick={() => {
                selector.current = "Profile_info";
                setloader(true);
              }}
            >
              Personal Info
            </a>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <a
              href="#"
              onClick={() => {
                selector.current = "career";
                setloader(true);
              }}
            >
              Career &amp; Application
            </a>{" "}
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            {" "}
            <a
              href="#"
              onClick={() => {
                selector.current = "education";
                setloader(true);
              }}
            >
              Education
            </a>
          </Menu.Item>
          <Menu.Item key="4" icon={<PieChartOutlined />}>
            {" "}
            <a
              href="#"
              onClick={() => {
                selector.current = "employment";
                setloader(true);
              }}
            >
              Employment
            </a>
          </Menu.Item>
          <Menu.Item key="5" icon={<FolderOpenOutlined />}>
            <a
              href="#"
              onClick={() => {
                selector.current = "portfolio";
                setloader(true);
              }}
            >
              Portfolio
            </a>
          </Menu.Item>

          <Menu.Item key="6" icon={<RadiusSettingOutlined />}>
            {" "}
            <a
              href="#"
              onClick={() => {
                selector.current = "setting";
                setloader(true);
              }}
            >
              Settings
            </a>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default sidebar;
