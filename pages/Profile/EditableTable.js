import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Space,
} from "antd";
import {
  createEducation,
  viewEducation,
  deleteEducation,
} from "@/redux/actions/usereducationAction";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = ({
  education,
  value,
  setValue,
  view_education,
  viewEducation,
}) => {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    viewEducation();
    setloader(false);
  }, [loader]);
  const [form] = Form.useForm();
  const [data, setData] = useState(view_education);
  const [editingKey, setEditingKey] = useState("");
  console.log(view_education);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      Education: "",
      Degree: "",
      institute_name: "",
      result: "",
      year_of_passing: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Level of Education",
      dataIndex: "Education",
      key: "Education",
      width: "30%",
      editable: true,
    },
    {
      title: "Exam/Degree Title",
      dataIndex: "Degree",
      key: "Degree",
      width: "100%",
      editable: true,
    },

    {
      title: "Institute Name",
      dataIndex: "institute_name",
      key: "institute_name",
      width: "150px",
      editable: true,
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
      width: "150px",
      editable: true,
    },
    {
      title: "year of passing",
      dataIndex: "year_of_passing",
      key: "year_of_passing",
      width: "150px",
      editable: true,
    },

    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={view_education}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    view_education: state.education.view_education,
  };
};

export default connect(mapStateToProps, {
  viewEducation,
})(EditableTable);
