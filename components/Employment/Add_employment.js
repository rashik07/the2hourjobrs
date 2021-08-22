import React from 'react';
import { useState } from 'react';
import {Form,Input, Button,DatePicker, Radio,Typography,Divider, Space,TextArea ,Card,Avatar } from 'antd';
import { connect } from "react-redux";
import { viewProject , createEmployment} from '@/redux/actions/employmentAction';
import Link from 'next/link'
import moment from 'moment';
const Add_employment = ( {createEmployment ,view_employment}) => {

  const dateFormat = 'YYYY-MM-DD';
  view_employment.employment_period_from=moment(view_employment.employment_period_from, dateFormat);
  view_employment.employment_period_to=moment(view_employment.employment_period_to, dateFormat);
    const onFinish = (values) => { 
      values = {
        ...values,
        'employment_period_from': values['employment_period_from'].format('YYYY-MM-DD'),
        'employment_period_to': values['employment_period_to'].format('YYYY-MM-DD'),
        // 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
        console.log('Success:', values );
        createEmployment(values);
        window.location.reload();
      };
      
    
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      
       
      
    
        
        const { TextArea } = Input;
        const { Title } = Typography;
        const [form] = Form.useForm();
        const [formLayout, setFormLayout] = useState('horizontal');
      
        const onFormLayoutChange = ({ layout }) => {
          setFormLayout(layout);
        };
        
    
        const layout = {
          labelCol: {
            span: 8,
          },
          wrapperCol: {
            span: 16,
          },
        };
     
    return (
        <div>
                        <Form 
                                {...layout}
                                    layout={formLayout}
                                    form={form}
                                   
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    >
                           
                                <Divider> <Title>Add Experience</Title></Divider>
                                <Form.Item label="Company Name:" name="company_name">
                                        <Input placeholder="company name" />
                                </Form.Item>
                                <Form.Item label="Company Business:" >
                                        <Input placeholder="company Business" />
                                </Form.Item>
                                <Form.Item label="Designation:" name="designation">
                                        <Input placeholder="Designation" />
                                </Form.Item>
                                <Form.Item label="Department:" name="department">
                                        <Input placeholder="Department " />
                                </Form.Item>
                                <Form.Item label="Location:" name="company_location">
                                        <Input placeholder="Location " />
                                </Form.Item>
                                
                                <Form.Item  label="From"  name="employment_period_from">
                                        <DatePicker format={dateFormat}/>
                                </Form.Item>
                                <Form.Item  label="To"  name="employment_period_to">
                                        <DatePicker format={dateFormat}/>
                                </Form.Item>
                              
                                    
                                    
                                
                                <Form.Item className="text-center">
                                    <Button type="primary" htmlType="submit">Add</Button>
                                </Form.Item>
                                
                        </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      
      create_employment: state.employment.create_employment,
      view_employment: state.employment.view_employment,
    

    };
  };
  
  export default connect(mapStateToProps, { createEmployment})(Add_employment);