import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Typography,
  Divider,
  InputNumber,
  Select,
  Table,
  Space,
} from "antd";
import {
  createQualification,
  viewQualification,
  deleteQualification,
} from "@/redux/actions/usereducationAction";
import { DeleteOutlined } from "@ant-design/icons";
const ProfessionalQualification = ({
  createQualification,
  viewQualification,
  deleteQualification,
  view_qualification,
}) => {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    viewQualification();
    setloader(false);
  }, [loader]);
  const dateFormat = "YYYY-MM-DD";
  //create_education.year_of_passing=moment(create_education.year_of_passing, dateFormat);
  const onFinish = (values) => {
    values = {
      ...values,
      year_of_passing: values["year_of_passing"].format("YYYY-MM-DD"),
    };
    createQualification(values);
    setloader(true);
    // console.log("Success:", values);
  };
  const { TextArea } = Input;

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
  function onChangeNum(value) {
    console.log("changed", value);
  }
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const { Title } = Typography;
  const columns = [
    {
      title: "Title",
      dataIndex: "certification_title",
      key: "certification_title",
      width: "30%",
      //...this.getColumnSearchProps('name'),
    },
    {
      title: "Institution",
      dataIndex: "institute",
      key: "institute",
      width: "30%",

      // ...this.getColumnSearchProps('age'),
    },
    {
      title: "location",
      dataIndex: "location",
      key: "institute",
      width: "100%",

      // ...this.getColumnSearchProps('age'),
    },
    {
      title: "duration",
      dataIndex: "duration",
      key: "duration",
      width: "100%",

      // ...this.getColumnSearchProps('age'),
    },

    {
      title: "year_of_passing",
      dataIndex: "year_of_passing",
      key: "year_of_passing",
      width: "150px",
      //  ...this.getColumnSearchProps('address'),
      //   sorter: (a, b) => a.address.length - b.address.length,
      //sortDirections: ['descend', 'ascend'],
    },

    {
      title: "Action",
      key: "action",

      render: (details) => (
        console.log("training id:", details.id),
        (
          <Space size="middle">
            <DeleteOutlined
              key="ellipsis"
              onClick={() => {
                deleteQualification(details.id);
                setloader(true);;
              }}
            />
          </Space>
        )
      ),
    },
  ];
  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        onFinish={onFinish}
      >
        <Divider>
          {" "}
          <Title>Professional Qualification</Title>
        </Divider>
        <Table columns={columns} dataSource={view_qualification} />
        <Form.Item label="Certification" name="certification_title">
          <Input />
        </Form.Item>
        <Form.Item label="Institution" name="institute">
          <Input />
        </Form.Item>
        <Form.Item label="Location:" name="location">
          <Input placeholder="Location" />
        </Form.Item>
        <Form.Item label="Duration" name="duration">
          <InputNumber min={1} max={10} onChange={onChangeNum} />
        </Form.Item>
        <Form.Item name="year_of_passing" label="Year of Passing" {...config}>
          <DatePicker format={dateFormat} picker="year" />
        </Form.Item>
        <Form.Item className="text-center" {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    create_qualification: state.education.create_qualification,
    view_qualification: state.education.view_qualification,
  };
};

export default connect(mapStateToProps, {
  createQualification,
  viewQualification,
  deleteQualification,
})(ProfessionalQualification);
