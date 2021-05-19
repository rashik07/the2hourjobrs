import React from "react";
import { connect } from "react-redux";
import { Descriptions } from "antd";
import { List } from "antd";
import dateformat from "dateformat";
import { postJob } from "redux/actions/jobAction";
import { useRouter } from "next/router";

const renderJobLocation = (inside_dhaka, locations) => {
  inside_dhaka
    ? (inside_dhaka = "Inside Dhaka")
    : (inside_dhaka = "Outside Dhaka");

  const extract_location = [];

  locations.forEach((element) =>
    extract_location.push(JSON.parse(element).name)
  );

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

const renderSalary = (min, max) => {
  let salary = "";

  if (min && max) {
    salary = `${min} - ${max} Taka (monthly)`;
  } else {
    min ? (salary = min) : (salary = max);
    salary += " Taka (monthly)";
  }

  return (
    <Descriptions.Item label="Salary" labelStyle={{ fontWeight: 700 }}>
      {salary}
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

const Step4 = ({ postStep, setPostStep, temp_jobpost, education, postJob }) => {
  const router = useRouter();

  const renderItem = (item) => {
    const labelStyle = { fontWeight: 700 };

    switch (item) {
      case "job_detail":
        return (
          <Descriptions title="Job Detail" layout="vertical">
            <Descriptions.Item label="Title" labelStyle={labelStyle}>
              {temp_jobpost.title}
            </Descriptions.Item>
            <Descriptions.Item label="Vacancy" labelStyle={labelStyle}>
              {temp_jobpost.vacancy}
            </Descriptions.Item>
            {renderSalary(temp_jobpost.min_salary, temp_jobpost.max_salary)}
            {renderDeadline(temp_jobpost.deadline)}
            {renderJobLocation(
              temp_jobpost.job_location_inside_dhaka,
              temp_jobpost.job_location
            )}
            {renderExperience(
              temp_jobpost.min_experience,
              temp_jobpost.max_experience
            )}
            <Descriptions.Item label="Workplace" labelStyle={labelStyle}>
              {temp_jobpost.workplace.length
                ? temp_jobpost.workplace.join(", ")
                : ""}
            </Descriptions.Item>
            <Descriptions.Item
              label="Employment Status"
              labelStyle={labelStyle}
            >
              {/* <List
                size="small"
                bordered
                dataSource={temp_jobpost.employment_status}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              /> */}
              {temp_jobpost.employment_status.length
                ? temp_jobpost.employment_status.join(", ")
                : ""}
            </Descriptions.Item>
            <Descriptions.Item label="Skills" labelStyle={labelStyle}>
              {/* <List
                size="small"
                bordered
                dataSource={temp_jobpost.skills}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              /> */}
              {temp_jobpost.skills.length ? temp_jobpost.skills.join(", ") : ""}
            </Descriptions.Item>
            <Descriptions.Item label="Description" labelStyle={labelStyle}>
              {temp_jobpost.description}
            </Descriptions.Item>
          </Descriptions>
        );

      case "employee_requirement":
        return (
          <Descriptions title="Employee Requirement" layout="vertical">
            <Descriptions.Item label="Gender" labelStyle={labelStyle}>
              {temp_jobpost.gender.length ? temp_jobpost.gender.join(", ") : ""}
            </Descriptions.Item>
            <Descriptions.Item label="Age" labelStyle={labelStyle}>
              {renderAge(temp_jobpost.min_age, temp_jobpost.max_age)}
            </Descriptions.Item>
            {renderEducation(education, temp_jobpost.education)}
          </Descriptions>
        );

      default:
        break;
    }
  };

  return (
    <>
      <div className="col-8 mt-4">
        <div className="text-secondary">
          {renderItem("job_detail")} <hr />
          {renderItem("employee_requirement")}
        </div>
        <button
          onClick={() => setPostStep(postStep - 1)}
          className="btn btn-secondary mr-3"
        >
          Prev
        </button>
        <button
          onClick={() => postJob(temp_jobpost, router)}
          className="btn btn-primary mr-3"
        >
          Post
        </button>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.job.education,
    temp_jobpost: state.job.temp_jobpost,
  };
};

export default connect(mapStateToProps, { postJob })(Step4);
