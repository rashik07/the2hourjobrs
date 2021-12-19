import React, { useState } from "react";
import { Table, Modal, Button, Card, Row, Col, Divider } from "antd";
import { updatePhone } from "@/redux/actions/userAction";
import { connect } from "react-redux";

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
  // const columns = [
  //   {
  //     title: "Title",
  //     dataIndex: "title",
  //     key: "title",
  //     width: "30%",
  //     //...this.getColumnSearchProps('name'),
  //   },
  //   {
  //     title: "Institution",
  //     dataIndex: "institution",
  //     key: "institution",
  //     width: "100%",

  //     // ...this.getColumnSearchProps('age'),
  //   },

  //   {
  //     title: "Training year",
  //     dataIndex: "training_year",
  //     key: "training_year",
  //     width: "150px",
  //     //  ...this.getColumnSearchProps('address'),
  //     //   sorter: (a, b) => a.address.length - b.address.length,
  //     //sortDirections: ['descend', 'ascend'],
  //   },

  //   {
  //     title: "Action",
  //     key: "action",

  //     render: (details) => (
  //       console.log("training id:", details.id),
  //       (
  //         <Space size="middle">
  //           <DeleteOutlined
  //             key="ellipsis"
  //             onClick={() => {
  //               deleteTraining(details.id);
  //               setloader(true);
  //               message.success("successfully delete");
  //             }}
  //           />
  //         </Space>
  //       )
  //     ),
  //   },
  // ];
  // <Table columns={columns} dataSource={view_training} pagination={false} bordered/>
  const employment = () => {
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
    }
    if (view_employment.length == 0) {
      return "";
    }
  };

  const project = () => {
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
    } else if (view_project.length == 0) {
      return "";
    }
  };
  const objective = () => {
    if (user_profile.objective == null) {
      return " ";
    }

    return (
      <p>
        <div>
          <Divider
            style={{ fontWeight: "bold", borderTopColor: "#F0F0F0"}}
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
  // const phone = () => {
  //   if (edit_phone.hide_phone == true) {
  //     return "";
  //   } else {
  //     return ;
  //   }
  // };

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
        <p>
          {user_profile.hide_phone == true ? (
            " "
          ) : (
            <a href={`tel:${user_profile.phone}`}>{user_profile.phone}</a>
          )}
        </p>
        <p>
          <a href={`mailto:${user_profile.email}`}>{user_profile.email}</a>
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
