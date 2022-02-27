import React, { useState, useEffect } from "react";
import {
  applyJob,
  saveJob,
  deleteJob,
  getSelfPostedJobs,
  getAllJobs,
  getAppliedJobsPerson,
} from "@/redux/actions/jobAction";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import PopupDetails from "./PopupDetails";
import { Modal, Button, Pagination, message } from "antd";
import { ExclamationCircleOutlined, PushpinFilled } from "@ant-design/icons";
import { Row, Col, List, Tooltip } from "antd";
import {
  PhoneOutlined,
  ScheduleOutlined,
  EnvironmentOutlined,
  UserOutlined,
  CalendarOutlined,
  EditOutlined,
  SaveOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const JobPostItem = ({
  job,
  userid,
  isSignedIn,
  applyJob,
  saveJob,
  deleteJob,
  getSelfPostedJobs,
  loader,
  show_save_button,
  self_posted_jobs,
  getAppliedJobsPerson,
  applied_jobs_person,
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
    return "";
  };

  // useEffect(() => {
  //   getSelfPostedJobs();
  // }, []);

  const getLocations = (location) => {
    const location_list = [];
    if (location) {
      location.forEach((loc) => {
        location_list.push(loc.name);
      });

      return location_list.join(", ");
    }
  };

  const getEducation = (education) => {
    const education_list = [];
    if (education) {
      education.forEach((edu) => {
        education_list.push(edu.name);
      });

      return education_list.join(", ");
    }
  };
  const getPostTime = () => {
    const moment = require("moment");

    const m = moment(new Date(job.posting_timestamp));

    return m.format("LL");
  };

  const applyJobBtnClick = () => {
    if (!isSignedIn) {
      alert("You must log in to access this feature");
    } else {
      applyJob(id, userid, appliedStatus, setAppliedStatus);
      alert("successfully");
    }
  };

  const saveJobBtnClick = () => {
    if (!isSignedIn) {
      message.error("You must log in to access this feature");
    } else {
      saveJob(id, userid, savedStatus, setSavedStatus, applied_saved_id);

      // window.location.reload();
      loader(savedStatus);
    }
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
        window.location.reload();
      },
    });

    // applyJob(id, userid, setAppliedStatus);
  };
  const deleteShow = () => {
    if (btn_disable) {
      return (
        <DeleteOutlined
          onClick={deleteJobBtnClick}
          style={{
            fontSize: "20px",

            marginTop: "5px",
            float: "right",
            marginLeft: "15px",
          }}
        />
      );
    }
    return " ";
  };

  const applyShow = () => {
    if (appliedStatus) {
      return (
        <Button
          type="primary"
          shape="round"
          onClick={applyJobBtnClick}
          disabled
        >
          Applied
        </Button>
      );
    } else if (btn_disable) {
      return "";
    }
    return (
      <Button type="primary" shape="round" onClick={applyJobBtnClick}>
        Apply Now
      </Button>
    );
  };
  const saveShow = () => {
    if (savedStatus) {
      return (
        <Tooltip title="press to unsave">
          <SaveOutlined
            onClick={saveJobBtnClick}
            style={{
              fontSize: "20px",
              color: "#0E8044",
              marginTop: "5px",
              float: "right",
            }}
          />
        </Tooltip>
      );
    }

    return (
      <Tooltip title="press to save">
        <PushpinFilled
          onClick={saveJobBtnClick}
          style={{
            fontSize: "20px",
            color: "#0E8044",
            marginTop: "5px",
            float: "right",
          }}
        />
      </Tooltip>
    );
  };

  const renderButtons = () => {
    // For self posted jobs
    if (router.pathname === "/jobs/my_posts") {
      return (
        <>
          {/* {applyShow()} */}

          <Link
            // href={"/jobs/edit/[id]"} as={`/jobs/edit/${id}`}
            href={{ pathname: "/jobs/edit/", query: { id: id } }}
          >
            <Button
              type="primary"
              block
              style={{ marginBottom: "5px", width: "50px" }}
            >
              Edit
            </Button>
          </Link>
          {deleteShow()}
        </>
      );
    }

    return (
      <>
        {/* {applyShow()} */}

        {saveShow()}

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
      </>
    );
  };

  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize("default");
  };
  return (
    <>
      <Row className="job_post">
        <Col span={24}>
          <Row>
            <Col xs={24} sm={24} md={22} lg={22} xl={22}>
              <PopupDetails job={job} onClick={showDefaultDrawer} size={size} />
            </Col>
            <Col span={2}>{renderButtons()}</Col>
            <p style={{ fontWeight: "700" }}>
              <UserOutlined />{" "}
              <Link
                href={{
                  pathname: "/Profile/Profile_details/",
                  query: { id: poster.id },
                }}
              >
                <a target="_blank"> {poster.username}</a>
              </Link>
            </p>
            {"   "}
            <p>
              <CalendarOutlined style={{ marginLeft: "10px" }} /> Published on:{" "}
              {getPostTime()}
            </p>
          </Row>

          {/* {job.posting_timestamp} */}

          {/* <h4 style={{ color: "gray" }}>
            <UserOutlined />{" "}
            <Link
              href={{
                pathname: "/Profile/Profile_details/",
                query: { id: poster.id },
              }}
            >
              {poster.username}
            </Link>{" "}
          </h4> */}
          <p>
            <EnvironmentOutlined />
            {getLocations(job.job_location)}
          </p>
          {/* onClick={() => router.push(`/jobs/detail/${job.id}`)} */}
          {/* <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          {job.skills} {" "}
        </p> */}

          <p>
            {getEducation(job.education) ? (
              <>
                {" "}
                <EditOutlined />
                {getEducation(job.education)}
              </>
            ) : (
              " "
            )}
          </p>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }}>
              {getExperience(job.min_experience, job.max_experience) ? (
                <>
                  {" "}
                  <ScheduleOutlined />{" "}
                  {getExperience(job.min_experience, job.max_experience)}{" "}
                </>
              ) :(
                ""
              )}
             
            </p>
            <p>
              <CalendarOutlined /> Deadline: {job.deadline ? job.deadline : " "}
            </p>
          </div>
          {/* {appliedPerson()} */}
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userid: state.auth.id,
    isSignedIn: state.auth.isSignedIn,
    self_posted_jobs: Object.values(state.job.self_posted_jobs),
    applied_jobs_person: state.job.applied_jobs_person,
  };
};

export default connect(mapStateToProps, {
  applyJob,
  saveJob,
  deleteJob,
  getSelfPostedJobs,
  getAppliedJobsPerson,
})(JobPostItem);
