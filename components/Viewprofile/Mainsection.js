import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProfile } from "@/redux/actions/userAction";
import { viewEducation } from "@/redux/actions/usereducationAction";
import { viewEmployment } from "@/redux/actions/employmentAction";
import { Table, Space, Card, Row, Col } from "antd";
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
      width: "30%",
    },
    {
      title: "Exam/Degree Title",
      dataIndex: "Degree",
      key: "Degree",
      width: "100%",
    },

    {
      title: "institute_name",
      dataIndex: "institute_name",
      key: "institute_name",
      width: "150px",
    },
    {
      title: "result",
      dataIndex: "result",
      key: "result",
      width: "150px",
    },
    {
      title: "year_of_passing",
      dataIndex: "year_of_passing",
      key: "year_of_passing",
      width: "150px",
    },
  ];
  const expoColumns = [
    {
      title: "Name",
      dataIndex: "company_name",
      key: "company_name",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "department",
      dataIndex: "department",
      key: "address",
    },

    {
      title: "responsibilities",
      dataIndex: "responsibilities",
      key: "responsibilities",
    },
    {
      title: "Location",
      dataIndex: "company_location",
      key: "company_location",
    },
    {
      title: "From",
      dataIndex: "employment_period_from",
      key: "employment_period_from",
    },
    {
      title: "To",
      dataIndex: "employment_period_to",
      key: "employment_period_to",
    },
  ];
  return (
    <div>
      <p>
        <span style={{ fontWeight: "bold" }}>Objective </span>
        <br />
        {user_profile.objective}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Education </span>
        <br />
        <Table
          columns={eduColumns}
          dataSource={view_education}
          pagination={false}
        />
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Experience </span>
        <br />

        <Table
          columns={expoColumns}
          dataSource={view_employment}
          pagination={false}
        />
      </p>
      <div className="site-card-wrapper">
        <span style={{ fontWeight: "bold" }}>Projects </span>
        <Row gutter={16}>
        {view_project.map((view_project) => (
          <Col span={8}>
           
              <Card title={view_project.title}>{view_project.description}</Card>
          
          </Col>
            ))}
        </Row>
      </div>
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
