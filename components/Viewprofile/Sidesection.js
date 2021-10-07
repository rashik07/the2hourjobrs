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

const Sidesection = ({
  user_profile,
  viewSinglePreferedCategories,
  view_prefered_categories,
}) => {
  const shareUrl = `https://www.google.com/Profile/Profile_details/${user_profile.id}`;
  console.log(shareUrl);

  useEffect(() => {
    viewSinglePreferedCategories();
  }, []);
  console.log(user_profile);
  const facebook_link = () => {
    if (
      user_profile.facebook_link == "null" ||
      user_profile.facebook_link == null
    ) {
      return "  ";
    } else
      return (
        <p>
          <span style={{ fontWeight: "bold" }}>Facebook : </span>
          <a href={user_profile.facebook_link}>{user_profile.facebook_link}</a>
        </p>
      );
  };
  const youtube_link = () => {
    if (
      user_profile.youtube_link == "null" ||
      user_profile.youtube_link == null
    ) {
      return "  ";
    } else
      return (
        <p>
          <span style={{ fontWeight: "bold" }}>Youtube : </span>
          <a href={user_profile.youtube_link}>{user_profile.youtube_link}</a>
        </p>
      );
  };
  const website_link = () => {
    if (
      user_profile.website_link == "null" ||
      user_profile.website_link == null
    ) {
      return "  ";
    } else
      return (
        <p>
          <span style={{ fontWeight: "bold" }}>Website : </span>
          <a href={user_profile.website_link}>{user_profile.website_link}</a>
        </p>
      );
  };
  const resume_link = () => {
    if (user_profile.resume == "null" || user_profile.resume == null) {
      return "  ";
    } else
      return (
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
      division_list.push(
        view_prefered_categories.division[division]["name"] + ", "
      );
    });
  let district_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.district).forEach(function (district) {
      district_list.push(
        view_prefered_categories.district[district]["name"] + ", "
      );
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
        {resume_link()}
      </p>
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
  );
};

const mapStateToProps = (state) => {
  return {
    view_prefered_categories:
      state.preferedcategories.view_single_prefered_categories,
  };
};

export default connect(mapStateToProps, {
  viewSinglePreferedCategories,
})(Sidesection);
//export default Sidesection;