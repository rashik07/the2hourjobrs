import React, { useState } from "react";
import { Table, Modal, Button, Card, Row, Col, Divider } from "antd";
import { updatePhone } from "@/redux/actions/userAction";
import { connect } from "react-redux";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const Mainsection = ({
  user_profile,
  view_employment,
  view_education,
  view_single_training,
  view_single_qualification,
  view_project,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log(view_single_qualification);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //education_table start
  const eduColumns = [
    {
      title: "Level of Education",
      dataIndex: "Education",
      key: "Education",
      align: "center",
    },
    {
      title: "Exam/Degree Title",
      dataIndex: "Degree",
      key: "Degree",
      align: "center",
    },

    {
      title: "Institute Name",
      dataIndex: "institute_name",
      key: "institute_name",
      align: "center",
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
      align: "center",
    },
    {
      title: "Year of Passing",
      dataIndex: "year_of_passing",
      key: "year_of_passing",
      width: "150px",
      align: "center",
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
          bordered
        />
      </p>
    );
  };
  //education_table end
  //training_table start
  const trainColumns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "30%",
      align: "center",
    },
    {
      title: "Institution",
      dataIndex: "institution",
      key: "institution",
      width: "100%",
      align: "center",
    },

    {
      title: "Training year",
      dataIndex: "training_year",
      key: "training_year",
      width: "150px",
      align: "center",
    },
  ];
  const training = () => {
    if (view_single_training == "") {
      return " ";
    }
    return (
      <p>
        <div>
          <Divider
            style={{ fontWeight: "bold", borderTopColor: "#F0F0F0" }}
            orientation="left"
          >
            Training
          </Divider>
        </div>
        <br />
        <Table
          columns={trainColumns}
          dataSource={view_single_training}
          pagination={false}
          bordered
        />
      </p>
    );
  };
  //training_table end
  //qualilification_table start
  const columns = [
    {
      title: "Title",
      dataIndex: "certification_title",
      key: "certification_title",
      width: "30%",
      align: "center",
    },
    {
      title: "Institution",
      dataIndex: "institute",
      key: "institute",
      width: "30%",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "institute",
      width: "100%",
      align: "center",
    },
    {
      title: "Duration(Month)",
      dataIndex: "duration",
      key: "duration",
      width: "100%",
      align: "center",
    },

    {
      title: "Year of passing",
      dataIndex: "year_of_passing",
      key: "year_of_passing",
      width: "150px",
      align: "center",
    },
  ];
  const qualilification = () => {
    if (view_single_qualification == "") {
      return " ";
    }
    return (
      <p>
        <div>
          <Divider
            style={{ fontWeight: "bold", borderTopColor: "#F0F0F0" }}
            orientation="left"
          >
            Professional Certifications
          </Divider>
        </div>
        <br />
        <Table
          columns={columns}
          dataSource={view_single_qualification}
          pagination={false}
          bordered
        />
      </p>
    );
  };
  //qualilification_table end
  // object start
  const objective = () => {
    if (user_profile.objective == null || user_profile.objective == "null" || user_profile.objective == "") {
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
  //project end

  //emploment start

  const employment = () => {
    // console.log(view_employment);
    if (view_employment) {
      if (view_employment.length > 0) {
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
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      {view_employment.designation}(
                      {view_employment.employment_period_from} to{" "}
                      {view_employment.employment_period_to == null
                        ? "Present"
                        : view_employment.employment_period_to}
                      )
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
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
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
      }
      if (view_employment.length === 0) {
        return "";
      }
    }
  };
  //employment end
  //project start
  const project = () => {
    if (view_project) {
      if (view_project.length > 0) {
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
                    style={{ boxShadow: "1px 1px 1px 1px #D8D8D8" }}
                    title={view_project.title}
                  >
                    <p> {view_project.description} </p>
                    <br />
                    <p>Start date: {view_project.start_date}</p>
                    <p>End date: {view_project.end_date}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        );
      } else if (view_project.length === 0) {
        return "";
      }
    }
  };
  //project end

  return (
    <div>
      {objective()}
      {employment()}

      {education()}
      {training()}
      {qualilification()}
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
        <p>
          {user_profile.hide_phone == true ? (
            " "
          ) : (
            <>
            <h3>  <PhoneOutlined />{" "}
              <a href={`tel:${user_profile.phone}`}>{user_profile.phone}</a></h3>
            </>
          )}
        </p>
        <p>
        <h3>   <MailOutlined />{" "}
          <a href={`mailto:${user_profile.email}`}>{user_profile.email}</a></h3>
        </p>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    edit_phone: state.user.edit_phone,
  };
};

export default connect(mapStateToProps, {
  updatePhone,
})(Mainsection);
//export default Mainsection;
