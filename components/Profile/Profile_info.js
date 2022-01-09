import React, { useEffect, useState } from "react";
import {
  Select,
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Typography,
  Divider,
  message,
  InputNumber,
  Skeleton,
  Checkbox,
} from "antd";
import { connect } from "react-redux";
import {
  getDistrict,
  getDivision,
  getThana,
  updateProfile,
  editUserProfile,
  updatePhone,
} from "@/redux/actions/userAction";
import { useRouter } from "next/router";
import moment from "moment";
import Profile_adress from "./Profile_adress";
import PicturesWall from "components/annoucement/PicturesWall";

const Profile_info = ({
  updateProfile,
  editUserProfile,
  updatePhone,
  edit_phone,
  auth,
}) => {
  const [user_profile, setuser_profile] = useState([]);
  const [loading, setloading] = useState(true);
  const [loader, setloader] = useState(false);
  const [cover, setcover] = useState([]);
  const dateFormat = "YYYY-MM-DD";
  console.log(user_profile);

  const router = useRouter();

  const uploadcover = (fileList) => {
    setcover(fileList);
    console.log(fileList);
  };

  useEffect(() => {
    if (!auth.isSignedIn) {
      router.push({
        pathname: "/auth/login",
      });
    } else {
      setloading(true);
      updateProfile().then((result) => {
        if (result.birthday == null) {
        } else {
          result.birthday = moment(result.birthday, dateFormat);
        }

        setuser_profile(result);
        setloading(false);
      });
    }
  }, [loader]);

  const uploadPhoto = (values) => {
    const formData = new FormData();

    console.log(cover.length);
    if (cover.length === 0) {
      message.warning("Please select your photo");
    } else {
      formData.append("image", cover[0].originFileObj);
      editUserProfile(formData, user_profile.id);
      setloader(true);
      message.success("successfully added your profile pic");
      window.location.reload();
    }
    // window.location.reload();
    // if (typeof values.cover === "undefined") {
    //   console.log("not cover");
    // } else {
    //   console.log("cover");
    //   formData.append("image", cover[0].originFileObj);
    //   console.log(cover[0].originFileObj);
    // }
  };

  const onFinish = (values) => {
    const formData = new FormData();

      values = {
        ...values,

        birthday: values["birthday"].format("YYYY-MM-DD"),
      };
      
    
    //formData.append("phone", values.phone);
    // formData.append("nid", values.nid);
    // formData.append("gender", values.gender);
    // if (
    //   typeof values.facebook_link === "null" ||
    //   values.facebook_link === null
    // ) {
    // } else {
    //   formData.append("facebook_link", values.facebook_link);
    // }
    // if (typeof values.bio === "null" || values.bio === null) {
    // } else {
    //   formData.append("bio", values.bio);
    // }
    // if (typeof values.youtube_link === "null" || values.youtube_link === null) {
    // } else {
    //   formData.append("youtube_link", values.youtube_link);
    // }
    // if (typeof values.website_link === "null" || values.website_link === null) {
    // } else {
    //   formData.append("website_link", values.website_link);
    // }
    // if (
    //   typeof values.portfolio_link === "null" ||
    //   values.portfolio_link === null
    // ) {
    // } else {
    //   formData.append("portfolio_link", values.portfolio_link);
    // }

    // formData.append("birthday", values.birthday);

    // if (typeof values.cover === "undefined") {
    //   console.log("not cover");
    // } else {
    //   console.log("cover");
    //   formData.append("image", cover[0].originFileObj);
    //   console.log(cover[0].originFileObj);
    // }

    // for (var value of formData.values()) {
    //   console.log(value);
    // }
    editUserProfile(values, user_profile.id);
    setloader(true);
    updatePhone(values, user_profile.id);
    message.success("successfully saved your basic info");
    console.log(values["birthday"].format("YYYY-MM-DD"));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("not saved your basic info");
  };
  const { Option } = Select;
  const { TextArea } = Input;
  const { Title } = Typography;
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  //gender
  const plainOptions = ["Male", "Female"];
  const [value, setValue] = React.useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  if (loading) {
    return <Skeleton active />;
  } else {
    return (
      <>
        <Divider>
          {" "}
          <Title>Basic Info</Title>
        </Divider>

        <div style={{ float: "right" }}>
          <p>Upload picture</p>
          <PicturesWall setImages={uploadcover} />
          <Button
            onClick={() => uploadPhoto()}
            type="primary"
            style={{ marginRight: "10px" }}
          >
            Save Picture
          </Button>
        </div>
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={user_profile}
        >
          {/* <Form.Item
            name="photo"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="long"
          >
            <Upload name="image" listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item> */}

          <Form.Item label="Name" name="name" style={{ marginLeft: "43px" }}>
            <Input
              style={{
                width: "70%",
                color: "black",
              }}
              placeholder="name"
            />
          </Form.Item>
          <Form.Item
            label="User Name"
            name="username"
            style={{ marginLeft: "43px" }}
          >
            <Input
              style={{
                width: "70%",
                color: "black",
              }}
              placeholder="name"
              disabled
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            style={{ marginLeft: "43px" }}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                //  required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              style={{
                width: "70%",
                color: "black",
              }}
              placeholder="e-mail"
              disabled
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                //  required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              // addonBefore={prefixSelector}
              disabled
              style={{
                width: "45%",
                color: "black",
                marginRight: "3px",
              }}
            />
          </Form.Item>
          <a href="../Profile/Mobile_verify" style={{ marginLeft: "155px" }}>
            <Button type="primary">Update Phone Number</Button>
          </a>

          <Form.Item
            name="hide_phone"
            valuePropName="checked"
            wrapperCol={{
              offset: 4,
              span: 12,
            }}
            style={{ paddingTop: "15px" }}
          >
            <Checkbox>Hide phone number</Checkbox>
          </Form.Item>

          <Form.Item
            label="NID Number"
            name="nid"
            rules={[
              {
                type: "number",
                message: "The input is not valid NID!",
              },
              // {
              //   required: true,
              //   message: "Please input your NID!",
              // },
            ]}
          >
            <InputNumber
              placeholder="input NID number"
              style={{
                width: 200,
              }}
            />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Radio.Group
              options={plainOptions}
              onChange={onChange}
              value={value}
            ></Radio.Group>
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="birthday"
            rules={[
              {
                type: "date",
                message: "The input is not valid BOD!",
              },
              {
                required: true,
                message: "Please input your BOD!",
              },
            ]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item label="Facebook Link" name="facebook_link">
            <Input placeholder="input Facebook Link" />
          </Form.Item>
          <Form.Item label="Website Link" name="website_link">
            <Input placeholder="input Website Link" />
          </Form.Item>
          <Form.Item label="Youtube Link" name="youtube_link">
            <Input placeholder="input Youtube Link" />
          </Form.Item>
          <Form.Item label="Portfolio Link" name="portfolio_link">
            <Input placeholder="input Portfolio Link" />
          </Form.Item>

          <Form.Item label="Bio" name="bio">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
        <Profile_adress />
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    get_district: state.user.get_district,
    get_division: state.user.get_division,
    get_thana: state.user.get_thana,
    edit_user_profile: state.user.edit_user_profile,
    edit_phone: state.user.edit_phone,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  updateProfile,
  editUserProfile,
  getDistrict,
  getDivision,
  getThana,
  updatePhone,
})(Profile_info);
