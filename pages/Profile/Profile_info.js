import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../../container/navbar/navbar";
import Sidebar from "../../container/sidebar/sidebar";
import { Select } from "antd";
import { connect } from "react-redux";
import {
  updateProfile ,editUserProfile, getDistrict
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
import { Upload, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import DistrictList from "components/jobs/input/DistrictList";
import DivisionList from "components/jobs/input/DivisionList";
import ThanaList from "components/jobs/input/ThanaList";

const Profile_info = ({updateProfile, user_profile,editUserProfile,edit_user_profile,getDistrict,onClear,get_district}) => {
  useEffect(() => {
    updateProfile();
    getDistrict();
  },[]);
  
  console.log(user_profile);
  const dateFormat = 'YYYY-MM-DD';
  user_profile.birthday=moment(user_profile.birthday, dateFormat);
  const onFinish = (values ) => {
     values = {
      ...values,
      'birthday': values['birthday'].format('YYYY-MM-DD'),
      // 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
   
   
    // console.log('Received values of form: ', values);
    editUserProfile(values);
 //   console.log('update: ', editUserProfile);
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
    <Form.Item name="prefix "  noStyle>
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
      // console.log(get_district);
      // const setDistrict = (value) => {
      //   getDistrict({ get_District: value });
       
      // };
      const setDivision = (value) => {
        updateProfile({ division: value });
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
              {/* <Form.Item label="Image" name="image">
                <Space direction="vertical" style={{ width: '100%' }} size="large">
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                  >
                  <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                  </Upload>
   
                </Space>
              </Form.Item> */}
             
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
                  //  required: true,
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
                  //  required: true,
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
                <DatePicker format={dateFormat}/>
              </Form.Item>
              
              <Form.Item label="Bio" name="bio">
                <TextArea rows={4} />
              </Form.Item>

              <Divider>
                {" "}
                <Title>Address</Title>
              </Divider>
              <Form.Item label="Division" name="division">
                        <DivisionList
                          style={{ width: 200 }}
                          placeholder="Search to Select"
                          value={user_profile.division}
                          setValue={setDivision}
                           
                        >

                        </DivisionList>
                      
             
                                

              </Form.Item>
              <Form.Item label="District" name="district">
                        <DistrictList
                        style={{ width: 200 }}
                        placeholder="Search to Select"
                         
                        ></DistrictList>
             
                                

              </Form.Item>
              <Form.Item label="Thana" name="thana" >
                  <ThanaList>

                  </ThanaList>
              </Form.Item>
              <Form.Item label="Address" name="address">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Save
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
    edit_user_profile: state.user.edit_user_profile,
    get_district: state.user.get_district,
  
  };
};

export default connect(mapStateToProps, {updateProfile,editUserProfile,getDistrict})(Profile_info);

