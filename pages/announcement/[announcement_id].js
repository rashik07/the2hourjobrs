import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Footer from "../../container/footer/footer";
import Newnavbar from "../../container/navbar/newNavbar";
import {
  Row,
  Col,
  Image,
  Divider,
  Button,
  Space,
  Layout,
  Breadcrumb,
} from "antd";
import { useRouter } from "next/router";
import {
  PhoneOutlined,
  ScheduleOutlined,
  HomeOutlined,
  UserOutlined,
  FieldTimeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { getSpecificAnnouncement } from "../../redux/actions/announcementAction";
import dateformat from "dateformat";
import Link from "next/link";
const { Content } = Layout;
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const AnnouncementDetails = ({ getSpecificAnnouncement, announcment }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const { announcement_id } = router.query;
  const shareUrl = `https://www.google.com/announcement/${announcement_id}`;

  useEffect(() => {
    getSpecificAnnouncement(announcement_id).then(() => {
      setLoader(false);
    });
  }, []);

  const renderimage = () => {
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

  const rendergalleryimage = () => {
    return announcment.image.map((imagee) => {
      // console.log(imagee);
      // <Col xs={12} sm={12} md={12} lg={12} xl={12}>
      // <Image src={"http://127.0.0.1:8000" + imagee} />
      // </Col>
      <p>sadik</p>;
    });
  };

  const renderAnnounements = () => {
    console.log(announcment);
    if (!loader) {
      return (
        <Row key={announcment.id}>
          <Col xs={24} sm={24} md={5} lg={5} xl={5}>
            {renderimage()}
            <Row>
              <Image.PreviewGroup>
                {announcment.image.map((imagee) => {
                  if (!imagee.cover) {
                    return (
                      <Col
                        xs={8}
                        sm={8}
                        md={8}
                        lg={8}
                        xl={8}
                        style={{ padding: "3px" }}
                      >
                        <Image src={imagee.photo} />
                      </Col>
                    );
                  }
                })}
              </Image.PreviewGroup>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} offset={1}>
            <h2>{announcment.title}</h2>
            <p style={{ marginBottom: "1px", color: "blue" }}>
              posted by {announcment.user.name}
            </p>
            <p>
              {/* <EnvironmentOutlined /> {announcment.user.profile.address} */}
            </p>
            <Space></Space>
            <h3>Description</h3>
            <p>{announcment.description}</p>
            <Divider />
            <h3>Other annoucement from the same user</h3>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4} xl={4} offset={1}>
            <h3>location</h3>
            <p>
              Address:{" "}
              {announcment.Thana == null ? "-" : announcment.Thana.name + ", "}
              {announcment.District == null
                ? "-"
                : announcment.District.name + ", "}
              {announcment.Division == null ? "-" : announcment.Division.name}
            </p>
            <p>
              Contact:{" "}
              {announcment.contact_information == null
                ? "-"
                : announcment.contact_information}
            </p>

            <Divider />
            <h3>User details</h3>
            <p>
              Phone:{" "}
              {announcment.user.phone == null ? "-" : announcment.user.phone}
            </p>
            <p>
              Gender:{" "}
              {announcment.user.gender == null ? "-" : announcment.user.gender}
            </p>
            <p>
              Bio: {announcment.user.bio == null ? "-" : announcment.user.bio}
            </p>
          </Col>
        </Row>
      );
    } else {
      return <h3>Loading</h3>;
    }
  };

  return (
    <>
      <Head>
        <title>{announcment.title}</title>
      </Head>
      <Layout>
        <Newnavbar />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/announcement">Announcement</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{announcment.title}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {renderAnnounements()}
            <div
        style={{
          background: "#0000",
          height: "100vh",
          width: "100%",
        }}
      >
        <h1>I hope you like it</h1>

        <FacebookShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <EmailShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
        <FacebookMessengerShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <FacebookMessengerIcon size={40} round={true} />
        </FacebookMessengerShareButton>
      </div>
            
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return { announcment: state.announcement.singleAnnouncement };
};

export default connect(mapStateToProps, { getSpecificAnnouncement })(
  AnnouncementDetails
);
