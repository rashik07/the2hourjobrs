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
import { Layout, Breadcrumb, Row, Col, Divider } from "antd";

import { useRouter } from "next/router";

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

  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <Content className="site-layout" style={{ backgroundColor: "white" }}>
          <Row style={{ marginTop: "10px" }}>
            {/*1st part*/}
            <Col span={24}>
              <Row>
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
              <Divider />
              <h2 style={{ color: "#773EA9" }}>Job Categories</h2>
              <Row>
                <JobCategoryFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
              </Row>
              <Divider />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default connect(null, { filterJobs })(Jobs);
