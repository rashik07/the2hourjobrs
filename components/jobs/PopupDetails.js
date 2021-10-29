import React, { useState, useEffect } from "react";
import { Drawer, Button, Divider, Row, Col } from "antd";
import dateformat from "dateformat";
import { Descriptions } from "antd";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getAppliedJobsPerson } from "@/redux/actions/jobAction";

const PopupDetails = ({ job, getAppliedJobsPerson, applied_jobs_person,isSignedIn ,size}) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  //  console.log(job);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    if(isSignedIn){
      getAppliedJobsPerson(job);
    }
    
  }, []);
  const appliedPerson = () => {
    return applied_jobs_person.map((applied_jobs_person) => {
      console.log(applied_jobs_person.user.username);

      return (
        <p>
          {applied_jobs_person.user.username} {" ,"}
        </p>
      );
    });
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
        size={size}
      >
        <button
          onClick={() => router.push(`/jobs/detail/${job.id}`)}
          className="btn button-home mt-2 rounded"
        >
          Detail
        </button>
        <Row>
          <Col xs={24} sm={24} md={10} lg={10} xl={10}>
            <h4>Type :</h4> {job.category.name}
            <br />
          </Col>

          <Col xs={24} sm={24} md={4} lg={4} xl={4}>
            <h4>Posted on :</h4>{" "}
            <span>{dateformat(job.posting_timestamp, "mmmm dS, yyyy")}</span>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4} xl={4}>
            <h4>Deadline :</h4>{" "}
            <span style={{ fontWeight: "600" }}>{job.deadline}</span>
          </Col>
          <Col xs={24} sm={24} md={2} lg={2} xl={2}>
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
          <Col xs={24} sm={24} md={10} lg={10} xl={10}>
            <Row>
              <Col span={12}>
                <h4>Salary : </h4>
              </Col>
              <Col span={12}>
                {job.negotiable ? (
                  "Negotiable"
                ) : (
                  <>
                    {job.min_salary} - {job.max_salary} taka
                  </>
                )}
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
              {/* {appliedPerson()} */}
            </Row>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    applied_jobs_person: state.job.applied_jobs_person,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  getAppliedJobsPerson,
})(PopupDetails);

//export default PopupDetails;
