import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import { Select } from "antd";
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider,TextArea,InputNumber  } from 'antd';
import { getEducation } from "redux/actions/jobAction";
import EducationField from 'components/jobs/input/EducationField';

const Education = ({ getEducation, education} ) => {
   useEffect(() => {
     getEducation();
   }, []);
  //console.log('education',education);
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
                                  onChange={setValue}
                                >
                                 
                                   
                                  {education.map((parent) => {
                                     //console.log(parent.id);
                                      <Option key={parent.id} value={parent.id}  >
                                       {parent.name}
                                      
                                      </Option>
                                     // console.log('parent end:',parent.name);
                                   })}
                                 
                                </Select>
                              </Form.Item>
                              <Form.Item label="Exam/Degree Title">
                                  
                                <Select
                                >
                                   <Option   >
                                       dssdd
                                      
                                    </Option>
                                </Select>
                              </Form.Item>
                              <Form.Item label="Institution">
                                  
                                  <Select
                                      
                                  >
                                      
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
                                   
                                >
                                    
                            </Select>
                              </Form.Item>
                             
                                  
                                
                              <Form.Item label="Institution">
                                  
                                  <Select
                                     
                                  >
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
                                
                                >
                                  
                            </Select>
                              </Form.Item>
                             
                                  
                                
                              <Form.Item label="Institution">
                                  
                                  <Select
                                     
                                  >
                                     
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

const mapStateToProps = (state) => {
  return {
    education: state.job.education,
  };
};

export default connect(mapStateToProps, { getEducation })(Education);