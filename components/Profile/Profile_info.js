import React, { useEffect, useState } from "react";
import {
  Select,
  Row,
  Col,
  Image,
  Upload,
  Space,
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Typography,
  Divider,
  Tooltip,
  InputNumber,
  Skeleton,
} from "antd";
import { connect } from "react-redux";
import Link from "next/link";
import {
  getDistrict,
  getDivision,
  getThana,
  updateProfile,
  editUserProfile,
  editPhone,
} from "@/redux/actions/userAction";
import { UploadOutlined, EyeOutlined, ContactsFilled } from "@ant-design/icons";
import { useRouter } from "next/router";
import moment from "moment";
import Profile_adress from "./Profile_adress";

const Profile_info = ({
  updateProfile,
  // user_profile,
  editUserProfile,
  editPhone,
  edit_phone,
  auth,
}) => {
  const [user_profile, setuser_profile] = useState([]);
  const [loading, setloading] = useState(true);
  const [loader, setloader] = useState(false);
  const dateFormat = "YYYY-MM-DD";
  const router = useRouter();

  useEffect(() => {
    if (!auth.isSignedIn) {
      router.push({
        pathname: "/auth/login",
      });
    } else {
      setloading(true);
      updateProfile().then((result) => {
        if (result.birthday == null) {
          // result.birthday = moment("2015/01/01", dateFormat);
        } else {
          result.birthday = moment(result.birthday, dateFormat);
        }
        setuser_profile(result);
        console.log(user_profile);
        setloading(false);
      });
    }
  }, [loader]);

  const onFinish = (values) => {
    const formData = new FormData();

    values = {
      ...values,

      birthday: values["birthday"].format("YYYY-MM-DD"),
    };
    //formData.append("phone", values.phone);
    formData.append("nid", values.nid);
    formData.append("gender", values.gender);
    formData.append("facebook_link", values.facebook_link);

    formData.append("birthday", values.birthday);
    formData.append("bio", values.bio);
    formData.append("youtube_link", values.youtube_link);
    formData.append("website_link", values.website_link);
    formData.append("portfolio_link", values.portfolio_link);

    if (typeof values.photo === "undefined") {
    } else {
      console.log("image");
      formData.append("image", values.photo[0].originFileObj);
    }
    for (var value of formData.values()) {
      console.log(value);
    }
    editUserProfile(formData, user_profile.id);
    setloader(true);
    editPhone(values, user_profile.id);
    alert("successfully saved");
    // console.log(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            span: 12,
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
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={user_profile}
          //   setloader={setloader}
        >
          <Divider>
            {" "}
            <Title>Basic Info</Title>
          </Divider>
          {/* <Image
          width={200}
          height={200}
          src={"http://127.0.0.1:8000" + user_profile.image}
        /> */}
          <Link href={`/Profile/Profile_details/${user_profile.id}`}>
            <Tooltip title="View My Profile" className="button_eye">
              <Button
                // onClick={() =>
                //   router.push(`/Profile/Profile_details/${user_profile.id}`)
                // }
                type="primary"
                shape="circle"
                icon={<EyeOutlined />}
              ></Button>
            </Tooltip>
          </Link>
          <Form.Item
            name="photo"
            label="Upload Photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="upload photo"
          >
            <Upload name="image" listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Name" name="name">
            <Input
              style={{
                width: "100%",
                color: "black",
              }}
              placeholder="name"
            />
          </Form.Item>
          <Form.Item label="User Name" name="username">
            <Input
              style={{
                width: "100%",
                color: "black",
              }}
              placeholder="name"
              disabled
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
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
                width: "100%",
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

              style={{
                width: "35%",
                color: "black",
                marginRight: "3px",
              }}
            />
            <Button type="primary">Verify</Button>
          </Form.Item>

          <Form.Item
            label="NID Number"
            name="nid"
            rules={[
              {
                type: "number",
                message: "The input is not valid NID!",
              },
              {
                required: true,
                message: "Please input your NID!",
              },
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
    // user_profile: state.user.user_profile,
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
  editPhone,
})(Profile_info);
