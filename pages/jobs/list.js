import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Navbar from "../../container/navbar/newNavbar";
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
import { SetfilterAction } from "../../redux/actions/jobAction";
import { Layout, Breadcrumb, Row, Col, BackTop, Divider, Collapse } from "antd";
import Index from "../index";
import { useRouter } from "next/router";
import { UpOutlined, HomeOutlined } from "@ant-design/icons";

const { Content } = Layout;

const Jobs = ({ filterJobs, filterfromState, SetfilterAction }) => {
  const router = useRouter();
  const { Panel } = Collapse;

  function callback(key) {
    // console.log(key);
  }

  const [filter, setFilter] = useState({});
  const [showFilterJobs, setShowFilterJobs] = useState(false);
  const showPage = useRef("job_list");
  const pageSize = useRef(10);
  const [page_no, setPageNo] = useState(1);
  const totaldata = useRef();
  const pageSizeFiltered = useRef(5);
  const [page_no_filter, setPageNoFilter] = useState(1);
  const totaldataFilter = useRef();
  const [filtered_jobs, setfiltered_jobs] = useState([]);
  const [reload, setReload] = useState(false);

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

  useEffect(() => {
 
    if (_.isEmpty(filter)) {
      setShowFilterJobs(false);
    }
  }, [filter, reload]);

  useEffect(() => {
    if (!_.isEmpty(filterfromState)) {
      setFilter(filterfromState);
      setShowFilterJobs(true);
    }
  }, [filterfromState]);

  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item href="/">
              {" "}
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Job List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <Row>
              {/*1st part*/}
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
                  reload={setShowFilterJobs}
                />
                {/* <JobIndustryFilter filter={filter} setFilter={setFilter} /> */}
                <LocationFilter
                  filter={filter}
                  setFilter={setFilter}
                  reload={setShowFilterJobs}
                  showPage={showPage}
                  //   query={location}
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
                      reload={setShowFilterJobs}
                    />
                    {/* <JobIndustryFilter filter={filter} setFilter={setFilter} /> */}
                    <LocationFilter
                      filter={filter}
                      setFilter={setFilter}
                      reload={setShowFilterJobs}
                      showPage={showPage}
                      //   query={location}
                    />
                    <PostTimeFilter
                      filter={filter}
                      setFilter={setFilter}
                      reload={setShowFilterJobs}
                    />
                    {/* <DeadlineFilter
                      filter={filter}
                      setFilter={setFilter}
                      reload={setShowFilterJobs}
                    /> */}
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
                </Panel>
              </Collapse>
              {/*2nd part*/}
              <Col
                xs={24}
                sm={24}
                md={17}
                lg={17}
                xl={17}
                offset={1}
                className="container"
              >
                <SelectedFilter
                  filter={filter}
                  setFilter={setFilter}
                  setShowFilter={setShowFilterJobs}
                  getFilteredList={filterJobs}
                  showFilterJobs={showFilterJobs}
                  setReload={setReload}
                  // query={location}
                  //reload={setShowFilterJobs}
                />
                <KeywordSearch
                  filter={filter}
                  setFilter={setFilter}
                  setShowFilter={setShowFilterJobs}
                  getFilteredList={filterJobs}
                  reload={showFilterJobs}
                  pageSize={pageSizeFiltered}
                  page_no={page_no_filter}
                  totaldata={totaldataFilter}
                  setPageNo={setPageNoFilter}
                  setfiltered_data={setfiltered_jobs}
                  setreload={setShowFilterJobs}
                   setlistreload={setReload}
                />
                <Divider />
                <JobList
                  filter={filter}
                  showFilterJobs={showFilterJobs}
                  pageSize={pageSize}
                  page_no={page_no}
                  totaldata={totaldata}
                  setPageNo={setPageNo}
                  pageSizeFiltered={pageSizeFiltered}
                  page_no_filter={page_no_filter}
                  totaldataFilter={totaldataFilter}
                  setPageNoFilter={setPageNoFilter}
                  filtered_jobs={filtered_jobs}
                  listreload={reload}
                />
                <BackTop>
                  <div style={style}>
                    <UpOutlined />
                  </div>
                </BackTop>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    filterfromState: state.job.filter,
  };
};

export default connect(mapStateToProps, { filterJobs, SetfilterAction })(Jobs);
