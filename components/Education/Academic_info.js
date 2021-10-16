import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Typography,
  Divider,
  InputNumber,
  Select,
  Table,
  Space,
} from "antd";
import { getEducation } from "redux/actions/jobAction";
import {
  createEducation,
  viewEducation,
  deleteEducation,
} from "@/redux/actions/usereducationAction";
import moment from "moment";
import { DeleteOutlined } from "@ant-design/icons";

const Academic_info = ({
  education,
  getEducation,
  value,
  setValue,
  create_education,
  createEducation,
  view_education,
  viewEducation,
  deleteEducation,
}) => {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    getEducation();
    viewEducation();
    setloader(false);
  }, [loader]);

  console.log(view_education);
  const { Option, OptGroup } = Select;
  const dateFormat = "YYYY";

  const onFinish = (values) => {
    values = {
      ...values,
      year_of_passing: values["year_of_passing"].format("YYYY"),
    };
    createEducation(values);
    form.resetFields();
    setloader(true);

    //       console.log('Success:', values);
  };

  //user_profile.birthday=moment(user_profile.birthday, dateFormat);

  function onChangeNum(value) {
    console.log("changed", value);
  }

  const { Title } = Typography;
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 12,
          },
        }
      : null;
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const getOptions = (education) => {
    if (education)
      return education.map((parent) => (
        <OptGroup key={parent.id} label={`${parent.name} Categories`}>
          {parent.child.map((child) => (
            <Option key={child.name} value={child.id}>
              {child.name}
            </Option>
          ))}
        </OptGroup>
      ));
  };
  const columns = [
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
    {
      title: "Action",
      key: "action",

      render: (details) => (
        //  console.log('education id:',details.id),
        <Space size="middle">
          <DeleteOutlined
            key="ellipsis"
            onClick={() => {
              deleteEducation(details.id);
              setloader(true);
            }}
          />
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        name="register"
        onFinish={onFinish}
      >
        <Divider>
          {" "}
          <Title>Academic Info</Title>
        </Divider>
        <Table columns={columns} dataSource={view_education} />
        <Form.Item label="Level of Education" name="degree_parent">
          <Select
            showSearch
            style={{ width: "100%" }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            onChange={setValue}
          >
            <OptGroup key={education.id}>
              {education.map((parent) => {
                return (
                  <Option value={parent.id} key={parent.name}>
                    {parent.name}
                  </Option>
                );
                console.log(parent.id);
              })}
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item label="Exam/Degree Title" name="degree_child">
          <Select
            showSearch
            style={{ width: "100%" }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            onChange={setValue}
          >
            {getOptions(education)}
          </Select>
        </Form.Item>
        <Form.Item label="Institution" name="institute_name">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Result" name="result">
          <InputNumber min={1} max={5} onChange={onChangeNum} />
        </Form.Item>
        <Form.Item label="Year of Passing" name="year_of_passing">
          <DatePicker format={dateFormat} picker="year" />
        </Form.Item>
        <Form.Item className="text-center" {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    education: state.job.education,
    create_education: state.education.create_education,
    view_education: state.education.view_education,
  };
};

export default connect(mapStateToProps, {
  getEducation,
  createEducation,
  viewEducation,
  deleteEducation,
  deleteEducation,
})(Academic_info);
