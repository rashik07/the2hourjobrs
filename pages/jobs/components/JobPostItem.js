import Link from "next/link";
import React from "react";
import { connect } from "react-redux";

const SpecificJobPost = ({ job, userid }) => {
  const { title, user } = job;
  const btn_disable = userid === user.id ? "disabled" : "";

  const getExperience = (min, max) => {
    if (min && max) {
      return `${min} to ${max} year(s)`;
    }

    if (min) {
      return `Minimum ${min} year(s)`;
    }
    return `Maximum ${max} year(s)`;
  };

  const getLocations = (location) => {
    const location_list = [];

    location.forEach((loc) => {
      location_list.push(loc.name);
    });

    return location_list.join(", ");
  };

  const getEducation = (education) => {
    const education_list = [];

    education.forEach((edu) => {
      education_list.push(edu.name);
    });

    return education_list.join(", ");
  };

  return (
    <div className="row d-flex align-items-center border m-3 rounded">
      <div className="col-9 text-muted fs-6">
        <h4 className=" text-dark">
          <strong className="title-home">{title}</strong>
          <br />
        </h4>
        <h5 className="text-dark">
          <strong>
            <Link href="/Profile/Profile_info">{user.name}</Link>
          </strong>
          <br />
        </h5>
        <p>
          <i className="fas fa-map-marker-alt mr-2" />
          {getLocations(job.location)} <br />
        </p>
        <p>
          <i className="fas fa-book-open mr-2" />
          {getEducation(job.education)}
          <br />
        </p>
        <p>
          <i className="fas fa-briefcase mr-2" />
          {getExperience(job.min_experience, job.max_experience)}
        </p>
      </div>
      <div className="col-3 btn-group-vertical">
        <a href="#" className={`btn button-home rounded ${btn_disable}`}>
          Apply
        </a>
        <a href="#" className="btn button-home mt-2 rounded">
          Details
        </a>
        <a href="#" className={`btn button-home mt-2 rounded ${btn_disable}`}>
          Save Job
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userid: state.auth.id,
  };
};

export default connect(mapStateToProps)(SpecificJobPost);