import React from 'react';
import { useState } from 'react';
import {Form,Input, Button, DatePicker,Typography,Divider } from 'antd';
import { connect } from "react-redux";
import { viewProject , createProject} from '@/redux/actions/projectAction';

const Add_project = ( {createProject}) => {
    const onFinish = (values) => {
        
      
   
        console.log('Success:', values );
        createProject(values);
        
        
       
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
                                   
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                
                                    >
                           
                                <Divider> <Title>Add Portfolio</Title></Divider>
                                
                              
                                <Form.Item label="Project Title:"  name={'title'}>
                                        <Input placeholder="project title" />
                                </Form.Item>
                                <Form.Item label="Skills:" name={ 'skills'}>
                                        <Input placeholder="skills" />
                                </Form.Item>
                                <Form.Item label="Description" name={'description'}>
                                    <TextArea rows={4} placeholder="description" />
                                </Form.Item>
                             
                      
                                <Form.Item className="text-center" >
                                    <Button type="primary" htmlType="submit" >
                                      Add
                                    </Button>
                                </Form.Item>
                                
                        </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      
      create_project: state.project.create_project,
    
    

    };
  };
  
  export default connect(mapStateToProps, { createProject})(Add_project);