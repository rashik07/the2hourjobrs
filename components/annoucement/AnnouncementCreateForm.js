import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Input,
  Form,
  Button,
  Row,
  Col,
  notification,
  Divider,
  Alert,
} from "antd";
import { createAnnouncement } from "../../redux/actions/announcementAction";
import PicturesWall from "./PicturesWall";

const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 16,
  },
};

const AnnouncementCreateForm = ({ createAnnouncement }) => {
  const [gallery, setgallery] = useState([]);
  const [cover, setcover] = useState([]);

  const uploadgallery = (fileList) => {
    setgallery(fileList);
  };

  const uploadcover = (fileList) => {
    setcover(fileList);
  };

  const onFinish = (values) => {
    if (cover.length == 0) {
      if (gallery.length > 0) {
        notification.open({
          message: "You must add a cover image",
          // description: "You must add a cover image",
        });
      } else {
        createAnnouncement(values, gallery, cover);
      }
    } else {
      createAnnouncement(values, gallery, cover);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
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
              {/* <Col xs={24} sm={4} md={6} lg={8} xl={11} offset={2}>
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
                </Col> */}
            </Row>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} sm={24} md={7} lg={7} xl={7} offset={1}>
          <p>Cover image ( 1 image )</p>
          <PicturesWall setImages={uploadcover} limit={1} />
          <Divider></Divider>
          <p>Gallery images ( 4 images )</p>
          <PicturesWall setImages={uploadgallery} limit={4} />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    announcementResponse: state.announcement.announcementResponse,
  };
};

export default connect(mapStateToProps, { createAnnouncement })(
  AnnouncementCreateForm
);
