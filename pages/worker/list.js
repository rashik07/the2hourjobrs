import { filterWorkers } from "@/redux/actions/userAction";
import KeywordSearch from "components/jobs/list/KeywordSearch";
import SelectedFilter from "components/jobs/list/SelectedFilter";
import LocationFilter from "components/jobs/list/LocationFilter";
import GenderFilter from "components/jobs/list/GenderFilter";
import EmploymentStatusFilter from "components/jobs/list/EmploymentStatusFilter";
import JobCategoryFilter from "components/jobs/list/JobCategoryFilter";
import ExperienceFilter from "components/jobs/list/ExperienceFilter";
import AgeFilter from "components/jobs/list/AgeFilter";
import WorkerList from "components/worker/list/WorkerList";
import Navbar from "../../container/navbar/newNavbar";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Layout, Breadcrumb, Row, Col, Divider } from "antd";

const { Content } = Layout;

const Workers = ({ filterWorkers }) => {
  const [filter, setFilter] = useState({});
  const [showFilterWorker, setShowFilterWorker] = useState(false);

  useEffect(() => {
    if (_.isEmpty(filter)) {
      setShowFilterWorker(false);
    }
  }, [filter]);

  return (
    <>
      <Head>
        <title>Workers list</title>
      </Head>
      <Layout>
        <Navbar />
        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Worker</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <Row>
              <Col span={6} className="Jobfilter">
                <h2>Filter By</h2>
                <JobCategoryFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                />
                {/* <JobIndustryFilter filter={filter} setFilter={setFilter} /> */}
                <LocationFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                />

                <GenderFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                />
                <EmploymentStatusFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                />
                <ExperienceFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                />
                <AgeFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                />
              </Col>
              {/*2nd part*/}
              <Col span={17} offset={1}>
                <SelectedFilter
                  filter={filter}
                  setFilter={setFilter}
                  setShowFilter={setShowFilterWorker}
                  getFilteredList={filterWorkers}
                  showFilterJobs={showFilterWorker}
                />
                <KeywordSearch
                  filter={filter}
                  setFilter={setFilter}
                  setShowFilter={setShowFilterWorker}
                  reload={showFilterWorker}
                  getFilteredList={filterWorkers}
                />
                <Divider />
                <WorkerList
                  filter={filter}
                  showFilterWorker={showFilterWorker}
                />
              </Col>
            </Row>
          </div>
        </Content>
     
      </Layout>
    </>
  );
};

export default connect(null, { filterWorkers })(Workers);
