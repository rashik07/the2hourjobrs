import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Navbar from "../container/navbar/newNavbar";
import JobList from "components/Home/list/JobList";
import KeywordSearch from "components/Home/list/KeywordSearch";
import SelectedFilter from "components/Home/list/SelectedFilter";
import LocationFilter from "components/Home/list/LocationFilter";
import PostTimeFilter from "components/Home/list/PostTimeFilter";
import DeadlineFilter from "components/Home/list/DeadlineFilter";
import GenderFilter from "components/Home/list/GenderFilter";
import EmploymentStatusFilter from "components/Home/list/EmploymentStatusFilter";
import JobCategoryFilter from "components/Home/list/JobCategoryFilter";
import JobIndustryFilter from "components/Home/list/JobIndustryFilter";
import ExperienceFilter from "components/Home/list/ExperienceFilter";
import AgeFilter from "components/jobs/list/AgeFilter";
import { filterJobs } from "redux/actions/jobAction";
import { Layout, Breadcrumb, Row, Col, Divider,BackTop } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Notification_bar from "container/Notification_bar/Notification_bar";
import { Button } from "antd/lib/radio";
import Footer from "container/footer/footer";
import { UpOutlined } from "@ant-design/icons";

const { Content } = Layout;

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
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#773ea9',
    color: '#fff',
    textAlign: 'center',
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

        <Content
          className="site-layout"
          style={{ backgroundColor: "white", margin: "16px 66px" }}
        >
          <h2 style={{ color: "#773EA9", marginTop: "15px" }}>
            Job Categories
          </h2>
          <Row>
            <JobCategoryFilter
              filter={filter}
              setFilter={setFilter}
              reload={setShowFilterJobs}
            />
          </Row>
          <Divider />
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
        </Content>
        <Footer />
        <BackTop>
          <div style={style}><UpOutlined /></div>
        </BackTop>
      </Layout>
    </>
  );
};

export default connect(null, { filterJobs })(Jobs);
