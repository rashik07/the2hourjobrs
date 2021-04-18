import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Form, Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import { createAnnouncement } from "../../redux/actions/announcementAction";
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 16,
  },
};
const areas = [
  { label: "Beijing", value: "Beijing" },
  { label: "Shanghai", value: "Shanghai" },
];

class AnnouncementCreateForm extends Component {
  render() {
    const onFinish = (values) => {
      this.props.createAnnouncement(values);
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <>
        <div className="col-8 border-end">
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size={"large"}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Contact"
              name="contact_information"
              rules={[
                {
                  required: true,
                  message: "Please input your contact!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Slug"
              name="slug_id"
              rules={[
                {
                  required: true,
                  message: "Please input your contact!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Poster"
              name="poster"
              rules={[
                {
                  required: true,
                  message: "Please input your contact!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item
              name="Area"
              label="Area"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select a option" allowClear>
                <Option value="male">Dhaka</Option>
                <Option value="female">Dinajpur</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item> */}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="col-4">
          <h1>Tips</h1>
          <ul>
            <li>loram ipsam</li>
            <li>loram ipsam</li>
            <li>loram ipsam</li>
            <li>loram ipsam</li>
          </ul>
        </div>
      </>
    );
  }
}

export default connect(null, { createAnnouncement })(AnnouncementCreateForm);
