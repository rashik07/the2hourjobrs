import React, { useState, useEffect } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import { Descriptions, Layout, Breadcrumb, Typography } from "antd";
import dateformat from "dateformat";
import Navbar from "container/navbar/newNavbar";
import { getAppliedJobsPerson } from "@/redux/actions/jobAction";
import Link from "next/link";

const renderJobLocation = (inside_dhaka, locations) => {
  inside_dhaka
    ? (inside_dhaka = "Inside Dhaka")
    : (inside_dhaka = "Outside Dhaka");

  const extract_location = [];

  locations.forEach((element) => extract_location.push(element.name));

  locations = extract_location.join(", ");
  locations += ` (${inside_dhaka})`;

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

  return (
    <Descriptions.Item label="Experience" labelStyle={{ fontWeight: 700 }}>
      {experience}
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
      {/* <List
          size="small"
          bordered
          dataSource={child_educations}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        /> */}
      {child_educations.join(", ")}
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
}) => {
  // const { Paragraph, Title } = Typography;
  const [user, setUser] = useState(null);
  //  console.log(user);
  useEffect(() => {
    if (isSignedIn) {
      getAppliedJobsPerson(temp_job).then((u) => setUser(u));
    }
  }, [temp_job]);

  console.log(temp_job);
  // if(applied_jobs_person)
  const appliedPerson = () => {
    if (user === null) {
      return <p>Loading profile...</p>;
    }
    return applied_jobs_person.map((applied_jobs_person) => {
      //  console.log(applied_jobs_person.user.username);
      //  console.log(user);

      return (
        <Link href={`/Profile/Profile_details/${applied_jobs_person.user.id}`}>
          <a>
            {" "}
            {applied_jobs_person.user.username}
            {", "}
          </a>
        </Link>
      );
    });
  };
  const renderItem = (item) => {
    const labelStyle = { fontWeight: 700 };

    switch (item) {
      case "job_detail":
        return (
          <Descriptions title="Job Detail" layout="vertical">
            <Descriptions.Item label="Title" labelStyle={labelStyle}>
              {temp_job.title}
            </Descriptions.Item>

            <Descriptions.Item label="Job Poster" labelStyle={labelStyle}>
              <Link href={`/Profile/Profile_details/${temp_job.poster.id}`}>
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
            {renderExperience(temp_job.min_experience, temp_job.max_experience)}
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
            <Descriptions.Item label="Description" labelStyle={labelStyle}>
              {temp_job.job_description}
            </Descriptions.Item>
          </Descriptions>
        );

      case "employee_requirement":
        return (
          <Descriptions title="Employee Requirement" layout="vertical">
            <Descriptions.Item label="Gender" labelStyle={labelStyle}>
              {temp_job.gender.length ? temp_job.gender.join(", ") : ""}
            </Descriptions.Item>
            <Descriptions.Item label="Age" labelStyle={labelStyle}>
              {renderAge(temp_job.min_age, temp_job.max_age)}
            </Descriptions.Item>
            <Descriptions.Item label="Education" labelStyle={labelStyle}>
              {temp_job.education.map(() => {
                return temp_job.education[0].name;
              // return  console.log(temp_job.education[0].name);
              })}
              {/* {renderEducation(education, temp_job.education)} */}
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
  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <Layout>
        <Navbar temp_job={temp_job} />

        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Job</Breadcrumb.Item>
            <Breadcrumb.Item>Job Details</Breadcrumb.Item>
            <Breadcrumb.Item>{temp_job.title}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="text-secondary">
              {renderItem("job_detail")} <hr />
              {renderItem("employee_requirement")}
              {typeof applied_jobs_person == "undefined" ? (
                ""
              ) : (
                <>
                  <span style={{ fontWeight: "bold" }}>Applied Person:</span>{" "}
                  {userid == applied_jobs_person.id ? appliedPerson() : ""}
                </>
              )}
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
})(JobDetail);
//export default connect(mapStateToProps)(JobDetail);
