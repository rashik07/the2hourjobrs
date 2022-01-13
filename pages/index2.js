// import Head from "next/head";
// import React, { useState, useEffect, useRef } from "react";
// import { connect } from "react-redux";
// import Navbar from "../container/navbar/newNavbar";
// import JobList from "components/jobs/list/JobList";
// import KeywordSearch from "components/jobs/list/KeywordSearch";
// import SelectedFilter from "components/jobs/list/SelectedFilter";
// import LocationFilter from "components/jobs/list/LocationFilter";
// import PostTimeFilter from "components/jobs/list/PostTimeFilter";
// import DeadlineFilter from "components/jobs/list/DeadlineFilter";
// import GenderFilter from "components/jobs/list/GenderFilter";
// import EmploymentStatusFilter from "components/jobs/list/EmploymentStatusFilter";
// import JobCategoryFilter from "components/jobs/list/JobCategoryFilter";
// import JobIndustryFilter from "components/jobs/list/JobIndustryFilter";
// import ExperienceFilter from "components/jobs/list/ExperienceFilter";
// import AgeFilter from "components/jobs/list/AgeFilter";
// import { filterJobs } from "redux/actions/jobAction";
// import { Layout, Breadcrumb, Row, Col, Divider, Button } from "antd";
// import { getLocationList } from "redux/actions/jobAction";
// import Location from "components/Home/Location";
// import LocationHome from "components/Home/LocationHome";

// const Index = ({ filterJobs }) => {
//   const { Content } = Layout;
//   const showPage = useRef("");
//   const [filter, setFilter] = useState({});
//   const [showFilterJobs, setShowFilterJobs] = useState(false);
//   //showPage.current == "job_list";

//   useEffect(() => {
//     if (_.isEmpty(filter)) {
//       setShowFilterJobs(false);
//     }
//   }, [filter]);

//   const showListPage = () => {
//     if (showPage.current == "job_list") {
//       console.log(showPage.current);
//       return (
//         <Layout className="layout">
//           <Navbar />
//           <Content className="site-layout">
//             <Breadcrumb className="breadcrumb_main">
//               <Breadcrumb.Item>Home</Breadcrumb.Item>
//               <Breadcrumb.Item>Job</Breadcrumb.Item>
//               <Breadcrumb.Item>List</Breadcrumb.Item>
//             </Breadcrumb>
//             <div className="site-layout-background">
//               <Row>
//                 {/*1st part*/}
//                 <Col span={6} className="Jobfilter">
//                   <h2>Filter By</h2>
//                   <JobCategoryFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     reload={setShowFilterJobs}
//                   />
//                   {/* <JobIndustryFilter filter={filter} setFilter={setFilter} /> */}
//                   <LocationFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     reload={setShowFilterJobs}
//                     //    setShowPage={setShowPage}
//                     showPage={showPage}
//                   ></LocationFilter>
//                   <PostTimeFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     reload={setShowFilterJobs}
//                   />
//                   <DeadlineFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     reload={setShowFilterJobs}
//                   />
//                   <GenderFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     reload={setShowFilterJobs}
//                   />
//                   <EmploymentStatusFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     reload={setShowFilterJobs}
//                   />
//                   <ExperienceFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     reload={setShowFilterJobs}
//                   />
//                   <AgeFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     reload={setShowFilterJobs}
//                   />
//                 </Col>
//                 {/*2nd part*/}
//                 <Col span={17} offset={1}>
//                   <SelectedFilter
//                     filter={filter}
//                     setFilter={setFilter}
//                     setShowFilter={setShowFilterJobs}
//                     getFilteredList={filterJobs}
//                     showFilterJobs={showFilterJobs}
//                     //reload={setShowFilterJobs}
//                   />
//                   <KeywordSearch
//                     filter={filter}
//                     setFilter={setFilter}
//                     setShowFilter={setShowFilterJobs}
//                     getFilteredList={filterJobs}
//                     reload={showFilterJobs}
//                     //reload={setShowFilterJobs}
//                   />
//                   <Divider />
//                   <JobList filter={filter} showFilterJobs={showFilterJobs} />
//                 </Col>
//               </Row>
//             </div>
//           </Content>
//         </Layout>
//       );
//     }
//     if (showPage.current == "") {
//       console.log(showPage.current);
//       return (
//         <Layout>
//           <Navbar />
//           <Content
//             className="site-layout"
//             style={{ padding: "0 50px", marginTop: 64 }}
//           >
//             <Breadcrumb className="breadcrumb_main"></Breadcrumb>
//             <div
//               className="site-layout-background"
//               style={{ padding: 24, minHeight: 380 }}
//             >
//               <LocationFilter
//                 filter={filter}
//                 setFilter={setFilter}
//                 reload={setShowFilterJobs}
//                 //   setShowPage={setShowPage}
//                 showPage={showPage}
//               ></LocationFilter>

//               <a
//                 href="#"
//                 onClick={() => {
//                   showPage.current = "job_list";
//                 }}
//               >
//                 dsfsd
//               </a>
//             </div>
//           </Content>
//         </Layout>
//       );
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Job list</title>
//       </Head>
//       {showListPage(showPage.current)}
//     </>
//   );
// };

// //export default Index;
// //export default connect(null, { filterJobs })(Index);
// const mapStateToProps = (state) => {
//   return {
//     location: state.job.location,
//   };
// };

// export default connect(mapStateToProps, { filterJobs, getLocationList })(Index);
