import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Navbar from "../../container/navbar/newNavbar";
import Sidebar from "../../container/sidebar/sidebar";
import { Layout, Breadcrumb, Button } from "antd";
import Profile_info from "components/Profile/Profile_info";
import Career_application from "components/Profile/Career_application";
import Education from "components/Profile/Education";
import Employment from "components/Profile/Employment";
import Portfolio from "components/Profile/Portfolio";
import Setting from "components/Profile/Setting";
import { useRouter } from "next/router";
import Link from "next/link";

const Profile = ({ auth }) => {
  const router = useRouter();
  const { Content } = Layout;
  const selector = useRef("");
  const [loader, setloader] = useState(false);
  
  useEffect(() => {
    if (!auth.isSignedIn) {
      router.push({
        pathname: "/auth/login",
      });
    }
    setloader(false);
  }, [loader]);
  const clickPage = () => {
    if (selector.current == "") {
     
      return <Profile_info />;
    }

    if (selector.current == "Profile_info") {
    
      return <Profile_info />;
    }
    if (selector.current == "career") {
   
      return <Career_application />;
    }

    if (selector.current == "education") {
    
      return <Education />;
    }
    if (selector.current == "employment") {
 
      return <Employment />;
    }
    if (selector.current == "portfolio") {
  
      return <Portfolio />;
    }
    if (selector.current == "setting") {

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
            <Content className="site-layout" style={{ padding: "0 50px" }}>
              <Breadcrumb className="breadcrumb_main">
                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                <Breadcrumb.Item>{selector.current}</Breadcrumb.Item>

                <a href={`/Profile/Profile_details/${auth.id}`} target="_blank">
                  <Button
                    type="primary"
                    style={{
                      float: "right",
                      backgroundColor: "#f5222d",
                      border: "1px solid #ffffff",
                      color: "#ffffff",
                    }}
                  >
                    Preview My Profile
                  </Button>
                </a>
              </Breadcrumb>

              <div className="site-layout-background site-layout-background-profile-mobile">
                {clickPage(selector.current)}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Profile);
