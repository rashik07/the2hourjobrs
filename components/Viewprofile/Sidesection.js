import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProfile } from "@/redux/actions/userAction";
import { Button, Tooltip } from "antd";
import {
  FacebookFilled,
  YoutubeFilled,
  GoogleCircleFilled,
  DownloadOutlined,
} from "@ant-design/icons";
import { viewPreferedCategories } from "redux/actions/preferedcategoriesAction";

const Sidesection = ({
  updateProfile,
  user_profile,
  viewPreferedCategories,
  view_prefered_categories,
}) => {
  useEffect(() => {
    updateProfile();
    viewPreferedCategories();
  }, []);
  console.log(view_prefered_categories);
  const facebook_link = () => {
    if (user_profile.facebook_link == null) {
      return "  ";
    } else
      return (
        <Tooltip title="Facebook Link">
          <a href={user_profile.facebook_link}>
            <Button
            style={{
                fontSize: "16px",
               // color: "#fff",
               // backgroundColor: "#FF0000",
                border: "1px solid #000000",
              }}
              type="primary"
              shape="circle"
              icon={
                <FacebookFilled
                />
              }
            />
          </a>
        </Tooltip>
      );
  };
  const youtube_link = () => {
    if (user_profile.youtube_link == null) {
      return "  ";
    } else
      return (
        <Tooltip title="Youtube Link">
          <a href={user_profile.youtube_link}>
            <Button
              style={{
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#FF0000",
                border: "1px solid #000000",
              }}
              type="primary"
              shape="circle"
              icon={<YoutubeFilled />}
            />
          </a>
        </Tooltip>
      );
  };
  const website_link = () => {
    if (user_profile.website_link == null) {
      return "  ";
    } else
      return (
        <Tooltip title="Website Link">
          <a href={user_profile.website_link}>
            <Button
              style={{
                fontSize: "16px",
                color: "#ffffff",
                backgroundColor: "#389e0d",
                border: "1px solid #000000",
              }}
              type="primary"
              shape="circle"
              icon={<GoogleCircleFilled />}
            />
          </a>
        </Tooltip>
      );
  };
  let skill_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.skill).forEach(function (skill) {
      skill_list.push(view_prefered_categories.skill[skill]["name"] + ", ");
    });

  return (
    <div>
      <p>
        {facebook_link()} {"  "}
        {youtube_link()} {"  "}
        {website_link()}
      </p>

      <p>
        <span style={{ fontWeight: "bold" }}>Email : </span>
        {user_profile.email}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Gender: </span>{" "}
        {user_profile.gender}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Date of Birth: </span>{" "}
        {user_profile.birthday}
      </p>

      <p>
        <span style={{ fontWeight: "bold" }}>Skills: </span> {skill_list}
      </p>
      <p>
        <a href={"http://127.0.0.1:8000" + user_profile.resume} download>
          <Button
            type="primary"
            icon={
              <DownloadOutlined
                style={{ fontSize: "16px", color: "#ffffff" }}
              />
            }
          >
            Download CV
          </Button>
        </a>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_profile: state.user.user_profile,
    view_prefered_categories: state.preferedcategories.view_prefered_categories,
  };
};

export default connect(mapStateToProps, {
  viewPreferedCategories,
  updateProfile,
})(Sidesection);
//export default Sidesection;
