import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { getJobCategories } from "redux/actions/jobAction";
import {
  Form,
  TreeSelect,
  Input,
  Switch,
  Button,
  Radio,
  DatePicker,
  Typography,
  Divider,
  TextArea,
  Upload,
} from "antd";
import LocationList from "../components/jobs/input/LocationList";
import { TagsInput } from "react-tag-input-component";
import { getLocationList } from "redux/actions/jobAction";
import { createPreferedCategories } from "redux/actions/preferedcategoriesAction";

const PreferedCategories = ({
  getJobCategories,
  createPreferedCategories,
  getLocationList,
  location,
  categories,
  setValue,
  onClear,
  multiple,
  value,
}) => {
  const { Title } = Typography;
  useEffect(() => {
    getJobCategories();
    getLocationList();
    createPreferedCategories();
  }, []);
  const { Option, OptGroup } = Select;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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
  const { TreeNode } = TreeSelect;
  const locationList = () => {
    if (location)
      return (
        <TreeSelect
          showSearch
          className="filtter-items"
          value={value}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          allowClear
          multiple
         
          onChange={setValue}
          onClear={onClear}
        >
          {location.map((divison) => {
            return (
              <TreeNode
                value={JSON.stringify({
                  id: divison.id,
                  name: divison.name,
                  type: divison.type,
                })}
                key={JSON.stringify({
                  id: divison.id,
                  name: divison.name,
                  type: divison.type,
                })}
                title={divison.name}
              >
                {divison.districts.map((district) => {
                  return (
                    <TreeNode
                      value={JSON.stringify({
                        id: district.id,
                        name: district.name,
                        type: district.type,
                      })}
                      key={JSON.stringify({
                        id: district.id,
                        name: district.name,
                        type: district.type,
                      })}
                      title={district.name}
                    >
                      {district.thana.map((thana) => {
                        return (
                          <TreeNode
                            value={JSON.stringify({
                              id: thana.id,
                              name: thana.name,
                              type: thana.type,
                            })}
                            key={JSON.stringify({
                              id: thana.id,
                              name: thana.name,
                              type: thana.type,
                            })}
                            title={thana.name}
                          />
                        );
                      })}
                    </TreeNode>
                  );
                })}
              </TreeNode>
            );
          })}
        </TreeSelect>
      );
  };

  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        name="register"
        onFinish={onFinish}
      >
        <Divider>
          <Title>Prefered Categories </Title>
        </Divider>
        <Form.Item name="functional_categories" label="Functional Categories">
          <Select
            placeholder="Select Category"
            onChange={setValue}
            mode="multiple"
            //  defaultValue={JSON.stringify(temp_jobpost.category)}
          >
            {categories.map((subCategory) => (
              <OptGroup
                key={subCategory.type}
                label={`${subCategory.type} Categories`}
              >
                {subCategory.list.map(({ id, name }) => (
                  <Option key={id} value={JSON.stringify({ id, name })}>
                    {name}
                  </Option>
                ))}
              </OptGroup>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Special Skills " name="skills">
          <TagsInput></TagsInput>
        </Form.Item>
        <Form.Item label="Location " name="location">
          {locationList()}
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
    categories: state.job.categories,
    location: state.job.location,
    create_prefered_categories: state.preferedcategories.create_prefered_categories
  };
};

export default connect(mapStateToProps, { getJobCategories, getLocationList,createPreferedCategories })(
  PreferedCategories
);
//export default PreferedCategories;
