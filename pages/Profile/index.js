import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../container/navbar/newNavbar";
import Sidebar from "../../container/sidebar/sidebar";
import { Layout, Breadcrumb, Row, Col } from "antd";
import Profile_info from "components/Profile/Profile_info";
import Career_application from "components/Profile/Career_application";
import Education from "components/Profile/Education";
import Employment from "components/Profile/Employment";
import Portfolio from "components/Profile/Portfolio";
import Setting from "components/Profile/Setting";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Profile = () => {
  const { Content } = Layout;
  const selector = useRef("");
  const [loader, setloader] = useState(false);

  useEffect(() => {

    setloader(false);
  }, [loader]);
  const clickPage = () => {
    if (selector.current == "") {
      console.log(selector.current);
      return <Profile_info />;
    }

    if (selector.current == "Profile_info") {
      console.log(selector.current);
      return <Profile_info />;
    }
    if (selector.current == "career") {
      //console.log(selector.current);
      return <Career_application />;
    }

    if (selector.current == "education") {
      //console.log(selector.current);
      return <Education />;
    }
    if (selector.current == "employment") {
      // console.log(selector.current);
      return <Employment />;
    }
    if (selector.current == "portfolio") {
      // console.log(selector.current);
      return <Portfolio />;
    }
    if (selector.current == "setting") {
      // console.log(selector.current);
      return <Setting />;
    }
  };

  return (
    <div>
      <Head>
        <title>Profile Info</title>
      </Head>
      <Layout>
        <Navbar />
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar setloader={setloader} selector={selector} />
          <Layout>
            <Content className="site-layout">
              <Breadcrumb className="breadcrumb_main">
                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                <Breadcrumb.Item>{selector.current}</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background">
                {/* <Router>
                  <Switch>
                    <Route exact  path="/profile">
                      <Profile_info />
                    </Route>
                 
                  </Switch>
                </Router> */}
                {clickPage(selector.current)}
                {/* <Profile_info/> */}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
