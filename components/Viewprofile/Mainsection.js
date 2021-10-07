import React, { useEffect, useState } from "react";
import { Table, Modal, Button, Card, Row, Col, Divider } from "antd";

const Mainsection = ({
  user_profile,
  view_education,
  view_employment,
  view_project,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
            style={{ fontWeight: "bold", borderTopColor: "#F0F0F0" }}
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
            style={{ fontWeight: "bold", borderTopColor: "#F0F0F0" }}
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
            style={{ fontWeight: "bold", borderTopColor: "#F0F0F0" }}
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
    if (user_profile.objective == null) {
      return " ";
    }
    return (
      <p>
        <div>
          <Divider
            style={{ fontWeight: "bold", borderTopColor: "#F0F0F0" }}
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
      <Button
        type="primary"
        onClick={showModal}
        style={{
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
          
        }}
      >
        Contact With Me
      </Button>
      <Modal
        title="Contact Info"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p><a href={`tel:${user_profile.phone}`}>{user_profile.phone}</a></p>
        <p><a href={`mailto:${user_profile.email}`}>{user_profile.email}</a></p>
      </Modal>
    </div>
  );
};

export default Mainsection;
