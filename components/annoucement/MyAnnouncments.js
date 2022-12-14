import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Divider, Button, Space, Tabs } from "antd";
import {
  PhoneOutlined,
  ScheduleOutlined,
  HomeOutlined,
  UserOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import {
  getAllAnnouncementOfUser,
  archiveAnnouncement,
} from "../../redux/actions/announcementAction";
import dateformat from "dateformat";
import Link from "next/link";

const { TabPane } = Tabs;

const AllAnnouncements = ({
  getAllAnnouncementOfUser,
  archiveAnnouncement,
  announcments,
  auth,
}) => {
  const [updatelist, setUpdatelist] = useState(true);

  useEffect(() => {
    getAllAnnouncementOfUser(auth.id);
    setUpdatelist(true);
  }, [getAllAnnouncementOfUser, updatelist, setUpdatelist]);

  const renderimage = (announcments) => {
    if (announcments.image) {
      return announcments.image.map((announcment) => {
        if (announcment.cover) {
          return <Image src={announcment.photo} />;
        }
      });
    } else {
      return (
        <Image
          width={200}
          height={200}
          src="error"
          fallback="data:image/png;base64,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"
        />
      );
    }
  };

  const renderAnnounements = () => {
    if (announcments) {
      return announcments.map((announcment) => {
        if (!announcment.archive) {
          return (
            <>
              <Row key={announcment.id} className="announcement_card">
                <Col xs={24} sm={4} md={6} lg={8} xl={6}>
                  <Row>
                    <Col span={12} offset={6}>
                      {renderimage(announcment)}
                      {console.log(announcment)}
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={24}
                  sm={16}
                  md={12}
                  lg={8}
                  xl={12}
                  className="announcement_details"
                >
                  <h3>{announcment.title}</h3>
                  <p>
                    <Space size={"large"}>
                      <div>
                        <UserOutlined /> {announcment.user.name}
                      </div>
                      {/* <div>
                      <FieldTimeOutlined /> {announcment.created_timestamp}
                    </div> */}
                      <div>
                        <ScheduleOutlined />{" "}
                        {dateformat(
                          announcment.created_timestamp,
                          "mmmm dS, yyyy"
                        )}
                      </div>
                    </Space>
                  </p>
                  <p>{announcment.description}</p>
                  {/* <p>
                  <PhoneOutlined /> {announcment.contact_information}
                </p> */}
                </Col>
                <Col
                  xs={24}
                  sm={4}
                  md={6}
                  lg={8}
                  xl={6}
                  className="announcement_button"
                >
                  <Row>
                    <Col span={18} offset={3}>
                    <Link
                        // href={"/announcement/myannouncement/[announcement_id]"} as={`/announcement/myannouncement/${announcment.id}`}
                        href={{ pathname: '/announcement/myannouncement/announcement_id', query: { announcement_id: announcment.id} }}
                    >
                        <Button
                          type="primary"
                          block
                          style={{ marginBottom: "15px" }}
                        >
                          Edit
                        </Button>
                      </Link>
                      {/* <Link
                        href={"/announcement/myannouncement/" + announcment.id + "/"
                        }
                      >
                        <Button
                          type="primary"
                          block
                          style={{ marginBottom: "15px" }}
                        >
                          Edit
                        </Button>
                      </Link> */}
                      <Button
                        block
                        onClick={() =>
                          archiveAnnouncement(announcment, true, setUpdatelist)
                        }
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Move to Archive
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Divider />
            </>
          );
        }
      });
    }
  };
  const renderArchivedAnnounements = () => {
    if (announcments) {
      return announcments.map((announcment) => {
        if (announcment.archive) {
          return (
            <>
              <Row key={announcment.id} className="announcement_card">
                <Col xs={24} sm={4} md={6} lg={8} xl={6}>
                  <Row>
                    <Col span={12} offset={6}>
                      {renderimage(announcment)}
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={24}
                  sm={16}
                  md={12}
                  lg={8}
                  xl={12}
                  className="announcement_details"
                >
                  <h3>{announcment.title}</h3>
                  <p>
                    <Space size={"large"}>
                      <div>
                        <UserOutlined /> {announcment.user.name}
                      </div>
                      {/* <div>
                      <FieldTimeOutlined /> {announcment.created_timestamp}
                    </div> */}
                      <div>
                        <ScheduleOutlined />{" "}
                        {dateformat(
                          announcment.created_timestamp,
                          "mmmm dS, yyyy"
                        )}
                      </div>
                    </Space>
                  </p>
                  <p>{announcment.description}</p>
                  {/* <p>
                  <PhoneOutlined /> {announcment.contact_information}
                </p> */}
                </Col>
                <Col
                  xs={24}
                  sm={4}
                  md={6}
                  lg={8}
                  xl={6}
                  className="announcement_button"
                >
                  <Row>
                    <Col span={18} offset={3}>
                      <Link
                        href={{ pathname: '/announcement/myannouncement/announcement_id', query: { announcement_id: announcment.id} }}
                      >
                        <Button
                          type="primary"
                          block
                          style={{ marginBottom: "15px" }}
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        block
                        onClick={() =>
                          archiveAnnouncement(announcment, false, setUpdatelist)
                        }
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Move to Active Archives
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Divider />
            </>
          );
        }
      });
    }
  };

  return (
    <>
      <Row>
        <Col span={24} className="announcement_frame">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Active Announcements" key="1">
              {renderAnnounements()}
            </TabPane>
            <TabPane tab="Archived Announcements" key="2">
              {renderArchivedAnnounements()}
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    announcments: state.announcement.myAnnouncement,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  getAllAnnouncementOfUser,
  archiveAnnouncement,
})(AllAnnouncements);
