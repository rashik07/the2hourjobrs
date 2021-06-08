import Head from 'next/head';
import React, {useEffect, useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import {Form,Input, Button, DatePicker,Typography,Divider } from 'antd';
import { connect } from "react-redux";
import { viewProject , createProject} from '@/redux/actions/projectAction';
import Add_project from 'components/Add_project';
import {
  updateProfile
} from "@/redux/actions/userAction";

const Portfolio = ({viewProject, view_project, createProject, updateProfile,user_profile}) => {
  useEffect(() => {
    updateProfile();
  },[]);
  const onFinish = (values) => {
   
   
    console.log('Success:', values );
    createProject(values);
    
   
  };
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
    useEffect(() => {
        viewProject();
      },[]);
    //  console.log(view_project);

    
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
                              {
                                  view_project.map(project => <Add_project 
                                  key={view_project.id}
                                  project={project}></Add_project>)
                            }  
                        </div>
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
      create_project: state.project.create_project,
      user_profile: state.user.user_profile,
    

    };
  };
  
  export default connect(mapStateToProps, {viewProject, createProject,updateProfile})(Portfolio);
  