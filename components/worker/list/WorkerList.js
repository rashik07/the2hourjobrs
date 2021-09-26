import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getOtherWorkers } from "redux/actions/userAction";
import WorkerItem from "./WorkerItem";

const JobList = ({
  getOtherWorkers,
  all_workers,
  filtered_workers,
  showFilterWorker,
}) => {
  useEffect(() => {
    getOtherWorkers();
  }, []);

  if (showFilterWorker) {
    return filtered_workers.map((worker) => {
      return <WorkerItem key={worker.id} worker={worker} />;
    });
  }

  if (all_workers)
    return all_workers.map((worker) => {
      return <WorkerItem key={worker.id} worker={worker} />;
    });

  return null;
};

const mapStateToProps = (state) => {
  return {
    all_workers: Object.values(state.user.all_workers),
    filtered_workers: state.user.filtered_workers,
  };
};

export default connect(mapStateToProps, { getOtherWorkers })(JobList);
