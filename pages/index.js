import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Navbar from "../container/navbar/newNavbar";
import JobList from "components/Home/list/JobList";
import KeywordSearch from "components/Home/list/KeywordSearch";
import SelectedFilter from "components/Home/list/SelectedFilter";
import LocationFilter from "components/Home/list/LocationFilter";
import JobCategoryFilter from "components/Home/list/JobCategoryFilter";
import { filterJobs } from "redux/actions/jobAction";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Divider,
  BackTop,
  Typography,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Notification_bar from "container/Notification_bar/Notification_bar";
import { Button } from "antd/lib/radio";
import Footer from "container/footer/footer";
import {
  UpOutlined,
  TeamOutlined,
  AreaChartOutlined,
  UsergroupAddOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title } = Typography;

const Jobs = ({ filterJobs }) => {
  const router = useRouter();
  let query = Object.keys(router.query)[0];
  const [filter, setFilter] = useState({});
  const [showFilterJobs, setShowFilterJobs] = useState(false);
  const showPage = useRef("job_list");

  useEffect(() => {
    if (_.isEmpty(filter)) {
      setShowFilterJobs(false);
    }
  }, [filter]);
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: " rgb(109, 183, 132)",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  return (
    <>
      <Head>
        <title>the2hourjob</title>
      </Head>
      <Layout className="layout">
        <Navbar />

        <div style={{ marginTop: "64px" }}>
          <Row>
            <Notification_bar />
            {/*1st part*/}

            <KeywordSearch
              filter={filter}
              setFilter={setFilter}
              setShowFilter={setShowFilterJobs}
              getFilteredList={filterJobs}
              reload={showFilterJobs}
              //reload={setShowFilterJobs}
            />

            <LocationFilter
              filter={filter}
              setFilter={setFilter}
              reload={setShowFilterJobs}
              //setShowPage={setShowPage}
              showPage={showPage}
            />
          </Row>
        </div>
        <Row justify="space-around" className="data_section">
          {/* <TeamOutlined className="home_icon" /> */}
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Title level={4}>
              <TeamOutlined className="home_icon" />
              Workers{" "}
            </Title>{" "}
            <Title
              level={2}
              style={{
                marginTop: "-3px",
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              10946
            </Title>
          </Col>
          {/* <TeamOutlined className="home_icon" /> */}
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Title level={4}>
              <UsergroupAddOutlined className="home_icon" />
              Employers
            </Title>{" "}
            <Title
              level={2}
              style={{
                marginTop: "-3px",
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              2222
            </Title>
          </Col>
          {/* <TeamOutlined className="home_icon" /> */}
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Title level={4}>
              <GlobalOutlined className="home_icon" />
              Ongoing Jobs
            </Title>{" "}
            <Title
              level={2}
              style={{
                marginTop: "-3px",
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              318
            </Title>
          </Col>
          {/* <TeamOutlined className="home_icon" /> */}
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Title level={4}>
              <AreaChartOutlined className="home_icon" />
              Total Visitors
            </Title>{" "}
            <Title
              level={2}
              style={{
                marginTop: "-3px",
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              240816
            </Title>
          </Col>
        </Row>

        <Content
          className="site-layout"
        
        >
          <h2 style={{ color: "darkblue", marginTop: "15px" }}>
            Job Categories
          </h2>
          <Row>
            <JobCategoryFilter
              filter={filter}
              setFilter={setFilter}
              reload={setShowFilterJobs}
            />

            <Divider />
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div
              style={{
                backgroundImage: `url('/img/banner2.png')`,
                height: "280px",
                marginBottom: "15px",
              }}
            >
              <Button className="jobpost_btn">
                <Link href="/jobs/post">Post a Job</Link>
              </Button>
            </div>
            </Col>
          </Row>
        </Content>

        <Footer />
        <BackTop>
          <div style={style}>
            <UpOutlined />
          </div>
        </BackTop>
      </Layout>
    </>
  );
};

export default connect(null, { filterJobs })(Jobs);
