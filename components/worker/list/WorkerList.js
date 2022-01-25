import LocaleProvider from "antd/lib/locale-provider";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getOtherWorkers } from "redux/actions/userAction";
import { getSavedWorkers } from "redux/actions/userAction";
import WorkerItem from "./WorkerItem";
import { List, Pagination } from "antd";

const JobList = ({
  getOtherWorkers,
  getSavedWorkers,
  // all_workers,
  filtered_workers,
  showFilterWorker,
  isSignedIn,
  page_no,
  pageSize,
  totaldata,
  setPageNo,
  filtered_worker,
  listreload,
  pageSizeFiltered,
  page_no_filter,
  totaldataFilter,
  setPageNoFilter,
}) => {
  const [reaload, setReload] = useState(false);
  const [all_workers, setAll_workers] = useState();

  useEffect(() => {
    totaldata.current = 0;
    getOtherWorkers(page_no, pageSize.current).then((result) => {
      console.log(result);
      totaldata.current = result.count;
      setAll_workers(result.results);
      
    });
  
    getSavedWorkers();
  }, [page_no, reaload, listreload]);

  console.log(all_workers);

  const worksList =(worker)=>{
   
      return (
        <WorkerItem key={worker.id} worker={worker} setReload={setReload} />
      );
    
 
  }

  if (showFilterWorker) {
    return (
      <>
        <List
          pagination={{
            onChange: (page_no) => {
              setPageNoFilter(page_no);
            },
            current: page_no_filter,
            pageSize: pageSizeFiltered.current,
            defaultCurrent: page_no_filter,
            total: totaldataFilter.current,
          }}
          
          dataSource={filtered_worker}
          renderItem={(workers) => worksList(workers)}
        />

      </>
    );
  }
  if (!isSignedIn) {
    return (
      <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
        Please login to access this feature
      </h1>
    );
  } else {
    if (all_workers) {
      return (
        <>
          <List
            pagination={{
              onChange: (page_no) => {
                console.log(page_no);
                setPageNo(page_no);
              },
              current: page_no,
              pageSize: pageSize.current,
              defaultCurrent: page_no,
              total: totaldata.current,
            }}
            dataSource={all_workers}
            renderItem={(workers) => worksList(workers)}
          />
  
        </>
      );
    }
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    // all_workers: Object.values(state.user.all_workers),
    // filtered_workers: state.user.filtered_workers,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getOtherWorkers, getSavedWorkers })(
  JobList
);
