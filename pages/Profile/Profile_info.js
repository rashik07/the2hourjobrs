import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../../container/navbar/navbar";
import Sidebar from "../../container/sidebar/sidebar";
import { Select } from "antd";
import { connect } from "react-redux";
import {
  updateProfile
} from "@/redux/actions/userAction";
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Typography,
  Divider,
  TextArea,
} from "antd";

const Profile_info = ({updateProfile, user_profile}) => {
  useEffect(() => {
    updateProfile();
  },[]);

  console.log(user_profile);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const { Option } = Select;
  const { TextArea } = Input;
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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="880">+880</Option>
      </Select>
    </Form.Item>
  );

  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

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
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
        />

        <title>Profile Info</title>
      </Head>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <Sidebar />
          </div>

          <main className="col-md-9   my-4">
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              name="register"
      onFinish={onFinish}
              initialValues={{
                layout: formLayout,
                prefix: '880',
              }}
            >
              <Divider>
                {" "}
                <Title>Basic Info</Title>
              </Divider>
              <Form.Item label="Name">
                <Input placeholder="name" defaultValue={user_profile.username}/>
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="e-mail" defaultValue={user_profile.email}/>
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  defaultValue={user_profile.phone}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item label="NID Number">
                <Input placeholder="input NID number" defaultValue={user_profile.nid} />
              </Form.Item>
              <Form.Item label="Gender">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="date-picker" label="Date of Birth" {...config}>
                <DatePicker defaultValue={user_profile.birthday}/>
              </Form.Item>
              <Form.Item label="Nationality">
                <Input placeholder="nationality" defaultValue={user_profile.birthday}/>
              </Form.Item>
              <Form.Item label="Bio">
                <TextArea rows={4} defaultValue={user_profile.bio}/>
              </Form.Item>

              <Divider>
                {" "}
                <Title>Address</Title>
              </Divider>
              <Form.Item label="District">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                  defaultValue={user_profile.district}
                >
                  <Option value="1">Not Identified</Option>
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Thana">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                  defaultValue={user_profile.thana}
                >
                  <Option value="1">Not Identified</Option>
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Address">
                <TextArea rows={4} defaultValue={user_profile.address}/>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
              </Form.Item>
            </Form>
          </main>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_profile: state.user.user_profile,
  };
};

export default connect(mapStateToProps, {updateProfile})(Profile_info);

