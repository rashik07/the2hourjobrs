import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import Add_experience from "../../components/Add_experience"
import { Select } from "antd";
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider,TextArea , Space  } from 'antd';

const Employment = () => {
    const { RangePicker } = DatePicker;
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
           
                <title>Profile Info</title>
            </Head>
            <Navbar />
            <div className="container">
            <div className="row">
            <div className="col-md-3 ">
                <Sidebar />    
            </div>
            

                <main className="col-md-9   my-4">
                    
                        <div className="row">
                            <div className="col-4">
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
                           
                                <Divider> <Title>Add Experience</Title></Divider>
                                <Form.Item label="Company Name:">
                                        <Input placeholder="company name" />
                                </Form.Item>
                                <Form.Item label="Company Business:">
                                        <Input placeholder="company Business" />
                                </Form.Item>
                                <Form.Item label="Designation:">
                                        <Input placeholder="Designation" />
                                </Form.Item>
                                <Form.Item label="Department:">
                                        <Input placeholder="Department " />
                                </Form.Item>
                                <Form.Item label="Location:">
                                        <Input placeholder="Location " />
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

export default Employment;