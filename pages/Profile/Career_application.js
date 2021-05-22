import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import { Select } from "antd";
import { connect } from "react-redux";
import {
    updateProfile
  } from "@/redux/actions/userAction";
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider,TextArea  } from 'antd';


 
const Career_application = ({updateProfile, user_profile}) => {
    useEffect(() => {
        updateProfile();
      },[]);
    
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
    const [value1, setValue1] = React.useState(1);
    const onChange1 = e => {
        console.log('radio1 checked', e.target.value);
        setValue1(e.target.value);
      };
      const [value2, setValue2] = React.useState(1);
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
                            initialValues={{
                            layout: formLayout,
                            }}
                         
                            >
                           
                           <Divider> <Title>Career and Application details </Title></Divider> 
                            
                                <Form.Item label="Objective">
                                    <TextArea rows={4}  defaultValue={user_profile.username}/>
                                </Form.Item>
                                <Form.Item label="Salary">
                                <Input.Group compact>
                                        <Select defaultValue="1">
                                            <Option value="1">Present</Option>
                                            <Option value="2">Except</Option>
                                        </Select>
                                        <Input style={{ width: 130, textAlign: 'center' }} placeholder="Minimum" />
                                        <Input
                                            className="site-input-split"
                                            style={{
                                            width: 30,
                                            borderLeft: 0,
                                            borderRight: 0,
                                            pointerEvents: 'none',
                                            }}
                                            placeholder="~"
                                            disabled
                                        />
                                        <Input
                                            className="site-input-right"
                                            style={{
                                            width: 130,
                                            textAlign: 'center',
                                            }}
                                            placeholder="Maximum"
                                        />
                                        </Input.Group>
                                </Form.Item>
                                <Form.Item label="Job level">
                                        <Radio.Group onChange={onChange1} value={value1}>
                                            <Radio value={1}>Entry Level</Radio>
                                            <Radio value={2}>Mid Level</Radio>
                                            <Radio value={3}>Top Level</Radio>
                                        </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Job Nature">
                                        <Radio.Group onChange={onChange2} value={value2}>
                                            <Radio value={1}>Full Time</Radio>
                                            <Radio value={2}>Part Time</Radio>
                                            <Radio value={3}>Contractual</Radio>
                                            <Radio value={4}>Freelance</Radio>
                                            <Radio value={5}>Internship</Radio>
                                            
                                        </Radio.Group>
                                </Form.Item>
                           <Divider> <Title>Prefered Categories </Title></Divider>
                                            
                                <Form.Item label="Functional">
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Please select"
                                        defaultValue={['a10', 'c12']}
                                        onChange={handleChange}
                                        >
                                        {children}
                                    </Select>

                                </Form.Item>
                                <Form.Item label="Special Skills ">
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Please select"
                                        defaultValue={['a10', 'c12']}
                                        onChange={handleChange}
                                        >
                                        {children}
                                    </Select>

                                </Form.Item>
                                <Form.Item label="Organization Type ">
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Please select"
                                        defaultValue={['a10', 'c12']}
                                        onChange={handleChange}
                                        >
                                        {children}
                                    </Select>

                                </Form.Item>
                                <Form.Item label="Location ">
                                    <Select
                                        labelInValue
                                        defaultValue={{ value: 'lucy' }}
                                        style={{ width: 120 }}
                                        onChange={handleChange}
                                    >
                                        <Option value="jack">Dhaka</Option>
                                        <Option value="lucy">Dinajpur</Option>
                                    </Select>,
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
    };
  };
export default connect(mapStateToProps, {updateProfile})(Career_application); 
