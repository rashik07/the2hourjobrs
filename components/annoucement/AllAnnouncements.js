import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { getAllAnnouncement } from "../../redux/actions/announcementAction";
import dateformat from "dateformat";

class AllAnnouncements extends Component {
  componentDidMount() {
    this.props.getAllAnnouncement();
  }

  renderAnnounements() {
    if (this.props.announcments) {
      return this.props.announcments.map((announcment) => {
        return (
          <Row key={announcment.id}>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
              {announcment.title}
            </Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={12}>
              {announcment.description}
              {announcment.contact_information}
              {dateformat(announcment.created_timestamp, "mmmm dS, yyyy")}
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
              Col-3
            </Col>
          </Row>
        );
      });
    }
  }
  render() {
    return (
      <>
        <Row>
          <Col span={22} offset={2}>
            {this.renderAnnounements()}
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { announcments: Object.values(state.announcement.annountmentList) };
};

export default connect(mapStateToProps, { getAllAnnouncement })(
  AllAnnouncements
);
