import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Form, Button, Row, Col, Cascader } from "antd";
import {
  createAnnouncement,
  uploadimage,
} from "../../redux/actions/announcementAction";
import PicturesWall from "./PicturesWall";

const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 16,
  },
};

class AnnouncementCreateForm extends Component {
  state = {
    fileList: [],
  };

  setImages = (fileList) => {
    this.setState({ fileList });
  };

  render() {
    const onFinish = (values) => {
      this.props.createAnnouncement(values);
      this.state.fileList.map((file) => {
        this.props.uploadimage(this.props.announcementResponse.id, file);
      });
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <>
        <Row>
          <Col
            span={14}
            offset={1}
            className="announcement_frame announcement_form "
          >
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              size="large"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
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
              <Row>
                <Col xs={24} sm={4} md={6} lg={8} xl={11}>
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
                </Col>
                <Col xs={24} sm={4} md={6} lg={8} xl={11} offset={2}>
                  <Form.Item label="Cascader">
                    <Cascader
                      options={[
                        {
                          value: "zhejiang",
                          label: "Zhejiang",
                          children: [
                            {
                              value: "hangzhou",
                              label: "Hangzhou",
                            },
                          ],
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={8} className="announcement_frame ">
            <PicturesWall setImages={this.setImages} />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    announcementResponse: state.announcement.announcementResponse,
  };
};

export default connect(mapStateToProps, { createAnnouncement, uploadimage })(
  AnnouncementCreateForm
);
