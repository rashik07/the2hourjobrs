import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";


import {Form,Input, Button, Radio ,DatePicker,Typography,Divider,TextArea , Space  } from 'antd';

const Setting = () => {
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
           
                <title>Setting</title>
            </Head>
            <Navbar />
            <div className="container">
            <div className="row">
            <div className="col-md-3 ">
                <Sidebar />    
            </div>
            

                <main className="col-md-9   my-4" style={{ height: "600px" }}>
                    
                        
                        <Form 
                                {...formItemLayout}
                                    layout={formLayout}
                                    form={form}
                                    initialValues={{
                                    layout: formLayout,
                                    }}
                                
                                    >
                           
                                <Divider> <Title>Recovery Password</Title></Divider>
                                <Form.Item label="Current Password:">
                                        <Input placeholder="current password" />
                                </Form.Item>
                                <Form.Item label="New Password:">
                                        <Input placeholder="new password" />
                                </Form.Item>
                                <Form.Item label="Retype Password:">
                                        <Input placeholder="Retype password" />
                                </Form.Item>
                                <Form.Item className="text-center">
                                    <Button type="primary">Submit</Button>
                                </Form.Item>
                                
                        </Form>
                   

                </main>
            </div>
            </div>
        </div>
    );
};

export default Setting;