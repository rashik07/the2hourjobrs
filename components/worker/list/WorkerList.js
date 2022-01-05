import LocaleProvider from "antd/lib/locale-provider";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getOtherWorkers } from "redux/actions/userAction";
import { getSavedWorkers } from "redux/actions/userAction";

import WorkerItem from "./WorkerItem";

const JobList = ({
  getOtherWorkers,
  getSavedWorkers,
  all_workers,
  filtered_workers,
  showFilterWorker,
  isSignedIn,
}) => {
  const [reaload, setReload] = useState(false);

  useEffect(() => {
    getOtherWorkers();
    getSavedWorkers();
  }, [reaload]);

  console.log(all_workers);
 
    if (showFilterWorker) {
      return filtered_workers.map((worker) => {
        if (worker.available_for_work == true) {
          return (
            <WorkerItem key={worker.id} worker={worker} setReload={setReload} />
          );
        }
      });
    }
    if (!isSignedIn) {
      return (
        <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
          Please login to access this feature
        </h1>
      );
     } else {
    if (all_workers) {
      return all_workers.map((worker) => {
        if (worker.available_for_work == true) {
          // console.log(worker.available_for_work);
          return (
            <WorkerItem key={worker.id} worker={worker} setReload={setReload} />
          );
        }
        //  return <WorkerItem key={worker.id} worker={worker} />;
      });
    }
    // else{
    //   return "please login";
    // }
  }
    return null;
  
  
};

const mapStateToProps = (state) => {
  return {
    all_workers: Object.values(state.user.all_workers),
    filtered_workers: state.user.filtered_workers,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getOtherWorkers, getSavedWorkers })(
  JobList
);
