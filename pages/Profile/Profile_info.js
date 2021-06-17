import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../../container/navbar/navbar";
import Sidebar from "../../container/sidebar/sidebar";
import { Select } from "antd";
import { connect } from "react-redux";
import {
  updateProfile ,editUserProfile
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

const Profile_info = ({updateProfile, user_profile,editUserProfile,edit_user_profile}) => {
  useEffect(() => {
    updateProfile();
  },[]);

  console.log(user_profile);

  const onFinish = (values ) => {
     values = {
      ...values,
      'birthday': values['birthday'].format('YYYY-MM-DD'),
      // 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
   
   
    console.log('Received values of form: ', values);
    editUserProfile(values);
    console.log('update: ', edit_user_profile);
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
  //date
 
//phone no
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
  //gender
  const plainOptions = ['Male', 'Female'];
  const [value, setValue] = React.useState();
  
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
             initialValues={user_profile}
            >
              <Divider>
                {" "}
                <Title>Basic Info</Title>
              </Divider>
              <Form.Item label="Name" name="username">
                <Input placeholder="name" />
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
                <Input placeholder="e-mail" />
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
                  
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item label="NID Number" name="nid">
                <Input placeholder="input NID number"  />
              </Form.Item>
              <Form.Item label="Gender" name="gender">
                <Radio.Group  options={plainOptions} onChange={onChange} value={value} >
                  
                </Radio.Group>
              </Form.Item>
              <Form.Item  label="Date of Birth"  name="birthday">
                <DatePicker />
              </Form.Item>
              
              <Form.Item label="Bio" name="bio">
                <TextArea rows={4} />
              </Form.Item>

              <Divider>
                {" "}
                <Title>Address</Title>
              </Divider>
              <Form.Item label="District" name="district">
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
                  
                >
                  <Option value="1">Not Identified</Option>
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Thana" name="thana" >
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
                
                >
                  <Option value="1">Not Identified</Option>
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Address" name="address">
                <TextArea rows={4} />
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
    edit_user_profile: state.user.editUserProfile,
  };
};

export default connect(mapStateToProps, {updateProfile,editUserProfile})(Profile_info);

