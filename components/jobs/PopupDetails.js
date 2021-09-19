import React, { useState } from "react";
import { Drawer, Button, Divider, Row, Col } from "antd";
import dateformat from "dateformat";
import { Descriptions } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const PopupDetails = ({ job }) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  console.log(job);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <h3 className="job_title" onClick={showDrawer}>
        {job.title}
      </h3>

      <Drawer
        title={job.title}
        placement="right"
        width="900"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Row>
          <Col span={10}>
            <h4>Type :</h4> {job.category.name}
            <br />
          </Col>
          
          <button
            onClick={() => router.push(`/jobs/detail/${job.id}`)}
            className="btn button-home mt-2 rounded"
          >
            Detail
          </button>
          <Col span={4}>
            <h4>Posted on :</h4>{" "}
            <span>{dateformat(job.posting_timestamp, "mmmm dS, yyyy")}</span>
          </Col>
          <Col span={4}>
            <h4>Deadline :</h4>{" "}
            <span style={{ fontWeight: "600" }}>{job.deadline}</span>
          </Col>
          <Col span={2}>
            <h4>Vacancy : </h4>
            <span style={{ fontWeight: "600" }}>{job.vacancy}</span>
          </Col>
        </Row>
        <Divider />
        <h4>Job description</h4>
        <p>{job.job_description}</p>
        {/* <h4>Job Responsibilities</h4>
        <p>{job.job_responsibilities}</p> */}
        <Divider />
        <h4>Skills</h4>
        <Descriptions.Item label="Skills">
          {job.skills.length ? job.skills.join(" ") : ""}
        </Descriptions.Item>
        <Divider />
        <Row>
          <Col span={10}>
            <Row>
              <Col span={12}>
                <h4>Salary : </h4>
              </Col>
              <Col span={12}>
                {job.min_salary} - {job.max_salary} taka
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <h4>Gender : </h4>
              </Col>
              <Col span={12}>{job.gender}</Col>
            </Row>
            <Row>
              <Col span={12}>
                <h4>Employment Status</h4>
              </Col>
              <Col span={12}>{job.employment_status}</Col>
            </Row>
          </Col>
          <Col span={10} offset={2}>
            <Row>
              <Col span={12}>
                <h4>Experience :</h4>
              </Col>
              <Col span={12}>
                {" "}
                {job.min_experience} - {job.max_experience} years
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <h4>Job type :</h4>
              </Col>
              <Col span={12}>
                <Descriptions.Item label="Skills">
                  {job.workplace.length ? job.workplace.join(", ") : ""}
                </Descriptions.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                {" "}
                <h4>Job Location :</h4>
              </Col>
              <Col span={12}>{job.job_location[0].name}</Col>
            </Row>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default PopupDetails;
