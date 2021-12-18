import React, { useEffect, useState } from "react";
import { Select, Form, Button, Divider,Typography,Input,message } from "antd";
import { connect } from "react-redux";
import {
  getDistrict,
  getDivision,
  getThana,
  updateProfile,
  editUserProfile,
} from "@/redux/actions/userAction";


const Profile_adress = ({
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
    const { Option } = Select;
    const { TextArea } = Input;
    const { Title } = Typography;
    const [value, setValue] = React.useState();
  const [loader, setloader] = useState(false);

  useEffect(() => {
    getDistrict();
    getDivision();
    getThana();
    updateProfile();
    setloader(false);
  }, [loader]);

  const onFinish2 = (values) => {
    editUserProfile(values,user_profile.id);
    setloader(true);
    message.success("successfully added your address");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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

  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        name="register"
        onFinish={onFinish2}
        onFinishFailed={onFinishFailed}
        initialValues={user_profile}
        //   setloader={setloader}
      >
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
          >
            {districtToRender}
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
          >
            {thanaToRender}
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
    </div>
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
})(Profile_adress);
//export default Profile_adress;
