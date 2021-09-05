import { saveWorker } from "@/redux/actions/userAction";
import React, { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { Layout, Breadcrumb, Row, Col } from "antd";
import {
  PhoneOutlined,
  ScheduleOutlined,
  EnvironmentOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";

const renderButtons = (
  id,
  saved_user_instance_id,
  setSavedStatus,
  saveWorker,
  isSignedIn,
  show_save_button
) => {
  return (
    <>
      <button className="btn button-home mt-2 rounded">Detail</button>
      {show_save_button ? (
        <button
          onClick={() => saveWorker(id, saved_user_instance_id, setSavedStatus)}
          className="btn button-home mt-2 rounded"
          disabled={!isSignedIn}
        >
          {saved_user_instance_id ? "Unsave" : "Save"}
        </button>
      ) : null}
    </>
  );
};

const WorkerItem = ({ worker, saveWorker, isSignedIn }) => {
  // console.log(worker);
  const { id, name, phone, email, saved_user_instance_id } = worker;

  const router = useRouter();

  let show_save_button = true;

  if (router.pathname === "/worker/saved") {
    show_save_button = false;
  }

  const [savedStatus, setSavedStatus] = useState(saved_user_instance_id);

  return (
    <>
      <Row className="job_post">
        <Col span={24}>
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
            <UserOutlined /> <Link href="/Profile/Profile_info">{name}</Link>{" "}
            {/* <EnvironmentOutlined /> {getLocations(job.job_location)} */}
          </h4>
          <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
