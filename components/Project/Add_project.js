import React from "react";
import { useState } from "react";
import { Form, Input, Button, DatePicker, Typography, message } from "antd";
import { connect } from "react-redux";
import { createProject } from "@/redux/actions/projectAction";

const Add_project = ({ createProject, create_project, setloader }) => {
  const dateFormat = "YYYY-MM-DD";
  const onFinish = (values) => {
    values = {
      ...values,
      start_date: values["start_date"].format("YYYY-MM-DD"),
      end_date: values["end_date"].format("YYYY-MM-DD"),
    };
    createProject(values);
    form.resetFields();
    setloader(true);
    message.success("successfully added");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { TextArea } = Input;
  const { Title } = Typography;
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

  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Project Title:" name={"title"}>
          <Input placeholder="project title" />
        </Form.Item>
        <Form.Item label="Description" name={"description"}>
          <TextArea rows={4} placeholder="description" />
        </Form.Item>
        <Form.Item label="From" name="start_date">
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item label="To" name="end_date">
          <DatePicker format={dateFormat} />
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
    create_project: state.project.create_project,
  };
};

export default connect(mapStateToProps, { createProject })(Add_project);
