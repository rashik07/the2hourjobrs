import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Tooltip } from "antd";
import {
  FacebookFilled,
  YoutubeFilled,
  GoogleCircleFilled,
  DownloadOutlined,
} from "@ant-design/icons";
import { viewSinglePreferedCategories } from "redux/actions/preferedcategoriesAction";

const Sidesection = ({
  user_profile,
  viewSinglePreferedCategories,
  view_prefered_categories,
}) => {
  useEffect(() => {

    viewSinglePreferedCategories();
  }, []);
//  console.log(view_prefered_categories);
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
              icon={<FacebookFilled />}
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
  let category_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.category).forEach(function (category) {
      category_list.push(
        view_prefered_categories.category[category]["name"] + ", "
      );
    });
  let division_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.division).forEach(function (division) {
      division_list.push(view_prefered_categories.division[division]["name"] + ", ");
    });
  let district_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.district).forEach(function (district) {
      district_list.push(view_prefered_categories.district[district]["name"] + ", ");
    });
  let thana_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.thana).forEach(function (thana) {
      thana_list.push(view_prefered_categories.thana[thana]["name"] + ", ");
    });
  let location_list = [...division_list, ...district_list, ...thana_list];
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
        <span style={{ fontWeight: "bold" }}>Prefered Categories: </span>
        {category_list}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Prefered Location: </span>
        {location_list}
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
  
    view_prefered_categories: state.preferedcategories.view_single_prefered_categories,
  };
};

export default connect(mapStateToProps, {
  viewSinglePreferedCategories,

})(Sidesection);
//export default Sidesection;
