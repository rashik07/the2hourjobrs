import React, {useState,useRef,useEffect} from 'react';
import Head from "next/head";
import Navbar from '../../container/navbar/newNavbar';
import Sidebar from "../../container/sidebar/sidebar";
import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker,
    Typography,
    Divider,
    TextArea,
    Layout, Breadcrumb, Row, Col
  } from "antd";
import Profile_info from 'components/Profile/Profile_info';

const Profile = () => {
    const { Content } = Layout;
    const selector =  useRef();
    const [loader, setloader] =  useState(false);


    useEffect(
        () => {
            //console.log(selector.current);
            
                                console.log(selector.current);
            
          
            setloader(false);
        },
        [loader],
      );
    const clickPage = () => {
        if(selector.current=="Profile_info"){
            console.log(selector.current);
            return <Profile_info/>;          
            }
        }
    return (
        <div>
                  <Head>
                    <title>Profile Info</title>
                </Head>
      <Layout>
        <Navbar />
        <Layout>
       
        <Layout>   
        <Content className="site-layout">
          
            <Breadcrumb className="breadcrumb_main">
                
                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                <Breadcrumb.Item>{selector.current}</Breadcrumb.Item>
            </Breadcrumb>
          <div className="site-layout-background">
          <Row>
            <Col span={4}><Sidebar setloader={setloader} selector={selector}/></Col>
            <Col span={2}></Col>
          
            <Col span={18}>
            {clickPage(selector.current)}
               {/* <Profile_info/> */}
          
            </Col>
            </Row>
    </div>
        </Content>
        </Layout>
        </Layout>
      </Layout>
        </div>
    );
};

export default Profile;