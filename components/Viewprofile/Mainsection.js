import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProfile } from "@/redux/actions/userAction";
import { viewEducation } from "@/redux/actions/usereducationAction";
import { viewEmployment } from "@/redux/actions/employmentAction";
import { Table, Space, Card, Row, Col, Divider } from "antd";
import { viewProject } from "@/redux/actions/projectAction";

const Mainsection = ({
  updateProfile,
  user_profile,
  viewEducation,
  view_education,
  viewEmployment,
  view_employment,
  viewProject,
  view_project,
}) => {
  useEffect(() => {
    updateProfile();
    viewEducation();
    viewEmployment();
    viewProject();
  }, []);
  console.log(view_project);
  const eduColumns = [
    {
      title: "Level of Education",
      dataIndex: "Education",
      key: "Education",
    },
    {
      title: "Exam/Degree Title",
      dataIndex: "Degree",
      key: "Degree",
    },

    {
      title: "institute_name",
      dataIndex: "institute_name",
      key: "institute_name",
    },
    {
      title: "result",
      dataIndex: "result",
      key: "result",
    },
    {
      title: "Year of Passing",
      dataIndex: "year_of_passing",
      key: "year_of_passing",
      width: "150px",
    },
  ];
  const education = () => {
    if (view_education == "") {
      return " ";
    }
    return (
      <p>
        <div>
          <Divider
            style={{ fontWeight: "bold", borderTopColor: "rgb(0 0 0)" }}
            orientation="left"
          >
            Education
          </Divider>
        </div>
        <br />
        <Table
          columns={eduColumns}
          dataSource={view_education}
          pagination={false}
        />
      </p>
    );
  };
  const employment = () => {
    if (view_employment == "") {
      return " ";
    }
    return (
      <p>
        <div>
          <Divider
            style={{ fontWeight: "bold", borderTopColor: "rgb(0 0 0)" }}
            orientation="left"
          >
            Experience
          </Divider>
        </div>
        <br />
        <ol>
          {view_employment.map((view_employment) => (
            <li>
              <p>
                <span
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {view_employment.designation}(
                  {view_employment.employment_period_from} to{" "}
                  {view_employment.employment_period_to})
                </span>
                -
                <span style={{ fontWeight: "bold" }}>
                  {view_employment.company_name}
                </span>{" "}
                <br />
                {view_employment.department}
                <br />
                {view_employment.company_location}
                <br />
                <span
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {" "}
                  Duties/Responsibilities:
                </span>{" "}
                <br />
                {view_employment.responsibilities}
              </p>
            </li>
          ))}
        </ol>
      </p>
    );
  };
  const project = () => {
    if (view_project == "") {
      return " ";
    }
    return (
      <div className="site-card-wrapper">
        <div>
          <Divider
            style={{ fontWeight: "bold", borderTopColor: "rgb(0 0 0)" }}
            orientation="left"
          >
            Projects
          </Divider>
        </div>
        <Row gutter={16}>
          {view_project.map((view_project) => (
            <Col span={8} style={{ paddingBottom: "20px" }}>
              <Card
                style={{ boxShadow: "2px 2px #FAFAFA" }}
                title={view_project.title}
              >
                {view_project.description}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  const objective = () => {
    if (user_profile.objective == " ") {
      return " ";
    }
    return (
      <p>
        <div>
          <Divider
            style={{ fontWeight: "bold", borderTopColor: "rgb(0 0 0)" }}
            orientation="left"
          >
            Objective
          </Divider>
        </div>
        <br />
        {user_profile.objective}
      </p>
    );
  };

  return (
    <div>
      {objective()}
      {employment()}
      {education()}
      {project()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_profile: state.user.user_profile,
    view_education: state.education.view_education,
    view_employment: state.employment.view_employment,
    view_project: state.project.view_project,
  };
};

export default connect(mapStateToProps, {
  updateProfile,
  viewEducation,
  viewEmployment,
  viewProject,
})(Mainsection);
