import Head from "next/head";
import React from "react";
import { Layout, Breadcrumb, Row, Col, Divider, Typography } from "antd";
import Navbar from "../../container/navbar/newNavbar";
import Footer from "container/footer/footer";

const WorkFlow = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  return (
    <>
      <Head>
        <title>Work Flow</title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <div style={{ paddingTop: "100px", textAlign: "center" }}>
          <h1
            className="footer_title"
          >
            HOW IT WORKS
          </h1>
          <h3>Learn how to use our website</h3>
        </div>
        <Content
          className="site-layout"
          style={{
            backgroundColor: "white",
            margin: "16px 66px",
            padding: "36px 50px",
          }}
        >
          <h1 style={{ color: "darkblue", textAlign: "center" }}>
            As A Worker
          </h1>
          <h1> Join</h1>
          <p>
            {" "}
            You need to join us by signing in if you already have an account.
            Otherwise you need to create a worker account.
          </p>
          <h1>Dashboard</h1>
          <p>
            After login, you will be redirected to dashboard page. Here you can
            see all your projects that are finished, in-progress or in-pending.
            You can browse a project and see its milestones, payment history
            etc.{" "}
          </p>
          <h1>Profile Settings</h1>
          <p>
            {" "}
            After login, you can browse your profile page and provide additional
            data. You can also edit existing data and change profile picture.
          </p>
          <h1>Job Listing</h1>
          <p>
            If you want to browse available jobs you can do that by clicking a
            category from categories-menu listed at top.
          </p>
          <h1>Submit A Proposal</h1>
          <p>
            {" "}
            You can post your proposal to a particular job from its view page.
            Here you need to fill a form that requires how you want to get paid
            by the employer. By Milestones will divide the projects into smaller
            payable parts and By Project will make the project payable at once.
          </p>
          <h1>Contact Employer</h1>
          <p>
            {" "}
            After your proposal is accepted the project is now Work-In-Progress.
            You can talk with employer through messaging. Additional milestones
            can be set and extended or edited.
          </p>
          <h1>Review/Feedback</h1>
          <p>
            {" "}
            Whenever the project is finish, worker can place a rating and
            feedback to the employer.
          </p>

          <h1 style={{ color: "darkblue", textAlign: "center" }} strong>
            As An Employer
          </h1>
          <h1> Join</h1>
          <p>
            {" "}
            You need to join us by signing in if you already have an account.
            Otherwise you need to create a worker account.
          </p>
          <h1>Dashboard</h1>
          <p>
            After login, you will be redirected to dashboard page. Here you can
            see all your projects that are finished, in-progress or in-pending.
            You can browse a project and see its milestones, payment history
            etc.{" "}
          </p>
          <h1>Profile Settings</h1>
          <p>
            {" "}
            After login, you can browse your profile page and provide additional
            data. You can also edit existing data and change profile picture.
          </p>
          <h1>Job Listing</h1>
          <p>
            If you want to browse available jobs you can do that by clicking a
            category from categories-menu listed at top.
          </p>
          <h1>Submit A Proposal</h1>
          <p>
            {" "}
            You can post your proposal to a particular job from its view page.
            Here you need to fill a form that requires how you want to get paid
            by the employer. By Milestones will divide the projects into smaller
            payable parts and By Project will make the project payable at once.
          </p>
          <h1>Contact Employer</h1>
          <p>
            {" "}
            After your proposal is accepted the project is now Work-In-Progress.
            You can talk with employer through messaging. Additional milestones
            can be set and extended or edited.
          </p>
          <h1>Review/Feedback</h1>
          <p>
            {" "}
            Whenever the project is finish, worker can place a rating and
            feedback to the employer.
          </p>
        </Content>
      </Layout>
    </>
  );
};

export default WorkFlow;
