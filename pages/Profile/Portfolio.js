import Head from 'next/head';
import React, {useEffect, useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import Add_experience from "../../components/Add_experience"
import { Select } from "antd";
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider,TextArea , Space  } from 'antd';
import { connect } from "react-redux";
import { viewProject } from '@/redux/actions/projectAction';
const Portfolio = ({viewProject, view_project}) => {
    useEffect(() => {
        viewProject();
      },[]);
      console.log(view_project);

    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const { Title } = Typography;
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
    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
                />
           
                <title>Portfolio Info</title>
            </Head>
            <Navbar />
            <div className="container">
            <div className="row">
            <div className="col-md-3 ">
                <Sidebar />    
            </div>
            

                <main className="col-md-9   my-4">
                    
                        <div className="row">
                            <div className="col-4 ">
                                <Add_experience />
                            </div>
                            <div className="col-4">
                                <Add_experience />
                            </div>
                            <div className="col-4">
                                <Add_experience />
                            </div>
                            
                        </div> 
                        <Form 
                                {...formItemLayout}
                                    layout={formLayout}
                                    form={form}
                                    initialValues={{
                                    layout: formLayout,
                                    }}
                                
                                    >
                           
                                <Divider> <Title>Add Portfolio</Title></Divider>
                                <Form.Item label="Project Title:">
                                        <Input placeholder="project title" />
                                </Form.Item>
                                <Form.Item label="Skills:">
                                        <Input placeholder="skills" />
                                </Form.Item>
                                <Form.Item label="Description">
                                    <TextArea rows={4} placeholder="description" />
                                </Form.Item>
                                <Form.Item label="Time:">
                                <Space direction="vertical" size={16}>
                                    <RangePicker />
                                    
                                    
                                </Space>
                                
                                </Form.Item>
                                <Form.Item className="text-center">
                                    <Button type="primary">Add</Button>
                                </Form.Item>
                                
                        </Form>
                   

                </main>
            </div>
            </div>
        </div>
    );
};

/*export default Portfolio;*/
const mapStateToProps = (state) => {
    return {
      view_project: state.project.view_project,
    };
  };
  
  export default connect(mapStateToProps, {viewProject})(Portfolio);
  