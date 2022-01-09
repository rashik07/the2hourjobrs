import React from "react";
import { useState } from "react";
import { Form, Input, Button, DatePicker, message, Typography ,Checkbox} from "antd";
import { connect } from "react-redux";
import {
  viewProject,
  createEmployment,
} from "@/redux/actions/employmentAction";

const Add_employment = ({ createEmployment, view_employment, setloader }) => {
  const dateFormat = "YYYY-MM-DD";
  
  const onFinish = (values) => {
    values = {
      ...values,
      employment_period_from:
        values["employment_period_from"].format("YYYY-MM-DD"),
      employment_period_to: values["employment_period_to"].format("YYYY-MM-DD"),
    };
    console.log("Success:", values);
    createEmployment(values);
    form.resetFields();
    setloader(true);
    message.success("successfully added");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("not saved your experience");
  };

  const { TextArea } = Input;
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  
  const [present, setParent] = useState(false);

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
        <Form.Item label="Company Name:" name="company_name">
          <Input placeholder="company name" />
        </Form.Item>
        <Form.Item label="Designation:" name="designation">
          <Input placeholder="designation" />
        </Form.Item>

        <Form.Item label="Department:" name="department">
          <Input placeholder="Department " />
        </Form.Item>
        <Form.Item label="Responsibilities:" name="responsibilities">
          <Input placeholder="responsibilities" />
        </Form.Item>
        <Form.Item label="Location:" name="company_location">
          <Input placeholder="Location " />
        </Form.Item>

        <Form.Item label="From" name="employment_period_from">
          <DatePicker format={dateFormat} />
        </Form.Item>
        {present ? (
                ""
              ) : (
        <Form.Item label="To" name="employment_period_to">
          <DatePicker format={dateFormat} />
        </Form.Item>
              )}
        <Form.Item label="Present" name="">
          <Checkbox  onChange={(e) => {
                    if (e.target.checked) {
                     setParent(true)
                    } else {
                     setParent(false)
                    }
                  }}></Checkbox>
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
    create_employment: state.employment.create_employment,
    view_employment: state.employment.view_employment,
  };
};

export default connect(mapStateToProps, { createEmployment })(Add_employment);
