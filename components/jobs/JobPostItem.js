import React, { useState } from "react";
import { applyJob, saveJob, deleteJob } from "@/redux/actions/jobAction";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import PopupDetails from "./PopupDetails";

import { Modal } from "antd";
import {
  ExclamationCircleOutlined,
  PushpinFilled,
  PushpinTwoTone,
} from "@ant-design/icons";

import { Layout, Breadcrumb, Row, Col } from "antd";
import {
  PhoneOutlined,
  ScheduleOutlined,
  EnvironmentOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";

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
    console.log(location_list);

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
          <button
            onClick={() => router.push(`/jobs/edit/${id}`)}
            className="btn button-home mt-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => router.push(`/jobs/detail/${id}`)}
            className="btn button-home mt-2 rounded"
          >
            Detail
          </button>
          <PushpinOutlined onClick={() => router.push(`/jobs/detail/${id}`)} />
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
        if () {}
        {appliedStatus ? (
          ""
        ) : (
          <a
            style={{
              color: "black",
              padding: "2px",
              borderBottom: "5px solid #F9BE02",
              borderColor: "#F9BE02",
            }}
            onClick={applyJobBtnClick}
          >
            Apply
          </a>
        )}
        {/* <button
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
        </button> */}
        <PushpinFilled
          onClick={saveJobBtnClick}
          style={{
            fontSize: "20px",
            color: "#0E8044",
            marginTop: "5px",
            float: "right",
          }}
        />
      </>
    );
  };

  return (
    <Row className="job_post">
      <Col span={24}>
        <Row>
          <Col span={21}>
            <PopupDetails job={job} />
          </Col>
          <Col span={3}>{renderButtons()}</Col>
        </Row>
        <h4 style={{ color: "gray" }}>
          <UserOutlined />{" "}
          <Link href="/Profile/Profile_info">{poster.name}</Link>{" "}
          <EnvironmentOutlined /> {getLocations(job.job_location)}
        </h4>
        <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <p>
          <EditOutlined /> {getEducation(job.education)}
        </p>
        <p>
          <ScheduleOutlined />{" "}
          {getExperience(job.min_experience, job.max_experience)}
        </p>
      </Col>
    </Row>
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
