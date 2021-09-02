import Head from "next/head";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Navbar from "../../container/navbar/newNavbar";
import Footer from "../../container/footer/footer";
import JobList from "components/jobs/list/JobList";
import KeywordSearch from "components/jobs/list/KeywordSearch";
import SelectedFilter from "components/jobs/list/SelectedFilter";
import LocationFilter from "components/jobs/list/LocationFilter";
import PostTimeFilter from "components/jobs/list/PostTimeFilter";
import DeadlineFilter from "components/jobs/list/DeadlineFilter";
import GenderFilter from "components/jobs/list/GenderFilter";
import EmploymentStatusFilter from "components/jobs/list/EmploymentStatusFilter";
import JobCategoryFilter from "components/jobs/list/JobCategoryFilter";
import JobIndustryFilter from "components/jobs/list/JobIndustryFilter";
import ExperienceFilter from "components/jobs/list/ExperienceFilter";
import AgeFilter from "components/jobs/list/AgeFilter";
import { filterJobs } from "redux/actions/jobAction";

import { Layout, Breadcrumb, Row, Col, Divider } from "antd";

const { Content } = Layout;

const Jobs = ({ filterJobs }) => {
  const [filter, setFilter] = useState({});
  const [showFilterJobs, setShowFilterJobs] = useState(false);

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
      <Layout>
        <Navbar />
        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Job</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <Row>
              {/*1st part*/}
              <Col span={6} className="Jobfilter">
                <h2>Filter By</h2>
                <JobCategoryFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
                {/* <JobIndustryFilter filter={filter} setFilter={setFilter} /> */}
                <LocationFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
                <PostTimeFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
                <DeadlineFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
                <GenderFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
                <EmploymentStatusFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
                <ExperienceFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
                <AgeFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                />
              </Col>
              {/*2nd part*/}
              <Col span={17} offset={1}>
                <SelectedFilter
                  filter={filter}
                  setFilter={setFilter}
                  setShowFilter={setShowFilterJobs}
                  getFilteredList={filterJobs}
                  showFilterJobs={showFilterJobs}
                />
                <KeywordSearch
                  filter={filter}
                  setFilter={setFilter}
                  setShowFilter={setShowFilterJobs}
                  getFilteredList={filterJobs}
                  reload={showFilterJobs}
                />
                <Divider />
                <JobList filter={filter} showFilterJobs={showFilterJobs} />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default connect(null, { filterJobs })(Jobs);
