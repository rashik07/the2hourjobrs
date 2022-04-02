import React, { useState, useRef, useEffect } from "react";
import { Layout, Menu, Button, Typography } from "antd";
import {
  DesktopOutlined,
  RadiusSettingOutlined,
  PieChartOutlined,
  FolderOpenOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Sidebar_mobile = ({ selector, setloader }) => {
  const { Title } = Typography;
  const [collapsed, setcollapsed] = useState(true);

  const collapse = () => {
    setcollapsed({ collapsed });
  };

  return (
    <div>
      <Sider
        className="sidebar-layout-background-mobile"
        // width={200}
        // collapsible
        // // collapsed
        // collapse={collapse}
      >
  
        <Menu defaultSelectedKeys={["1"]} mode="vertical">
         
          <Menu.Item key="1" icon={<UserOutlined />}>
            <a
              href="#"
              onClick={() => {
                selector.current = "Profile_info";
                setloader(true);
              }}
            >
              {/* Personal Info */}
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
              {/* Career &amp; Application */}
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
              {/* Education */}
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
              {/* Employment */}
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
              {/* Portfolio */}
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
              {/* Settings */}
            </a>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar_mobile;
