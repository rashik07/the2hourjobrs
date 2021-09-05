import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {  createTraining,viewTraining,deleteTraining } from "@/redux/actions/usereducationAction";
import {Form,Input, Button, DatePicker,Typography,Divider,InputNumber,Select,Table, Space  } from 'antd';
import {  DeleteOutlined } from '@ant-design/icons';
const Training = ({createTraining,viewTraining,deleteTraining,view_training }) => {
  
  useEffect(() => {
      
    viewTraining();
    //setUpdateList(false);
    
  },[]);
  const dateFormat = 'YYYY';
  //create_education.year_of_passing=moment(create_education.year_of_passing, dateFormat);
  const onFinish = (values) => {
      values = {
          ...values,
          'training_year': values['training_year'].format('YYYY'),
        };
        createTraining(values);
      console.log('Success:', values);
    };
 
    const { TextArea } = Input;            
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

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
    
    const config = {
        rules: [
          {
            type: 'object',
            required: true,
            message: 'Please select time!',
          },
        ],
      };
    const { Title } = Typography;
    const columns = [
      {
        title: 'Title',
        dataIndex: "title",
        key: 'title',
        width: '30%',
        //...this.getColumnSearchProps('name'),
      },
      {
        title: 'Institution',
        dataIndex: 'institution',
        key: 'institution',
        width: '100%',

       // ...this.getColumnSearchProps('age'),
      },
     
      {
        title: 'Training_year',
        dataIndex: 'training_year',
        key: 'training_year',
        width: '150px',
      //  ...this.getColumnSearchProps('address'),
     //   sorter: (a, b) => a.address.length - b.address.length,
//sortDirections: ['descend', 'ascend'],
      },
     
      {
        title: 'Action',
        key: 'action',
                  
        render: (details) => (
          console.log('training id:',details.id),
          <Space size="middle">
            
             <DeleteOutlined  key="ellipsis" onClick={()=>{deleteTraining(details.id);window.location.reload()}} 
             
             />
             
          </Space>
          
        ),
      },
    ];
    return (
        <div>
                        <Form
                              {...formItemLayout}
                              layout={formLayout}
                              form={form}
                              onFinish={onFinish}
                           
                        >
                                                 
                            <Divider> <Title>Training</Title></Divider>
                            <Table columns={columns} dataSource={view_training} />
                            <Form.Item label="Title" name="title">
                                <Input/>
                            </Form.Item>                                
                            <Form.Item label="Institution" name="institution">                                
                                <Input/>
                            </Form.Item>
                                                       
                            <Form.Item label="Year of Passing" name="training_year" {...config}>
                                <DatePicker  format={dateFormat} picker="year"/>
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
     
      create_training: state.education.create_training,
      view_training: state.education.view_training,
    
  };
};

export default connect(mapStateToProps, { createTraining,viewTraining,deleteTraining})(Training);