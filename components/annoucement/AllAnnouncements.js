import React, { Component, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Divider, Button, Space, Tabs } from "antd";
import { ScheduleOutlined, UserOutlined } from "@ant-design/icons";
import {
  getAllAnnouncement,
  getAllSavedAnnouncement,
} from "../../redux/actions/announcementAction";
import dateformat from "dateformat";
import Link from "next/link";
const { TabPane } = Tabs;
import { List, Pagination } from "antd";

const AllAnnouncements = ({ getAllAnnouncement }) => {
  const [announcments, setannouncment] = useState([]);
  const pageSize = useRef(5);
  const [page_no, setPageNo] = useState(1);
  const totaldata = useRef();


  useEffect(() => {
    totaldata.current = 0;

    getAllAnnouncement(page_no, pageSize.current).then((result) => {
      totaldata.current = result.count;
      setannouncment(result.results);
    
    });
  }, [page_no]);

  const renderimage = (announcment) => {
    if (announcment.image.length > 0) {
      return announcment.image.map((announcment) => {
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

  const renderAnnounements = (announcment) => {
    if (announcment) {
     
        if (!announcment.archive) {
          return (
            <>
              <Row key={announcment.id} className="announcement_card">
                <Col xs={24} sm={4} md={6} lg={8} xl={6}>
                  <Row>
                    <Col span={12} offset={6}>
                      {renderimage(announcment)}
                      {/* {console.log(announcment)} */}
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
                        <UserOutlined />{" "}
                        <Link
                          href={{
                            pathname: "/Profile/Profile_details/",
                            query: { id: announcment.user.id },
                          }}
                        >
                          {announcment.user.name}
                        </Link>
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
                        // href= {"/announcement/[announcement_id]"} as={`/announcement/${announcment.id}`}
                        href={{
                          pathname: "/announcement/announcement_id",
                          query: { announcement_id: announcment.id },
                        }}
                      >
                        <Button
                          type="primary"
                          block
                          style={{ marginBottom: "15px" }}
                        >
                          View
                        </Button>
                      </Link>
                      {/* <Button
                        block
                        style={{ backgroundColor: "black", color: "white" }}
                        onClick={()=>console.log("click")}
                      >
                        Save
                      </Button> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Divider />
            </>
          );
        }
    
    }
  };

  const renderSavedAnnounements = (data) => {
    if (data) {
      return data.map((announcment) => {
        console.log(announcment.announcement_data);
        if (!announcment.announcement_data.archive) {
          return (
            <>
              <Row
                key={announcment.announcement_data.id}
                className="announcement_card"
              >
                <Col xs={24} sm={4} md={6} lg={8} xl={6}>
                  <Row>
                    <Col span={12} offset={6}>
                      {renderimage(announcment.announcement_data)}
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
                  <h3>{announcment.announcement_data.title}</h3>
                  <p>
                    <Space size={"large"}>
                      <div>
                        <UserOutlined />{" "}
                        {announcment.announcement_data.user.name}
                      </div>
                      {/* <div>
                      <FieldTimeOutlined /> {announcment.created_timestamp}
                    </div> */}
                      <div>
                        <ScheduleOutlined />{" "}
                        {dateformat(
                          announcment.announcement_data.created_timestamp,
                          "mmmm dS, yyyy"
                        )}
                      </div>
                    </Space>
                  </p>
                  <p>{announcment.announcement_data.description}</p>
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
                        href={
                          "/announcement/" +
                          announcment.announcement_data.id +
                          "/"
                        }
                      >
                        <Button
                          type="primary"
                          block
                          style={{ marginBottom: "15px" }}
                        >
                          View
                        </Button>
                      </Link>
                      <Button
                        block
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Remove
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
            <TabPane tab="All Announcements" key="1">
              {/* {renderAnnounements(announcments)} */}
              <List
                pagination={{
                  onChange: (page_no) => {
                    setPageNo(page_no);
                  },
                  current: page_no,
                  pageSize: pageSize.current,
                  defaultCurrent: page_no,
                  total: totaldata.current,
                }}
                dataSource={announcments}
                renderItem={(announcments) => renderAnnounements(announcments)}
              />
            </TabPane>
            {/* <TabPane tab="Saved Announcements" key="2">
                {renderSavedAnnounements(savedannouncments)}
              </TabPane> */}
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // announcments: Object.values(state.announcement.annountmentList),
    savedannouncments: state.announcement.savedannountmentList,
  };
};

export default connect(mapStateToProps, {
  getAllAnnouncement,
  getAllSavedAnnouncement,
})(AllAnnouncements);
