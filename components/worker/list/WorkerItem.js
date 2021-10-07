import { saveWorker } from "@/redux/actions/userAction";
import React, { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { Layout, Breadcrumb, Row, Col, Image } from "antd";
import {
  PhoneOutlined,
  ScheduleOutlined,
  EnvironmentOutlined,
  UserOutlined,
  EditOutlined,
  PushpinFilled,
  SaveOutlined,
} from "@ant-design/icons";

const renderButtons = (
  id,
  saved_user_instance_id,
  setSavedStatus,
  saveWorker,
  isSignedIn,
  show_save_button,
  savedStatus
) => {
  const saveWorkerBtnClick = () => {
    if (!isSignedIn) {
      alert("You must log in to access this feature");
      return;
    }
    saveWorker(id, saved_user_instance_id, setSavedStatus);
  };
  const saveShow = () => {
    if (saved_user_instance_id) {
      return (
        <SaveOutlined
          onClick={saveWorkerBtnClick}
          style={{
            fontSize: "20px",
            color: "#0E8044",
            marginTop: "5px",
            float: "right",
          }}
        />
      );
    }
    //  console.log(self_posted_jobs);
    return (
      <PushpinFilled
        onClick={saveWorkerBtnClick}
        style={{
          fontSize: "20px",
          color: "#0E8044",
          marginTop: "5px",
          float: "right",
        }}
      />
    );
  };
  return <>{saveShow()}</>;
};

const WorkerItem = ({ worker, saveWorker, isSignedIn }) => {
  // console.log(worker);
  const { id, name, phone, email, saved_user_instance_id, image } = worker;

  const router = useRouter();

  let show_save_button = true;

  if (router.pathname === "/worker/saved") {
    show_save_button = false;
  }

  const [savedStatus, setSavedStatus] = useState(saved_user_instance_id);

  return (
    <>
      <Row className="job_post">
        <Col span={4}>
          <Image
            
            shape="circle"
            width={100}
            height={100}
            src={"http://127.0.0.1:8000" + image}
            preview={false}
          />
        </Col>
        <Col span={20}>
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
            show_save_button
          )}
          <h4 style={{ color: "gray" }}>
            <UserOutlined />{" "}
            <Link href={`/Profile/Profile_details/${id}`}>{name}</Link>{" "}
            {/* <EnvironmentOutlined /> {getLocations(job.job_location)} */}
          </h4>
          <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <p>
            {/* <EditOutlined /> {getEducation(job.education)} */}
            {phone}
            {email}
          </p>

          <p>
            <ScheduleOutlined />{" "}
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
  };
};

export default connect(mapStateToProps, { saveWorker })(WorkerItem);
