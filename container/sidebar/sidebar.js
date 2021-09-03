import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from "next/link";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const sidebar = ({selector,setloader}) => {

  return (
    <div>
   
              <a href="#" icon={<PieChartOutlined />} onClick={()=>{
             
                selector.current = "Profile_info";
                setloader(true);
              }}> Personal Info</a> <br/>

              <a href="#" icon={<PieChartOutlined />} onClick={()=>{
               
                selector.current = "career";
                setloader(true);
              }}>Career &amp; Application</a> <br/>

              <a href="#" icon={<PieChartOutlined />} onClick={()=>{
               
               selector.current = "education";
               setloader(true);
              }}>Education</a> <br/>

              <a href="#" icon={<PieChartOutlined />} onClick={()=>{
               
               selector.current = "employment";
               setloader(true);
              }}>Employment</a> <br/>

              <a href="#" icon={<PieChartOutlined />} onClick={()=>{
               
               selector.current = "portfolio";
               setloader(true);
              }}>Portfolio</a> <br/>

              <a href="#" icon={<PieChartOutlined />} onClick={()=>{
               
               selector.current = "setting";
               setloader(true);
              }}>Settings</a> <br/>
      
           
          
          
    </div>
  );
};

export default sidebar;
