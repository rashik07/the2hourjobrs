import { filterWorkers } from "@/redux/actions/userAction";
import KeywordSearch from "components/jobs/list/KeywordSearch";
import SelectedFilter from "components/jobs/list/SelectedFilter";
import LocationFilter from "components/jobs/list/LocationFilter";
import GenderFilter from "components/jobs/list/GenderFilter";
import EmploymentStatusFilter from "components/jobs/list/EmploymentStatusFilter";
import JobCategoryFilter from "components/jobs/list/JobCategoryFilter";
import WorkerList from "components/worker/list/WorkerList";
import Navbar from "../../container/navbar/newNavbar";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Layout, Breadcrumb, Row, Col, Divider, Collapse } from "antd";
import { useRouter } from "next/router";

const { Content } = Layout;

const Workers = ({ filterWorkers }) => {
  const [filter, setFilter] = useState({});
  const [showFilterWorker, setShowFilterWorker] = useState(false);
  const showPage = useRef("job_list");
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }

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
              <Col xs={24} sm={24} md={6} lg={6} xl={6} className="Jobfilter jobfilter_pc">
                <h2>Filter By</h2>
                <JobCategoryFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                  showPage={showPage}
                />
                {/* <JobIndustryFilter filter={filter} setFilter={setFilter} /> */}
                <LocationFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                  showPage={showPage}
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
                {/* <ExperienceFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                />
                <AgeFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterWorker}
                /> */}
              </Col>
              <Collapse
                className="stepJobPostMobile"
                defaultActiveKey={["1"]}
                onChange={callback}
              >
                <Panel header="Searching Option" key="1">
                  <Col
                    xs={24}
                    sm={24}
                    md={6}
                    lg={6}
                    xl={6}
                    className="Jobfilter"
                  >
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
                      showPage={showPage}
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
                    {/* <ExperienceFilter
                      filter={filter}
                      setFilter={setFilter}
                      reload={setShowFilterWorker}
                    />
                    <AgeFilter
                      filter={filter}
                      setFilter={setFilter}
                      reload={setShowFilterWorker}
                    /> */}
                  </Col>
                </Panel>
              </Collapse>
              {/*2nd part*/}
              <Col xs={24} sm={24} md={17} lg={17} xl={17} offset={1}>
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
