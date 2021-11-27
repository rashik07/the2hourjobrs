import React, { useEffect, useState } from "react";
import { Table, Space, Divider, Typography } from "antd";
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
      //...this.getColumnSearchProps('name'),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "100%",
    },

    {
      title: "From",
      dataIndex: "start_date",
      key: "start_date",
      width: "150px",
    },
    {
      title: "To",
      dataIndex: "end_date",
      key: "end_date",
      width: "150px",
    },
    {
      title: "Action",
      key: "action",

      render: (details) => (
        <Space size="middle">
          <DeleteOutlined
            key="ellipsis"
            onClick={() => {
              deleteProject(details.id);
              setloader(true);
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
      <Table columns={columns} dataSource={view_project} pagination={false} />
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
