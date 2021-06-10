import React, { useState } from "react";
import { applyJob, saveJob, deleteJob } from "@/redux/actions/jobAction";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const JobPostItem = ({
  job,
  userid,
  isSignedIn,
  applyJob,
  saveJob,
  deleteJob,
}) => {
  const router = useRouter();

  const { id, title, poster, applied, saved, applied_saved_id } = job;

  const btn_disable = userid === poster.id ? "disabled" : "";

  const [appliedStatus, setAppliedStatus] = useState(applied);
  const [savedStatus, setSavedStatus] = useState(saved);

  const getExperience = (min, max) => {
    if (min && max) {
      return `${min} to ${max} year(s)`;
    }

    if (min) {
      return `Minimum ${min} year(s)`;
    }
    return `Maximum ${max} year(s)`;
  };

  const getLocations = (location) => {
    const location_list = [];

    location.forEach((loc) => {
      location_list.push(loc.name);
    });

    return location_list.join(", ");
  };

  const getEducation = (education) => {
    const education_list = [];

    education.forEach((edu) => {
      education_list.push(edu.name);
    });

    return education_list.join(", ");
  };

  const applyJobBtnClick = () => {
    if (!isSignedIn) {
      alert("You must log in to access this feature");
      return;
    }

    applyJob(id, userid, setAppliedStatus);
  };

  const deleteJobBtnClick = () => {
    const { confirm } = Modal;

    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteJob(id);
      },
    });

    // applyJob(id, userid, setAppliedStatus);
  };

  const saveJobBtnClick = () => {
    if (!isSignedIn) {
      alert("You must log in to access this feature");
      return;
    }
    saveJob(id, userid, savedStatus, setSavedStatus, applied_saved_id);
  };

  const renderButtons = () => {
    // For self posted jobs
    if (router.pathname === "/jobs/self_posted_jobs") {
      return (
        <>
          <button className="btn button-home mt-2 rounded">Edit</button>
          <button
            onClick={() => router.push(`/jobs/detail/${id}`)}
            className="btn button-home mt-2 rounded"
          >
            Detail
          </button>
          <button
            onClick={deleteJobBtnClick}
            className={`btn button-home mt-2 rounded`}
          >
            Delete
          </button>
        </>
      );
    }

    return (
      <>
        {appliedStatus ? (
          <button className="btn button-home rounded disabled">Applied</button>
        ) : (
          <button
            onClick={applyJobBtnClick}
            className={`btn button-home rounded ${btn_disable}`}
          >
            Apply
          </button>
        )}

        <button
          onClick={() => router.push(`/jobs/detail/${id}`)}
          className="btn button-home mt-2 rounded"
        >
          Details
        </button>
        <button
          onClick={saveJobBtnClick}
          className={`btn button-home mt-2 rounded ${btn_disable}`}
        >
          {savedStatus ? "Unsave" : "Save"}
        </button>
      </>
    );
  };

  return (
    <div className="row d-flex align-items-center border m-3 rounded">
      <div className="col-9 text-muted fs-6">
        <h4 className=" text-dark">
          <strong className="title-home">{title}</strong>
          <br />
        </h4>
        <h5 className="text-dark">
          <strong>
            <Link href="/Profile/Profile_info">{poster.name}</Link>
          </strong>
          <br />
        </h5>
        <p>
          <i className="fas fa-map-marker-alt mr-2" />
          {getLocations(job.job_location)} <br />
        </p>
        <p>
          <i className="fas fa-book-open mr-2" />
          {getEducation(job.education)}
          <br />
        </p>
        <p>
          <i className="fas fa-briefcase mr-2" />
          {getExperience(job.min_experience, job.max_experience)}
        </p>
      </div>
      <div className="col-3 btn-group-vertical">{renderButtons()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userid: state.auth.id,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { applyJob, saveJob, deleteJob })(
  JobPostItem
);
