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
import {  HomeOutlined } from "@ant-design/icons";

const { Content } = Layout;

const Workers = ({ filterWorkers }) => {
  const [filter, setFilter] = useState({});
  const [showFilterWorker, setShowFilterWorker] = useState(false);
  const showPage = useRef("job_list");

  const pageSize = useRef(10);
  const [page_no, setPageNo] = useState(1);
  const totaldata = useRef();
  const pageSizeFiltered = useRef(5);
  const [page_no_filter, setPageNoFilter] = useState(1);
  const totaldataFilter = useRef();
  const [filtered_workers, setfiltered_worker] = useState([]);
  const [reload, setReload] = useState(false);

  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
   
    if (_.isEmpty(filter)) {
      setShowFilterWorker(false);
    }
    setReload(false);
  }, [filter, reload]);

  return (
    <>
      <Head>
        <title>Workers list</title>
      </Head>
      <Layout>
        <Navbar />
        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item href="/">
              {" "}
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Worker List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <Row>
              <Col
                xs={24}
                sm={24}
                md={6}
                lg={6}
                xl={6}
                className="Jobfilter jobfilter_pc"
              >
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
                  setReload={setReload}
                />
                <KeywordSearch
                  filter={filter}
                  setFilter={setFilter}
                  setShowFilter={setShowFilterWorker}
                  reload={showFilterWorker}
                  getFilteredList={filterWorkers}
                  pageSize={pageSizeFiltered}
                  page_no={page_no_filter}
                  totaldata={totaldataFilter}
                  setPageNo={setPageNoFilter}
                  setfiltered_data={setfiltered_worker}
                />
                <Divider />
                <WorkerList
                  filter={filter}
                  showFilterWorker={showFilterWorker}
                  page_no={page_no}
                  pageSize={pageSize}
                  totaldata={totaldata}
                  setPageNo={setPageNo}
                  pageSizeFiltered={pageSizeFiltered}
                  page_no_filter={page_no_filter}
                  totaldataFilter={totaldataFilter}
                  setPageNoFilter={setPageNoFilter}
                  filtered_worker={filtered_workers}
                  listreload={reload}
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
