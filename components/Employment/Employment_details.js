import React, { useEffect } from "react";
import { Typography, Space, Table, Divider, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import {
  viewEmployment,
  deleteEmployment,
} from "@/redux/actions/employmentAction";

const Employment_details = ({
  viewEmployment,
  view_employment,
  employment,
  deleteEmployment,
  setloader,
}) => {
  const router = useRouter();
  const { Title } = Typography;

  useEffect(() => {
    viewEmployment();
  }, []);
  if(view_employment)
  view_employment.map((view_employment) =>{
    // console.log(view_employment.employment_period_to);
    if(view_employment.employment_period_to== null){
      view_employment.employment_period_to = "Present"
      // console.log(view_employment.employment_period_to)
    }
    else{
      view_employment.employment_period_to=view_employment.employment_period_to
    }
  })
 
 
  // if(view_employment.employment_period_to== null){
  //   view_employment.employment_period_to = "Present"
  //   console.log(view_employment.employment_period_to)
  // }
  // else{
  //   view_employment.employment_period_to=view_employment.employment_period_to
  // }
  

  const columns = [
    {
      title: "Name",
      dataIndex: "company_name",
      key: "company_name",
      width: "12%",
      align: "center",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      width: "12%",
      align: "center",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      width: "12%",
      align: "center",
    },
    {
      title: "Responsibilities",
      dataIndex: "responsibilities",
      key: "responsibilities",
      width: "12%",
      align: "center",
    },
    {
      title: "Company location",
      dataIndex: "company_location",
      key: "company_location",
      width: "12%",
      align: "center",
    },
    {
      title: "From",
      dataIndex: "employment_period_from",
      key: "employment_period_from",
      width: "10%",
      align: "center",
    },
    
    {
      title: "To",
      dataIndex:"employment_period_to",
      key: "employment_period_to",
      width: "10%",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      width: "5%",
      align: "center",
      render: (details) => (
        <Space size="middle">
          <DeleteOutlined
            key="ellipsis"
            onClick={() => {
              deleteEmployment(details.id);
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
        <Title>Add Experience</Title>
      </Divider>
      <Table
        columns={columns}
        dataSource={view_employment}
        pagination={false}
        style={{ width: "100%" }}
        bordered
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    view_employment: state.employment.view_employment,
  };
};

export default connect(mapStateToProps, { viewEmployment, deleteEmployment })(
  Employment_details
);
