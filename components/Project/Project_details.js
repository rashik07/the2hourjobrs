import React, { useEffect, useState } from "react";
import { Card, Avatar, Modal, Table, Space } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { viewProject, deleteProject } from "@/redux/actions/projectAction";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Project_details = ({
  viewProject,
  view_project,
  project,
  deleteProject,
  setloader,
}) => {
  const router = useRouter();

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

      // ...this.getColumnSearchProps('age'),
    },

    {
      title: "From",
      dataIndex: "start_date",
      key: "start_date",
      width: "150px",
      //  ...this.getColumnSearchProps('address'),
      //   sorter: (a, b) => a.address.length - b.address.length,
      //sortDirections: ['descend', 'ascend'],
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
        //console.log('project id:',details.id);
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
    <div>
      <Table columns={columns} dataSource={view_project} />
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
