import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getJobCategories } from "../../redux/actions/jobAction";
import { Layout } from "antd";

import Head from "next/head";
import Footer from "../../container/footer/footer";
import Navbar from "../../container/navbar/navbar";
import AnnouncementCreateForm from "../../components/annoucement/AnnouncementCreateForm";

const JobCategogy = ({ categories }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <Layout>
        <Navbar page="landing_page" />
        <Layout>
          <AnnouncementCreateForm />
        </Layout>
      </Layout>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.job.categories,
  };
};

export default connect(mapStateToProps, { getJobCategories })(JobCategogy);
