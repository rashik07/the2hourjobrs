import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { getSpecificProfile } from "@/redux/actions/userAction";
import View_profile from "../View_profile";
import {
  viewSingleEducation,
  viewSingleTraining,
  viewSingleQualification,
} from "@/redux/actions/usereducationAction";
import { viewSingleEmployment } from "@/redux/actions/employmentAction";
import { viewSingleProject } from "@/redux/actions/projectAction";

const ProfileDetails = ({
  getSpecificProfile,
  profile,
  viewSingleEducation,
  view_education,
  viewSingleEmployment,
  view_employment,
  viewSingleProject,
  view_project,
  viewSingleTraining,
  view_single_training,
  viewSingleQualification,
  view_single_qualification,
}) => {
  const router = useRouter();

  const { id } = router.query;
  useEffect(() => {
    getSpecificProfile(id);
    
    viewSingleEmployment(id);
    viewSingleEducation(id);
    
    viewSingleTraining(id);
    viewSingleQualification(id);
    viewSingleProject(id);
  }, [router.query.id]);
  //console.log(view_project);
  return (
    <div>
      <View_profile
        user_profile={profile}
        view_education={view_education}
        view_employment={view_employment}
        
        view_single_training={view_single_training}
        view_single_qualification={view_single_qualification}
        view_project={view_project}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.user.all_profile,
    view_education: state.education.view_single_education,
    view_employment: state.employment.view_single_employment,
    view_project: state.project.view_single_project,
    view_single_training: state.education.view_single_training,
    view_single_qualification: state.education.view_single_qualification,
  };
};

export default connect(mapStateToProps, {
  getSpecificProfile,
  viewSingleEducation,
  viewSingleEmployment,
  viewSingleProject,
  viewSingleTraining,
  viewSingleQualification,
})(ProfileDetails);
