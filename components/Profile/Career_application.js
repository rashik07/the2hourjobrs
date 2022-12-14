import React, { useEffect, useState } from "react";
import {
  Select,
  Skeleton,
  Form,
  Input,
  Switch,
  Button,
  Radio,
  Typography,
  Divider,
  Upload,
  message,
  InputNumber,
  Checkbox,
} from "antd";
import { connect } from "react-redux";
import { updateProfile, editUserProfile } from "@/redux/actions/userAction";
import { saveTemporayJobPost, getJobCategories } from "redux/actions/jobAction";
import { UploadOutlined } from "@ant-design/icons";
import PreferedCategories from "components/PreferedCategories";

const Career_application = ({
  updateProfile,
  auth,
  editUserProfile,
  edit_user_profile,
  saveTemporayJobPost,
  temp_jobpost,
  getJobCategories,
}) => {
  const [user_profile, setuser_profile] = useState([]);
  const [loading, setloading] = useState(true);
 

  useEffect(() => {
    if (!auth.isSignedIn) {
      router.push({
        pathname: "/auth/login",
      });
    } else {
      setloading(true);
      updateProfile().then((result) => {
        setuser_profile(result);
        setloading(false);
      });
    }
  }, []);
  const onFinish = (values) => {

    const formData = new FormData();
    formData.append("objective", values.objective);

    if (values.present_salary == null) {
     
      // formData.append("present_salary",setNull(6, Types.INTEGER));
    } else { 
      formData.append("present_salary", values.present_salary);
    }
    if (values.expected_salary == null) {
  
    } else {
      formData.append("expected_salary", values.expected_salary);
    }

    formData.append("job_level", values.job_level);
    formData.append("job_nature", values.job_nature);
    formData.append("available_for_work", values.available_for_work);
    if (typeof values.upload === "undefined") {
    } else {
      formData.append("resume", values.upload[0].originFileObj);
    }

    editUserProfile(formData, user_profile.id);
   
    message.success("successfully added");
  };

  const { OptGroup } = Select;

  useEffect(() => {
    getJobCategories();
  }, []);

  const { Option } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const { Title } = Typography;
  const { TextArea } = Input;

  //job level
  const plainOptions = ["entry", "mid", "top"];
  const [value, setValue] = React.useState();
  const onChange = (e) => {
   
    setValue(e.target.value);
  };
  //job nature
  const natureOptions = [
    "Full Time",
    "Part Time",
    "Contractual",
    "Internship",
    "Freelance",
  ];
  const [value2, setValue2] = React.useState();
  const onChange2 = (e) => {
  
    setValue2(e.target.value);
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
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
   

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  if (loading) {
    return <Skeleton active />;
  } else {
    return (
      <div>
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={user_profile}
        >
          <Divider>
            {" "}
            <Title>Career and Application details </Title>
          </Divider>
          <Form.Item name="available_for_work" valuePropName="checked">
            <Switch
              className="float-right"
              checkedChildren="available for work"
              unCheckedChildren="not available for work"
            />
          </Form.Item>
          <Form.Item
            name="upload"
            label="CV Upload/File Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="You Can Upload PDF/Powerpoint/Jpg/Png/ Format"
          >
            <Upload name="resume" listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button> <br />
              <a href={user_profile.resume} download>
                Click to download
              </a>
            </Upload>
          </Form.Item>

          <Form.Item label="Objective" name="objective">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Present Salary"
            name="present_salary"
            rules={[
              // {
              //   required: true,
              //   message: "Please input your Present Salary",
              // },
              {
                type: "number",
                min: 0,
                max: 99999999999,
              },
            ]}
          >
            <InputNumber placeholder="present salary" />
          </Form.Item>
          <Form.Item
            label="Expected Salary"
            name="expected_salary"
            rules={
              [
                // {
                //   required: true,
                //   message: "Please input your Expected Salary",
                // },
              ]
            }
          >
            <InputNumber placeholder="expected salary" />
          </Form.Item>
          <Form.Item label="Job level" name="job_level">
            <Radio.Group
              onChange={onChange}
              options={plainOptions}
              value={value}
            ></Radio.Group>
          </Form.Item>
          <Form.Item label="Job Nature" name="job_nature">
            <Radio.Group
              onChange={onChange2}
              options={natureOptions}
              value={value2}
            ></Radio.Group>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
        <PreferedCategories />
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    // user_profile: state.user.user_profile,
    edit_user_profile: state.user.edit_user_profile,
    location: state.job.location,
    temp_jobpost: state.job.temp_jobpost,
    categories: state.job.categories,
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {
  updateProfile,
  editUserProfile,
  saveTemporayJobPost,
  getJobCategories,
})(Career_application);
