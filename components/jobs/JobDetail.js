import React, { useState, useEffect } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import {
  Descriptions,
  Layout,
  Breadcrumb,
  Typography,
  Button,
  List,
  message,
  Modal,
} from "antd";
import dateformat from "dateformat";
import Navbar from "container/navbar/newNavbar";
import { getAppliedJobsPerson, applyJob } from "@/redux/actions/jobAction";
import Link from "next/link";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";

const renderJobLocation = (inside_dhaka, locations) => {
  inside_dhaka
    ? (inside_dhaka = "Inside Dhaka")
    : (inside_dhaka = "Outside Dhaka");

  const extract_location = [];

  locations.forEach((element) => extract_location.push(element.name));

  locations = extract_location.join(", ");
  // locations += ` (${inside_dhaka})`;

  return (
    <Descriptions.Item label="Job location" labelStyle={{ fontWeight: 700 }}>
      {locations}
    </Descriptions.Item>
  );
};

const renderDeadline = (date) => {
  date = dateformat(date, "dd mmmm, yyyy");
  return (
    <Descriptions.Item label="Deadline" labelStyle={{ fontWeight: 700 }}>
      {date}
    </Descriptions.Item>
  );
};

const renderSalary = (min, max, negotiable) => {
  let salary = "";

  if (min && max) {
    salary = `${min} - ${max} Taka (monthly)`;
  } else {
    min ? (salary = min) : (salary = max);
    salary += " Taka (monthly)";
  }

  return (
    <Descriptions.Item label="Salary" labelStyle={{ fontWeight: 700 }}>
      {/* {salary} */}
      {negotiable ? "Negotiable" : <>{salary}</>}
    </Descriptions.Item>
  );
};

const renderExperience = (min, max) => {
  let experience = "";

  if (min && max) {
    experience = `${min} - ${max} years`;
  } else {
    min ? (experience = min) : (experience = max);
    experience += " years";
  }
  console.log(experience);

  return (
    <Descriptions.Item label="Experience" labelStyle={{ fontWeight: 700 }}>
      {experience=="null years" ? "": experience}
    </Descriptions.Item>
  );
};

const renderAge = (min, max) => {
  let age = "";

  if (min && max) {
    age = `${min} - ${max} year`;
  } else {
    if (min) {
      age = `Minimum ${min} years`;
    } else {
      age = `Max ${max} years`;
    }
  }

  return (
    <Descriptions.Item label="Age" labelStyle={{ fontWeight: 700 }}>
      {age}
    </Descriptions.Item>
  );
};

const renderEducation = (education, job_post_education) => {
  education = education.map((edu) => {
    return edu.child.map((child) => {
      if (job_post_education.includes(child.id)) return child;
    });
  });

  const child_educations = [];
  education.forEach((element) => {
    element.forEach((subelement) => {
      if (subelement) child_educations.push(subelement.name);
    });
  });

  return (
    <Descriptions.Item label="Education" labelStyle={{ fontWeight: 700 }}>
      <List
        size="small"
        dataSource={job_post_education}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      />
    </Descriptions.Item>
  );
};

const JobDetail = ({
  temp_job,
  education,
  getAppliedJobsPerson,
  applied_jobs_person,
  userid,
  isSignedIn,
  applyJob,
}) => {
  const [user, setUser] = useState(null);
  const { id, title, poster, applied, saved, applied_saved_id } = temp_job;
  const [disable, setDisable] = useState(false);

  const btn_disable = userid === poster.id ? "disabled" : "";

  const [appliedStatus, setAppliedStatus] = useState(applied);

  useEffect(() => {
    if (isSignedIn) {
      getAppliedJobsPerson(temp_job).then((u) => setUser(u));
    }
    // applyJob();
  }, [temp_job]);

  const appliedPerson = () => {
    if (user === null) {
      return <p>Loading profile...</p>;
    }
    return applied_jobs_person.map((applied_jobs_person) => {
      return (
        <div style={{ marginLeft: "5px" }}>
          <Link
            href={{
              pathname: "/Profile/Profile_details/",
              query: { id: applied_jobs_person.user.id },
            }}
          >
            <a> {applied_jobs_person.user.username}</a>
          </Link>
          {" , "}
        </div>
      );
    });
  };
  const renderItem = (item) => {
    const labelStyle = { fontWeight: 700 };

    switch (item) {
      case "job_detail":
        return (
          <>
            {" "}
            {applyShow()}
            <Descriptions title={temp_job.title} layout="horizontal">
              <Descriptions.Item
                label="Job Poster"
                labelStyle={labelStyle}
                style={{ fontWeight: "700" }}
              >
                <Link
                  href={{
                    pathname: "/Profile/Profile_details/",
                    query: { id: temp_job.poster.id },
                  }}
                >
                  {temp_job.poster.username}
                </Link>
              </Descriptions.Item>

              <Descriptions.Item label="Vacancy" labelStyle={labelStyle}>
                {temp_job.vacancy}
              </Descriptions.Item>
              {renderSalary(
                temp_job.min_salary,
                temp_job.max_salary,
                temp_job.negotiable
              )}
              {renderDeadline(temp_job.deadline)}
              {renderJobLocation(
                temp_job.job_location_inside_dhaka,
                temp_job.job_location
              )}
              {renderExperience(
                temp_job.min_experience,
                temp_job.max_experience
              )}
              <Descriptions.Item label="Workplace" labelStyle={labelStyle}>
                {temp_job.workplace.length ? temp_job.workplace.join(", ") : ""}
              </Descriptions.Item>
              <Descriptions.Item
                label="Employment Status"
                labelStyle={labelStyle}
              >
                {temp_job.employment_status.length
                  ? temp_job.employment_status.join(", ")
                  : ""}
              </Descriptions.Item>
              <Descriptions.Item label="Skills" labelStyle={labelStyle}>
                {temp_job.skills.length ? temp_job.skills.join(", ") : ""}
              </Descriptions.Item>
              {/* <Descriptions.Item label="Description" labelStyle={labelStyle}>
              {temp_job.job_description}
            </Descriptions.Item> */}
            </Descriptions>
          </>
        );
      case "job_description":
        return (
          <Descriptions title="Job Description" layout="vertical">
            <Descriptions.Item label="" labelStyle={labelStyle}>
              {temp_job.job_description}
            </Descriptions.Item>
          </Descriptions>
        );

      case "employee_requirement":
        return (
          <Descriptions title="Employee Requirement" layout="horizontal">
            <Descriptions.Item label="Gender" labelStyle={labelStyle}>
              {temp_job.gender.length ? temp_job.gender.join(", ") : ""}
            </Descriptions.Item>
            <Descriptions.Item label="Age" labelStyle={labelStyle}>
              {renderAge(temp_job.min_age, temp_job.max_age)}
            </Descriptions.Item>
            <Descriptions.Item label="Education" labelStyle={labelStyle}>
              {/* {temp_job.education.map(() => {
                return " "+temp_job.education[0].name + ",";
                
              })} */}
              {renderEducation(education, temp_job.education)}
            </Descriptions.Item>
          </Descriptions>
        );

      default:
        break;
    }
  };
  const { Content } = Layout;
  // if (user === null) {
  //   return <p>Loading profile...</p>;
  // }

  const applyJobBtnClick = () => {
    if (!isSignedIn) {
      message.error("You must log in to access this feature");
    } else {
      const { confirm } = Modal;

      confirm({
        title: "Are you sure apply this job?",
        icon: <ExclamationCircleOutlined />,
        // content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          setDisable(true);
          applyJob(
            id,
            userid,
            appliedStatus,
            setAppliedStatus,
            applied_saved_id
          );
          // window.location.reload();
          message.success('Applied successfully');
        },
      });
    }
  };
  const applyShow = () => {
    if (appliedStatus) {
      return (
        <Button
          type="primary"
          onClick={applyJobBtnClick}
          disabled
          style={{ float: "right" }}
        >
          Applied
        </Button>
      );
    } else if (btn_disable) {
      return "";
    } else
      return (
        <Button
          type="primary"
          onClick={applyJobBtnClick}
          style={{ float: "right" }}
          disabled={disable}
        >
          Apply Now
        </Button>
      );
  };

  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <Layout>
        <Navbar temp_job={temp_job} />

        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item href="/">
              {" "}
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/jobs/list">Job List</Breadcrumb.Item>
            <Breadcrumb.Item>Job Details - {temp_job.title.slice(0, 15) + "..."}</Breadcrumb.Item>
           
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="text-secondary">
              {typeof applied_jobs_person == "undefined" ? (
                ""
              ) : (
                <>
                  {userid == poster.id ? (
                    <>
                      {" "}
                      <span className="applied_person">
                        Applied Person: {appliedPerson()}
                      </span>
                      <hr />
                    </>
                  ) : (
                    ""
                  )}
                </>
              )}
              {renderItem("job_detail")} <hr />
              {renderItem("job_description")} <hr />
              {renderItem("employee_requirement")}
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.job.education,
    applied_jobs_person: state.job.applied_jobs_person,
    userid: state.auth.id,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, {
  getAppliedJobsPerson,
  applyJob,
})(JobDetail);
