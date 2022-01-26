import { saveWorker } from "@/redux/actions/userAction";
import React, { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Row, Col, Image,Tooltip} from "antd";
import {
  PhoneOutlined,
  ScheduleOutlined,
  EnvironmentOutlined,
  UserOutlined,
  EditOutlined,
  PushpinFilled,
  SaveOutlined,
} from "@ant-design/icons";
import { PhoneFilled, HomeFilled } from "@ant-design/icons";

const renderButtons = (
  id,
  saved_user_instance_id,
  setSavedStatus,
  saveWorker,
  isSignedIn,
  savedStatus,
  savedWorkerList,
  setReload,
) => {
  // console.log(savedWorkerList);
  
  let isSaved = false;
  let savedId = null;
  savedWorkerList.forEach((item) => {
    if (item.saved_user_profile.id === id) {
      isSaved = true;
      savedId = item.id;
    }
  });
  const saveWorkerBtnClick = () => {
    if (!isSignedIn) {
      alert("You must log in to access this feature");
      return;
    }
    saveWorker(id, saved_user_instance_id, setSavedStatus, isSaved, savedId, setReload);
    window.location.reload();
  };
  const saveShow = () => {
    if (isSaved) {
      return (
        <Tooltip title="press to unsave">
        <SaveOutlined
          onClick={saveWorkerBtnClick}
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
    //  console.log(self_posted_jobs);
    return (
      <Tooltip title="press to save">
      <PushpinFilled
        onClick={saveWorkerBtnClick}
        style={{
          fontSize: "20px",
          color: "#0E8044",
          marginTop: "5px",
          float: "right",
        }}
      /></Tooltip>
    );
  };
  return <>{saveShow()}</>;
};

const WorkerItem = ({ worker, saveWorker, isSignedIn, savedWorkerList, setReload }) => {
  console.log(worker);
  const {
    id,
    name,
    hide_phone,
    username,
    phone,
    bio,
    email,
    saved_user_instance_id,
    address,
    image,
  } = worker;

  // console.log(hide_phone);

  const router = useRouter();

  let show_save_button = true;

  if (router.pathname === "/worker/saved") {
    show_save_button = false;
  }

  const [savedStatus, setSavedStatus] = useState(saved_user_instance_id);

  return (
    <>
      <Row className="job_post">
        <Col xs={24} sm={24} md={4} lg={4} xl={4}>
          {image ? (
            <Image
              shape="circle"
              width={100}
              height={100}
              src={image}
              preview={false}
            />
          ) : (
            <Image
              width={100}
              height={100}
              src="error"
              fallback="data:image/png;base64,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"
            />
          )}
        </Col>
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
          {/* <Row>
            <Col span={21}>
              <PopupDetails job={job} />
            </Col>
            <Col span={3}>{renderButtons()}</Col>
          </Row> */}
          {renderButtons(
            id,
            savedStatus,
            setSavedStatus,
            saveWorker,
            isSignedIn,
            show_save_button,
            savedWorkerList,
            setReload,
          )}
          <h4 style={{ color: "gray" }}>
            <UserOutlined />{" "}
            <Link  href={{ pathname: '/Profile/Profile_details/', query: { id: id } }}>{username}</Link>{" "}
            {/* <EnvironmentOutlined /> {getLocations(job.job_location)} */}
          </h4>
          <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            {bio === "null" ? "" : bio}
          </p>

          <p>
            {/* <EditOutlined /> {getEducation(job.education)} */}
            {hide_phone== true
            ? " "
            :( phone)}
            {"      "}
            <HomeFilled /> {"  "}
            {email}
          </p>

          <p>
            <ScheduleOutlined /> {address}
            {/* {getExperience(job.min_experience, job.max_experience)} */}
          </p>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    savedWorkerList: state.user.saved_workers,
  };
};

export default connect(mapStateToProps, { saveWorker })(WorkerItem);
