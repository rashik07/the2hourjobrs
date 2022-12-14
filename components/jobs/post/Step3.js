import React from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import { Button, message, Row, Col } from "antd";

const Step3 = ({ postStep, setPostStep, temp_jobpost }) => {
  const onSubmit = () => {
    const { min_experience, max_experience, min_age, max_age, education } =
      temp_jobpost;
    // if (education.length == 0) {
    //   message.warning("You must select education");
    //   return;
    // }
    // if (!min_experience && !max_experience) {

    //   }
    if (parseInt(min_experience) >= parseInt(max_experience)) {
      message.warning("Max experience should be greater than Min experience");
      return;
    }
    console.log(min_age, max_age);
    if (!min_age && !max_age && min_age == undefined && max_age == undefined) {
      message.warning("please enter Max age , Min age");
      return;
    }
    if (min_age >= max_age) {
      message.warning("Max age should be greater than Min age");
      return;
    }

    setPostStep(postStep + 1);
    console.log(temp_jobpost);
  };

  return (
    <>
      <br />
      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          xl={{ span: 5, offset: 0 }}
        >
          <img
            src="../../../img/banner_jobpost2.jpg"
            style={{ width: "100%" }}
          />
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 12, offset: 1 }}
          lg={{ span: 12, offset: 1 }}
          xl={{ span: 12, offset: 1 }}
        >
          <StepsParent item="education" />

          <StepsParent item="gender" />

          <StepsParent item="age" />

          <StepsParent item="experience" />

          <div>
            <Button
              onClick={() => setPostStep(postStep - 1)}
              className="btn btn-secondary mr-3"
              style={{
                marginRight: "10px",
                backgroundColor: "dodgerblue",
                color: "#ffffff",
              }}
            >
              Prev
            </Button>
            <Button onClick={onSubmit} className="btn btn-primary mr-3">
              Next
            </Button>
          </div>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
          xl={{ span: 5, offset: 1 }}
        >
          <img
            src="../../../img/banner_jobpost.jpg"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    temp_jobpost: state.job.temp_jobpost,
  };
};

export default connect(mapStateToProps)(Step3);
