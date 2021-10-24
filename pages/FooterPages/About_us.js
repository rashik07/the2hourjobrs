import Head from "next/head";
import React from "react";
import { Layout, Typography } from "antd";
import Navbar from "../../container/navbar/newNavbar";
import Footer from "container/footer/footer";

const About_us = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  return (
    <>
      <Head>
        <title>ABOUT US</title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <div style={{ paddingTop: "100px", textAlign: "center" }}>
          <h1
            style={{ borderBottom: "4px solid #ffc800", margin: "0px 610px" }}
          >
            ABOUT US
          </h1>
          <h3>How we grew into what we are today.</h3>
        </div>
        <Content
          className="site-layout"
          style={{ backgroundColor: "white", margin: "16px 66px" ,padding: "36px 50px" }}
        >
          <h1> Our Story</h1>
          <p>
            {" "}
            The most vibrant and active time of a woman (i.e. 20 years to 40
            years) is spent in household responsibilities and raising children.
            Where as men can achieve a lot and reach their pinnacle of career
            success by then. Even if both has acquired similar academic
            qualification, woman has to let go her dream, skill and vision
            because she has got other responsibilities on her shoulder!
          </p>
          <h1>Our Why?</h1>
          <p>
            Wait! A woman is beautiful by her balance! She is great because of
            her contribution and responsibilities to her family! But her
            greatness should not take her dreams away!{" "}
          </p>
          <h1>Our How?</h1>
          <p>
            {" "}
            Do you know, there are still millions of families in our country
            where women are major earning member or simply breadwinner?
            Irrespective of being married or not! They are playing a major role
            as a daughter, or wife or mother!
          </p>
          <h1>Our What?</h1>
          <p>
            So instead of organizing a patchwork of taking her to motivational
            workshop, buy her a pass for empowerment sessions or enroll her in
            some training sessions, we give her a platform. A platform to pursue
            whatever she is good at, and earn for herself. From wherever she is
            standing in the world!
          </p>
          <h1> Our When?</h1>
          <p> So there we go! </p>
          <p>
            {" "}
            We bring “the2hourjob” on life. By focusing her freedom to earn her
            own livelihood, from her own place without being someone else's
            agenda, we help her flourish in a dignified manner.
          </p>
          <p>
            {" "}
            And we believe , creating jobs for woman is crucially important for
            a balanced social improvement. research shows that women will spend
            up to 90% of their earnings on the health, nutrition and education
            of their families. Turning women into breadwinners improves their
            status in the community, builds self-esteem and enables them to pool
            resources to improve infrastructure.
          </p>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default About_us;
