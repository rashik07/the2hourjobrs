import React, { useEffect, useState } from "react";
import {
  Select,
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
} from "antd";
import { connect } from "react-redux";
import {
  getDistrict,
  getDivision,
  getThana,
  updateProfile,
  editUserProfile,
} from "@/redux/actions/userAction";
import { UploadOutlined, EyeOutlined } from "@ant-design/icons";
import moment from "moment";

const Profile_info = ({
  updateProfile,
  user_profile,
  editUserProfile,
  getDivision,
  getDistrict,
  getThana,
  onClear,
  get_division,
  get_district,
  get_thana,
}) => {
  const [loader, setloader] = useState(false);

  useEffect(() => {
    getDistrict();
    getDivision();
    getThana();
    updateProfile();
    setloader(false);
  }, [loader]);

  // console.log(updateProfile);
  const dateFormat = "YYYY-MM-DD";
  user_profile.birthday = moment(user_profile.birthday, dateFormat);
  const onFinish = (values) => {
    const formData = new FormData();
    values = {
      ...values,
      birthday: values["birthday"].format("YYYY-MM-DD"),
    };

    formData.append("nid", values.nid);
    formData.append("gender", values.gender);
    formData.append("facebook_link", values.facebook_link);
    formData.append("birthday", values.birthday);
    formData.append("bio", values.bio);
    formData.append("address", values.address);
    formData.append("youtube_link", values.youtube_link);
    formData.append("website_link", values.website_link);
    formData.append("portfolio_link", values.portfolio_link);
    formData.append("division", values.division);
    formData.append("district", values.district);
    formData.append("thana", values.thana);

    if (typeof values.photo === "undefined") {
    } else {
      console.log("image");
      formData.append("image", values.photo[0].originFileObj);
    }

    // console.log('Received values of form: ', values);
    editUserProfile(formData);
    setloader(true);
    //   console.log('update: ', editUserProfile);
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
  let divisionToRender;
  if (get_division) {
    divisionToRender = get_division.map(({ id, name }) => {
      return (
        <Option key={id} value={id}>
          {name}
        </Option>
      );
    });
  } else {
    divisionToRender = "Loading...";
  }

  let districtToRender;
  if (get_district) {
    districtToRender = get_district.map(({ id, name }) => {
      return (
        <Option key={id} value={id}>
          {name}
        </Option>
      );
    });
  } else {
    districtToRender = "Loading...";
  }
  let thanaToRender;
  if (get_thana) {
    thanaToRender = get_thana.map(({ id, name }) => {
      return (
        <Option key={id} value={id}>
          {name}
        </Option>
      );
    });
  } else {
    thanaToRender = "Loading...";
  }

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={user_profile}
        setloader={setloader}
      >
        <Divider>
          {" "}
          <Title>Basic Info</Title>
        </Divider>
        <Image
          width={200}
          height={200}
          src={"http://127.0.0.1:8000" + user_profile.image}
        />
        <Tooltip title="search" className="button_eye">
          <a href="../../Profile/View_profile">
            <Button type="primary" shape="circle" icon={<EyeOutlined />} />
          </a>
        </Tooltip>
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
        <Form.Item label="Name" name="username">
          <Input placeholder="name" />
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
          <Input placeholder="e-mail" />
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
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item label="NID Number" name="nid">
          <Input placeholder="input NID number" />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Radio.Group
            options={plainOptions}
            onChange={onChange}
            value={value}
          ></Radio.Group>
        </Form.Item>
        <Form.Item label="Date of Birth" name="birthday">
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

        <Divider>
          {" "}
          <Title>Address</Title>
        </Divider>
        <Form.Item label="Division" name="division">
          <Select
            showSearch
            className="filtter-items"
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            allowClear
            // multiple={multiple}
            onChange={setValue}
            onClear={onClear}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            defaultValue={user_profile.division}
          >
            {divisionToRender}
          </Select>
        </Form.Item>

        <Form.Item label="District" name="district">
          <Select
            showSearch
            className="filtter-items"
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            allowClear
            // multiple={multiple}
            onChange={setValue}
            onClear={onClear}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            defaultValue={user_profile.district}
          >
            {districtToRender}
            {/* {
            get_district.map(({ id, name }) => (
              <Option key={id} value={id}>
                {name}
              </Option>
            ))} */}
          </Select>
        </Form.Item>
        <Form.Item label="Thana" name="thana">
          <Select
            showSearch
            className="filtter-items"
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            allowClear
            // multiple={multiple}
            onChange={setValue}
            onClear={onClear}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            defaultValue={user_profile.thana}
          >
            {thanaToRender}
            {/* {get_thana.map(({ id, name }) => (
              <Option key={id} value={id}>
                {name}
              </Option>
            ))} */}
          </Select>
        </Form.Item>
        <Form.Item label="Address" name="address">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    get_district: state.user.get_district,
    get_division: state.user.get_division,
    get_thana: state.user.get_thana,
    user_profile: state.user.user_profile,
    edit_user_profile: state.user.edit_user_profile,
  };
};

export default connect(mapStateToProps, {
  updateProfile,
  editUserProfile,
  getDistrict,
  getDivision,
  getThana,
})(Profile_info);
