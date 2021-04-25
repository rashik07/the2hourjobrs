import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import { Select } from "antd";
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider,TextArea,InputNumber  } from 'antd';

const Education = () => {
    function onChangeNum(value) {
        console.log('changed', value);
      }
      
    const { Option } = Select;
    const { TextArea } = Input;
    const { Title } = Typography;
    const config = {
      rules: [
        {
          type: 'object',
          required: true,
          message: 'Please select time!',
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
  
      const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
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
      return (
          <div>
              <Head>
                  <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
                  />
             
                  <title>Education Info</title>
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
                              initialValues={{
                              layout: formLayout,
                              }}
                           
                              >
                             
                             <Divider> <Title>Academic Info</Title></Divider> 
                              <Form.Item label="Level of Education">
                              <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
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
                              <Form.Item label="Exam/Degree Title">
                                  
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
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
                              <Form.Item label="Institution">
                                  
                                  <Select
                                      showSearch
                                      style={{ width: 300 }}
                                      placeholder="Search to Select"
                                      optionFilterProp="children"
                                      filterOption={(input, option) =>
                                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                      filterSort={(optionA, optionB) =>
                                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
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
                              <Form.Item label="Result">
                                <InputNumber min={1} max={10} defaultValue={3} onChange={onChangeNum} />
                              </Form.Item>
                              
                              <Form.Item name="date-picker" label="Year of Passing" {...config}>
                                  <DatePicker />
                              </Form.Item>
                              <Form.Item className="text-center">
                                    <Button type="primary">Add</Button>
                              </Form.Item>
                    
                            <Divider> <Title>Training</Title></Divider>
                            <Form.Item label="Title">
                              <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
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
                             
                                  
                                
                              <Form.Item label="Institution">
                                  
                                  <Select
                                      showSearch
                                      style={{ width: 300 }}
                                      placeholder="Search to Select"
                                      optionFilterProp="children"
                                      filterOption={(input, option) =>
                                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                      filterSort={(optionA, optionB) =>
                                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
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
                              <Form.Item label="Duration">
                                <InputNumber min={1} max={10} defaultValue={3} onChange={onChangeNum} />
                              </Form.Item>
                              
                              <Form.Item name="date-picker" label="Year of Passing" {...config}>
                                  <DatePicker />
                              </Form.Item>
                              <Form.Item className="text-center">
                                    <Button type="primary">Add</Button>
                              </Form.Item>
                              <Divider> <Title>Professional Qualification</Title></Divider>
                            <Form.Item label="Certification">
                              <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
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
                             
                                  
                                
                              <Form.Item label="Institution">
                                  
                                  <Select
                                      showSearch
                                      style={{ width: 300 }}
                                      placeholder="Search to Select"
                                      optionFilterProp="children"
                                      filterOption={(input, option) =>
                                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                      filterSort={(optionA, optionB) =>
                                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
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
                              <Form.Item label="Location:">
                                        <Input placeholder="Location" />
                                </Form.Item>
                              <Form.Item label="Duration">
                                <InputNumber min={1} max={10} defaultValue={3} onChange={onChangeNum} />
                              </Form.Item>
                              
                              <Form.Item name="date-picker" label="Year of Passing" {...config}>
                                  <DatePicker />
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

export default Education;