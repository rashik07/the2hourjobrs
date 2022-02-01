import React, { useEffect, useState } from "react";
import { Table, Space, Divider, Typography, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { viewProject, deleteProject } from "@/redux/actions/projectAction";

const Project_details = ({
  viewProject,
  view_project,
  project,
  deleteProject,
  setloader,
}) => {
  const router = useRouter();
  const { Title } = Typography;

  useEffect(() => {
    viewProject();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "30%",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "100%",
      align: "center",
    },

    {
      title: "From",
      dataIndex: "start_date",
      key: "start_date",
      width: "150px",
      align: "center",
    },
    {
      title: "To",
      dataIndex: "end_date",
      key: "end_date",
      width: "150px",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (details) => (
        <Space size="middle">
          <DeleteOutlined
            key="ellipsis"
            onClick={() => {
              deleteProject(details.id);
              setloader(true);
              message.success("successfully delete");
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ marginBottom: "15px" }}>
      <Divider>
        {" "}
        <Title>Add Portfolio</Title>
      </Divider>
      <Table
        columns={columns}
        dataSource={view_project}
        pagination={false}
        bordered
        scroll={{ x: 800 }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    view_project: state.project.view_project,
  };
};

export default connect(mapStateToProps, { viewProject, deleteProject })(
  Project_details
);
