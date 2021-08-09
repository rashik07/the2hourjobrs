import React from 'react';
import  { useEffect, useState } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import {
    updateProfile
} from "../../redux/actions/userAction";
import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker,
    Typography,
    Divider,
    TextArea,
  } from "antd";
  
const Add_basic_info = (updateProfile, props ) => {

 
    
     console.log(props.profile.id);


    const { Option } = Select;
    const { TextArea } = Input;
    const { Title } = Typography;
    const config = {
      rules: [
        {
          type: "object",
          required: true,
          message: "Please select time!",
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
  
    const onChange = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState("horizontal");
  
    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout);
    };
  
    const formItemLayout =
      formLayout === "horizontal"
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
      formLayout === "horizontal"
        ? {
            wrapperCol: {
              span: 14,
              offset: 4,
            },
          }
        : null;
    return (
        <div>
             <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{
                layout: formLayout,
                prefix: '880',
              }}
            >
              <Divider>
                {" "}
                <Title>Basic Info</Title>
              </Divider>
              <Form.Item label="Name">
                <Input placeholder="name" defaultValue={profile.username}/>
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="e-mail" defaultValue={profile.email}/>
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  defaultValue={profile.phone}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item label="NID Number">
                <Input placeholder="input NID number" defaultValue={profile.nid} />
              </Form.Item>
              <Form.Item label="Gender">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="date-picker" label="Date of Birth" {...config}>
                <DatePicker defaultValue={profile.birthday}/>
              </Form.Item>
              <Form.Item label="Nationality">
                <Input placeholder="nationality" defaultValue={profile.birthday}/>
              </Form.Item>
              <Form.Item label="Bio">
                <TextArea rows={4} defaultValue={profile.bio}/>
              </Form.Item>

              <Divider>
                {" "}
                <Title>Address</Title>
              </Divider>
              <Form.Item label="District">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                  defaultValue={profile.district}
                >
                  <Option value="1">Not Identified</Option>
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Thana">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                  defaultValue={profile.thana}
                >
                  <Option value="1">Not Identified</Option>
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Address">
                <TextArea rows={4} defaultValue={profile.address}/>
              </Form.Item>
            </Form>
        </div>
    );
};

export default Add_basic_info;
