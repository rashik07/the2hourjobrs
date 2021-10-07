import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../../container/navbar/newNavbar";
import { useRouter } from "next/router";
import { getSavedWorkers } from "@/redux/actions/userAction";
import { connect } from "react-redux";
import WorkerItem from "components/worker/list/WorkerItem";
import { Layout, Breadcrumb, Row, Col, Divider } from "antd";

const SavedWorkerList = ({ getSavedWorkers, saved_workers, isSignedIn }) => {
  const router = useRouter();
  const { Content } = Layout;

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/auth/login");
    }

    getSavedWorkers();
  }, []);

  const showSavedWorkers = () => {
    if (saved_workers.length)
      return saved_workers.map((worker) => {
        return <WorkerItem key={worker.id} worker={worker} />;
      });

    return (
      <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
        You have no saved worker
      </h1>
    );
  };

  return (
    <>
      <Head>
        <title>Saved Worker list</title>
      </Head>
      <Layout>
        <Navbar />
        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Saved Worker</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">{showSavedWorkers()}</div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    saved_workers: Object.values(state.user.saved_workers),
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getSavedWorkers })(SavedWorkerList);
