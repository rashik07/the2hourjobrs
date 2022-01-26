import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button ,Popover} from "antd";
import { DownloadOutlined ,ShareAltOutlined} from "@ant-design/icons";
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
  const content = (
    <div>
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
  );

  useEffect(() => {
    viewSinglePreferedCategories(user_profile.id);
  }, []);

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
    if (
      user_profile.resume == "null" ||
      user_profile.resume == null ||
      user_profile.resume == false
    ) {
      return "  ";
    } else
      return (
        <a href={user_profile.resume} download target="_blank">
          <Button
            type="primary"
            icon={
              <DownloadOutlined
                style={{ fontSize: "16px", color: "#ffffff" }}
              />
            }
          >
            Download CV/File
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
        <span style={{ fontWeight: "bold" }}>Email : </span>
        <a href={`mailto:${user_profile.email}`}>{user_profile.email}</a>
      </p>
      <p style={{lineBreak:"anywhere"}}>
        {facebook_link()} {"  "}
        {youtube_link()} {"  "}
        {website_link()}
      </p>

     
      {user_profile.gender == null ? (
        " "
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>Gender: </span>{" "}
          {user_profile.gender}
        </p>
      )}
      {user_profile.nid == null ? (
        " "
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>NID: </span>{" "}
          {user_profile.nid}
        </p>
      )}
      {user_profile.birthday == null ? (
        " "
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>Date of Birth: </span>{" "}
          {user_profile.birthday}
        </p>
      )}
      {skill_list.length == 0 ? (
        " "
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>Skills: </span> {skill_list}
        </p>
      )}
      {category_list.length == 0 ? (
        " "
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>Prefered Categories: </span>
          {category_list}
        </p>
      )}
      {location_list.length == 0 ? (
        " "
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>Prefered Location: </span>
          {location_list}
        </p>
      )}
      {user_profile.present_salary == null ? (
        " "
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>Present salary: </span>
          {user_profile.present_salary} bdt
        </p>
      )}
      {user_profile.expected_salary == null ? (
        " "
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>Expected salary: </span>
          {user_profile.expected_salary} bdt
        </p>
      )}
      <p>{resume_link()}</p>
      <div
        style={{
          background: "#0000",
          height: "100vh",
          width: "100%",
        }}
      >
{/*      
      <Popover placement="bottom" content={content} trigger="click">
      <h1> <ShareAltOutlined /> Share</h1>
        </Popover> */}
     
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
