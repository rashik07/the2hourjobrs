import React, { useEffect, useCallback, useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Layout } from "antd";
import Navbar from "../../container/navbar/newNavbar";
import { signIn, googleLogin, facebookLogin, password_reset } from "redux/actions/authAction";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, Typography } from "antd";
const forgot_password = ({password_reset}) => {
  const { Content } = Layout;
  const { Title } = Typography;
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log(values);
    
    let data = {'email': values.email}
    password_reset(data);
    form.resetFields();
    
  };
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <Content className="site-layout-home " style={{ marginTop: "100px" }}>
          <div className="site-layout-background">
            <Title className="text-center">Please Enter Your Email</Title>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item 
                name="email" 
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter Email",
                  },
                ]}
                >
                <Input placeholder="Please enter Email" />
            </Form.Item>
            <Form.Item>
              
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
            
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    name: state.auth.name,
    email: state.auth.email,
    phone: state.auth.phone,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, { password_reset })(forgot_password);
