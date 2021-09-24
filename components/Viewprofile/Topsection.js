import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProfile } from "@/redux/actions/userAction";
import { Layout, Row, Col, Image, Typography, Space } from "antd";
import { PhoneFilled, HomeFilled } from "@ant-design/icons";

const Topsection = ({ updateProfile, user_profile }) => {
  const { Text, Link, Title } = Typography;
  const { Content } = Layout;
  
  //console.log(user_profile);
  return (
    <div>
      <Row justify="center" align="top">
        <Col span={4}>
          <Image
            className="profile_image"
            shape="circle"
            width={100}
            height={100}
            src={"http://127.0.0.1:8000" + user_profile.image}
          />
        </Col>

        <Col span={20}>
          <Title level={2}>{user_profile.name}</Title>
          <Space>
            <Text>
              <PhoneFilled /> {"  "}
              {user_profile.phone}
            </Text>
            <Text>
              <HomeFilled /> {"  "}
              {user_profile.Thana == null
                ? "-"
                : user_profile.Thana.name + ", "}
              {user_profile.District == null
                ? "-"
                : user_profile.District.name + ", "}
              {user_profile.Division == null ? "-" : user_profile.Division.name}
            </Text>
          </Space>
          <Text>
            <p>{user_profile.bio}</p>
          </Text>
        </Col>
      </Row>
    </div>
  );
};


export default Topsection;
