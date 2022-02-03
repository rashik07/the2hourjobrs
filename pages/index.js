import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Navbar from "../container/navbar/newNavbar";
import KeywordSearch from "components/Home/list/KeywordSearch";
import LocationFilter from "components/Home/list/LocationFilter";
import JobCategoryFilter from "components/Home/list/JobCategoryFilter";
import { filterJobs } from "redux/actions/jobAction";
import {
  Layout,
  Row,
  Col,
  Divider,
  BackTop,
  Typography,
  Affix,
  Modal,
  message,
  Space,
  Button,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Notification_bar from "container/Notification_bar/Notification_bar";
// import { Button } from "antd/lib/radio";
import { getOtherWorkers, getWorkers } from "redux/actions/userAction";
import { getAllJobs, getAllJobs_withoutlogin } from "redux/actions/jobAction";
import {
  UpOutlined,
  TeamOutlined,
  AreaChartOutlined,
  UsergroupAddOutlined,
  GlobalOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import AnimatedNumber from "animated-number-react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { updateProfile } from "@/redux/actions/userAction";

const { Content } = Layout;
const { Title } = Typography;

const jobs = ({
  filterJobs,
  getOtherWorkers,
  getWorkers,
  updateProfile,

  auth,
  getAllJobs,
  getAllJobs_withoutlogin,
  user_profile,
}) => {
  const router = useRouter();
  let query = Object.keys(router.query)[0];
  const [filter, setFilter] = useState({});
  const [showFilterJobs, setShowFilterJobs] = useState(false);
  const [bottom, setBottom] = useState(10);
  const [all_jobs, setall_jobs] = useState([]);
  const showPage = useRef("job_list");
  const [workers, setworkers] = useState([]);

  const [employeer, setemployeer] = useState([]);

  useEffect(() => {
    updateProfile();
  }, []);

  useEffect(() => {
    getWorkers(1, 5, true, false, null).then((result) => {
      setemployeer(result.count);
    });
    getWorkers(1, 5, false, true, null).then((result) => {
      setworkers(result.count);
    });
    if (auth.isSignedIn) {
      getAllJobs(1, 5).then((result) => {
        setall_jobs(result.count);
      });
    } else {
      getAllJobs_withoutlogin(1, 5).then((result) => {
        setall_jobs(result.count);
      });
    }
  }, []);

  const phoneNumberAlert = () => {
    const { warning } = Modal;

    warning({
      title: "please save/verify your phone number",
      icon: <ExclamationCircleOutlined />,

      okText: "OK",
      okType: "danger",
      cancelText: "No",
      onOk() {
        router.push("/Profile");
      },
    });
  };
  const loginAlert = () => {
    message.error("Please login for access this feature");
    router.push("/");
  };

  const createPost = () => {
    if (!auth.isSignedIn) {
      return (
        <Button className="jobpost_btn_mobile" onClick={() => loginAlert()}>
          <PlusCircleOutlined />
          Post a Job
        </Button>
      );
    } else if (user_profile.phone == null) {
      return (
        <Button
          className="jobpost_btn_mobile"
          onClick={() => phoneNumberAlert()}
        >
          <PlusCircleOutlined /> Post a Job
        </Button>
      );
    } else {
      return (
        <Button
          className="jobpost_btn_mobile"
          onClick={() => router.push("/jobs/post")}
        >
          <PlusCircleOutlined />
          Post a Job
        </Button>
      );
    }
  };
  const createPostBottominpc = () => {
    if (!auth.isSignedIn) {
      return (
        <Button
          className="jobpost_btn"
          onClick={() => loginAlert()}
          style={{
            marginTop: "190px",
            marginLeft: "920px",
            width: "10%",
            height: "13%",
          }}
        >
          {/* <PlusCircleOutlined /> */}
          Post a Job
        </Button>
      );
    } else if (user_profile.phone == null) {
      return (
        <Button
          className="jobpost_btn"
          onClick={() => phoneNumberAlert()}
          style={{
            marginTop: "190px",
            marginLeft: "920px",
            width: "10%",
            height: "13%",
          }}
        >
          {/* <PlusCircleOutlined />  */}
          Post a Job
        </Button>
      );
    } else {
      return (
        <Button
          className="jobpost_btn"
          style={{
            marginTop: "190px",
            marginLeft: "920px",
            width: "10%",
            height: "13%",
          }}
        >
          {/* <PlusCircleOutlined />  */}
          <Link href="/jobs/post">Post a Job</Link>
        </Button>
      );
    }
  };

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 5,
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

        <div className="slider_pic" style={{ marginTop: "64px" }}>
          <Row>
            {/* <Notification_bar /> */}
            {/*1st part*/}
            <h1>Find jobs & hire talent. Anywhere.</h1>

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
            <Space className="search_bar banner_button">
              <Button style={{ borderRadius: "5px" }}> <Link href="/jobs/list">Find jobs</Link></Button>
              <Button
                style={{
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                  border: "1px solid",
                }}
              >
              <Link href="/worker/list"> Find talent</Link> 
              </Button>
            </Space>

            {/* <Col span={12}><img src="/img/landing.png"style={{  width: "100vh", marginTop: "7vh"}}/></Col> */}
          </Row>
        </div>
        <Row justify="space-around" className="data_section">
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Title level={4}>
              {/* <TeamOutlined className="home_icon" /> */}
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
              <AnimatedNumber
                value={10946 + workers}
                duration={2000}
                formatValue={(n) => n.toFixed(0)}
                frameStyle={(percentage) =>
                  percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                }
              />
            </Title>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Title level={4}>
              {/* <UsergroupAddOutlined className="home_icon" /> */}
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
              <AnimatedNumber
                value={2222 + employeer}
                duration={2000}
                formatValue={(n) => n.toFixed(0)}
                frameStyle={(percentage) =>
                  percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                }
              />
            </Title>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Title level={4}>
              {/* <GlobalOutlined className="home_icon" /> */}
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
              <AnimatedNumber
                value={318 + all_jobs}
                duration={1000}
                formatValue={(n) => n.toFixed(0)}
                frameStyle={(percentage) =>
                  percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                }
              />
            </Title>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Title level={4}>
              {/* <AreaChartOutlined className="home_icon" /> */}
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
              <AnimatedNumber
                value={240816}
                duration={2000}
                formatValue={(n) => n.toFixed(0)}
                frameStyle={(percentage) =>
                  percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                }
              />
            </Title>
          </Col>
        </Row>

        <Content className="site-layout-home ">
          <div className="site-layout-background">
            <h2
              style={{
                color: "darkblue",
                margin: "30px 0px 15px 0px",
                fontWeight: "bold",
              }}
            >
              Job Categories
            </h2>

            <JobCategoryFilter
              filter={filter}
              setFilter={setFilter}
              reload={setShowFilterJobs}
            />
            {/* <h2 style={{ color: "darkblue", marginTop: "15px" }}>
                Job Categories
              </h2>
              <JobCategoryFilter
                filter={filter}
                setFilter={setFilter}
                reload={setShowFilterJobs}
              /> */}
          
          </div>
          <Row>
              {/* <Divider /> */}
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div
                  style={{
                    backgroundImage: `url('/img/banner4.png')`,
                    height: "280px",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    backgroundSize:"cover",
                  }}
                  className="stepJobPostPc"
                >
                  {/* <Button className="jobpost_btn">
                    <Link href="/jobs/post">Post a Job</Link>
                  </Button> */}
                  {/* <Button className="jobpost_btn"> */}
                  {createPostBottominpc()}
                  {/* </Button> */}
                </div>
              </Col>
            </Row>
        </Content>
        <Affix offsetBottom={bottom} style={{ textAlign: "center" }}>
          {/* <Button className="jobpost_btn_mobile">
            
          </Button> */}
          {createPost()}
        </Affix>

        <BackTop>
          <div style={style}>
            <UpOutlined />
          </div>
        </BackTop>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // all_workers: Object.values(state.user.all_workers),
    // all_workers: state.user.all_workers,
    // all_jobs: state.job.all_jobs,
    auth: state.auth,
    user_profile: state.user.user_profile,
  };
};

export default connect(mapStateToProps, {
  filterJobs,
  getOtherWorkers,
  getAllJobs,
  getAllJobs_withoutlogin,
  getWorkers,
  updateProfile,
})(jobs);
