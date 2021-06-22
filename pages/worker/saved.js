import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../../container/navbar/navbar";
import { useRouter } from "next/router";
import { getSavedWorkers } from "@/redux/actions/userAction";
import { connect } from "react-redux";
import WorkerItem from "components/worker/list/WorkerItem";

const SavedWorkerList = ({ getSavedWorkers, saved_workers, isSignedIn }) => {
  const router = useRouter();

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
      <Navbar />
      <div className="container main-body">{showSavedWorkers()}</div>
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
