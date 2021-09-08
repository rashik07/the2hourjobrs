import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { updateProfile, editUserProfile } from "@/redux/actions/userAction";
import { saveTemporayJobPost } from "redux/actions/jobAction";
import {
  Form,
  Input,
  Switch,
  Button,
  Radio,
  DatePicker,
  Typography,
  Divider,
  TextArea,
  Upload,
} from "antd";
import LocationList from "../components/jobs/input/LocationList";
import { getJobCategories } from "redux/actions/jobAction";
import { TagsInput } from "react-tag-input-component";
import MultijobCategory from "components/jobs/input/MultijobCategory";

const PreferedCategories = () => {
  const { Title } = Typography;

  const onFinish1 = (values) => {
    console.log("Received values of form: ", values);
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
  //   const setJobLocation = (value) => {

  //   };
  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        name="register"
        onFinish={onFinish1}
      >
        <Divider>
          {" "}
          <Title>Prefered Categories </Title>
        </Divider>

        <Form.Item
          name="select-multiple"
          label="Select[multiple]"
          rules={[
            {
              required: true,
              message: "Please select your favourite colors!",
              type: "array",
            },
          ]}
        >
          <MultijobCategory></MultijobCategory>
        </Form.Item>
        <Form.Item label="Special Skills " name="skills">
          <TagsInput></TagsInput>
        </Form.Item>

        <Form.Item label="Location " name="location">
          <LocationList multiple={true} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PreferedCategories;
