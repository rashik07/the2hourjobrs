import React, { useState } from "react";

import { connect } from "react-redux";
import { editPassword,deleteProfile  } from "@/redux/actions/settingAction";

import { Form, Input, Button, DatePicker, Typography, Divider ,message} from "antd";

const Setting = ({ editPassword ,deleteProfile}) => {
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    editPassword(values);
    form.resetFields();
    // alert("password change successfully");
    // window.location.reload();
    //   console.log('update: ', editUserProfile);
  };
  const onFinishFailed = (errorInfo) => {
    message.error("password is not changed");
  };
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
  const charValidations = new RegExp("^(?=.*[a-z])");

  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Divider>
          {" "}
          <Title>Recovery Password</Title>
        </Divider>
        <Form.Item
          label="Current Password:"
          name="old_password"
          rules={[
            { required: true, message: "Please enter current password " },
          ]}
        >
          <Input.Password placeholder="current password" />
        </Form.Item>
        <Form.Item
          label="New Password:"
          name="new_password"
          rules={[
            { required: true, message: "Please enter new password " },
            {
              validator: async (_, new_password) => {
                console.log(charValidations.test(new_password));
                let error = "";
                if (!new_password || new_password.length < 8) {
                  error += "1.At least 8";
                  // return Promise.reject(new Error('At least 8'));
                }

                if (!charValidations.test(new_password)) {
                  error += " 2.At least one char";
                  // return Promise.reject(new Error('At least char'));
                }
                if (error != "") {
                  return Promise.reject(new Error(error));
                }
              },
            },
          ]}
        >
          <Input.Password placeholder="new password" />
        </Form.Item>
        {/* <Form.Item label="Retype Password:" name="retype_password">
                                        <Input placeholder="Retype password" />
                                </Form.Item> */}
        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button type="danger" onClick={() => {
              deleteProfile();
              
              message.success("successfully delete");
            }}>
            delete account
          </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_password: state.setting.user_password,
  };
};

export default connect(mapStateToProps, { editPassword ,deleteProfile})(Setting);
