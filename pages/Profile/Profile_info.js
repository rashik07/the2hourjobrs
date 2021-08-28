import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../../container/navbar/navbar";
import Sidebar from "../../container/sidebar/sidebar";
import { Select,Image  } from "antd";

import { connect } from "react-redux";
import {
  updateProfile ,editUserProfile, getDistrict, getDivision , getThana
} from "@/redux/actions/userAction";
import PicturesWall from "../../components/annoucement/PicturesWall";
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

import ThanaList from "components/jobs/input/ThanaList";

const Profile_info = ({updateProfile, user_profile,editUserProfile,getDivision,getDistrict,getThana,}) => {
  useEffect(() => {
    
    getDistrict();
    getDivision();
    getThana();
    updateProfile();
  },[]);
  //console.log(user_profile);
 // console.log('division:',get_division);
  const dateFormat = 'YYYY-MM-DD';
  user_profile.birthday=moment(user_profile.birthday, dateFormat);
  const onFinish = (values ) => {
     const formData = new FormData();
     values = {
      ...values,
      'birthday': values['birthday'].format('YYYY-MM-DD'),
      // 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
   
    formData.append("nid", values.nid );
    formData.append("gender",values.gender );
    formData.append("facebook_link",values.facebook_link );
    formData.append("birthday", values.birthday );
    formData.append("bio", values.bio );
    formData.append("address", values.address );
    formData.append("youtube_link", values.youtube_link );
    formData.append("website_link", values.website_link );
    formData.append("portfolio_link", values.portfolio_link );
    // formData.append("division", values.division);
    // formData.append("district", values.district );
    // formData.append("thana", values.thana );
    
    if(typeof values.photo === 'undefined'){

    }else{
      console.log("image");
      formData.append("image", values.photo[0].originFileObj);
    }
    
   
    // console.log('Received values of form: ', values);
    editUserProfile(formData );
   // window.location.reload();
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
    
      const normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
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
           
            
            <Image
              width={200}
              src={"http://127.0.0.1:8000" + user_profile.image} 
              
            />
            {/* <PicturesWall setImages={uploadcover} limit={1} /> */}
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
              
              <Form.Item
                name="photo"
                label="Upload"
                valuePropName="fileList" 
               getValueFromEvent={normFile}
                extra="longgggggggggggggggggggggggggggggggggg"
              >
                <Upload name="image"  listType="picture"  maxCount={1} >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                 
                </Upload>
                
              </Form.Item>
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
                  // addonBefore={prefixSelector}
                  
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
              <Form.Item label="Facebook Link" name="facebook_link">
                <Input placeholder="input Facebook Link"  />
              </Form.Item>
              <Form.Item label="Website Link" name="website_link">
                <Input placeholder="input Website Link"  />
              </Form.Item>
              <Form.Item label="Youtube Link" name="youtube_link">
                <Input placeholder="input Youtube Link"  />
              </Form.Item>
              <Form.Item label="Portfolio Link" name="portfolio_link">
                <Input placeholder="input Portfolio Link"  />
              </Form.Item>
              
              <Form.Item label="Bio" name="bio">
                <TextArea rows={4} />
              </Form.Item>

              <Divider>
                {" "}
                <Title>Address</Title>
              </Divider>
              {/* <Form.Item label="Division" name="division">
                <Select
                    showSearch
                    className="filtter-items"
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                    allowClear
                   // multiple={multiple}
                    onChange={setValue}
                    onClear={onClear}
                    
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    defaultValue={user_profile.division}
                  >
                    
                        {get_division.map(({ id, name }) => (
                          
                          <Option key={id} value={ id }>
                            {name}
                          </Option>
                        ))}
                      
                </Select>
                      
             
                                

              </Form.Item>
             
              
              <Form.Item label="District" name="district">
                <Select
                    showSearch
                    className="filtter-items"
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                    allowClear
                   // multiple={multiple}
                    onChange={setValue}
                    onClear={onClear}
                    
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    defaultValue={user_profile.district}
                  >
                    
                       
                        
                        {
                        get_district.map(({ id, name }) => (
                          <Option key={id} value={ id }>
                            {name} 
                          </Option>
                        ))}
                      
                </Select>
              
                                

              </Form.Item>
              <Form.Item label="Thana" name="thana" >
                <Select
                    showSearch
                    className="filtter-items"
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                    allowClear
                   // multiple={multiple}
                    onChange={setValue}
                    onClear={onClear}
                    
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    defaultValue={user_profile.thana}
                  >
                    
                        {get_thana.map(({ id, name }) => (
                          <Option key={id} value={ id }>
                            {name}
                          </Option>
                        ))}
                      
                </Select>
              </Form.Item> */}
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
    get_division: state.user.get_division,
    get_thana: state.user.get_thana,
  
  };
};

export default connect(mapStateToProps, {updateProfile,editUserProfile,getDistrict ,getDivision,getThana})(Profile_info);

