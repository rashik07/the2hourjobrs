import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import { Select } from "antd";
import { connect } from "react-redux";
import {
    updateProfile ,editUserProfile
  } from "@/redux/actions/userAction";
  import { saveTemporayJobPost } from "redux/actions/jobAction";
import {Form,Input, Switch ,Button, Radio ,DatePicker,Typography,Divider,TextArea  } from 'antd';
import LocationList from "../../components/jobs/input/LocationList";
import { getJobCategories } from "redux/actions/jobAction";


import { TagsInput } from "react-tag-input-component";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import JobCategogy from 'components/jobs/input/JobCategogy';

 
const Career_application = ({updateProfile, user_profile,editUserProfile,edit_user_profile,saveTemporayJobPost, temp_jobpost,getJobCategories, categories,  onClear }) => {
    useEffect(() => {
        updateProfile();
      },[]);
      const onFinish = (values ) => {
       
      
      
       console.log('Received values of form: ', values);
       editUserProfile(values);
       window.location.reload();
    //   console.log('update: ', editUserProfile);
     };
     const { OptGroup } = Select;

     useEffect(() => {
       getJobCategories();
     }, []);
   
     


    const { Option } = Select;
    
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}
    const { Title } = Typography;
    const { TextArea } = Input;
    
    //job level
    const plainOptions = ['entry', 'mid','top'];
    const [value, setValue] = React.useState();
    const onChange = e => {
      console.log('radio1 checked', e.target.value);
      setValue(e.target.value);
    };
    //job nature
    const natureOptions = ['Full time', 'Part time','Contractual','Freelance','Internship'];
    const [value2, setValue2] = React.useState();
    const onChange2 = e => {
      console.log('radio2 checked', e.target.value);
      setValue2(e.target.value);
      };
    
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
  
    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout);
    };

    const formItemLayout =
    formLayout === 'horizontal'
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
    formLayout === 'horizontal'
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
      const setJobLocation = (value) => {
        saveTemporayJobPost({ job_location: value });
      };
    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
                />
           
                <title>Career Application</title>
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
                           <Switch className="float-right" checkedChildren="available for work" unCheckedChildren="not available for work" defaultChecked />
                           <Divider> <Title>Career and Application details </Title></Divider> 
                            
                              <Form.Item label="Objective" name="objective">
                                <TextArea rows={4} />
                              </Form.Item>
                              <Form.Item label="Present Salary" name="present_salary">
                                  <Input placeholder="present salary" />
                              </Form.Item>
                              <Form.Item label="Expected Salary" name="expected_salary">
                                  <Input placeholder="expected salary" />
                              </Form.Item>
                              <Form.Item label="Job level"  name="job_level"> 
                                <Radio.Group onChange={onChange} options={plainOptions} value={value}>
                                            
                                </Radio.Group>
                              </Form.Item>
                              <Form.Item label="Job Nature" name="job_nature">
                                <Radio.Group onChange={onChange2} options={natureOptions} value={value2}>
                                 
                                            
                                </Radio.Group>
                              </Form.Item>
                              <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                  Save
                                </Button>
                              </Form.Item>
                         
                        </Form>
                        <Form
                            {...formItemLayout}
                            layout={formLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            
                          
                            >
                          
                          
                           <Divider> <Title>Prefered Categories </Title></Divider>
                                            
                                <Form.Item label="Functional">
                                  
                                  <JobCategogy></JobCategogy>

                                </Form.Item>
                                <Form.Item label="Special Skills ">
                                    <TagsInput></TagsInput>

                                </Form.Item>
                                <Form.Item label="Organization Type ">
                                    <TagsInput></TagsInput>

                                </Form.Item>
                                <Form.Item label="Location " >
                                  <LocationList
                                    
                                    multiple={true}
                                  />
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
      location: state.job.location,
      temp_jobpost: state.job.temp_jobpost,
      categories: state.job.categories,
    };
  };
export default connect(mapStateToProps, {updateProfile,editUserProfile,saveTemporayJobPost,getJobCategories})(Career_application); 
