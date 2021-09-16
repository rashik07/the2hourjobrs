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
  Skeleton,
  message,
} from "antd";
import LocationList from "../components/jobs/input/LocationList";
import { TagsInput } from "react-tag-input-component";
import { getLocationList } from "redux/actions/jobAction";
import {
  createPreferedCategories,
  viewPreferedCategories,
} from "redux/actions/preferedcategoriesAction";

const PreferedCategories = ({
  getJobCategories,
  createPreferedCategories,
  viewPreferedCategories,
  getLocationList,
  location,
  categories,
  setValue,
  onClear,
  create_prefered_categories,
  multiple,
  view_prefered_categories,
  value,
  Alert,
}) => {
  const [loader, setloader] = useState(false);
  const { Title } = Typography;
  useEffect(() => {
    getJobCategories();
    getLocationList();
    viewPreferedCategories();
    setloader(false);
  }, [loader]);
  console.log(view_prefered_categories);
  const { Option, OptGroup } = Select;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    createPreferedCategories(values);
    setloader(true);

    alert("This is a success message");
  };
  const onFinishFailed = () => {
    message.error("something error");
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
          //defaultValue={location_list}
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
  let category_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.category).forEach(function (category) {
      category_list.push(
        JSON.stringify({
          id: view_prefered_categories.category[category]["id"],
          name: view_prefered_categories.category[category]["name"],
        })
      );
    });
  let division_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.division).forEach(function (division) {
      division_list.push(
        JSON.stringify({
          id: view_prefered_categories.division[division]["id"],
          name: view_prefered_categories.division[division]["name"],
          type: view_prefered_categories.division[division]["type"],
        })
      );
    });
  let district_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.district).forEach(function (district) {
      district_list.push(
        JSON.stringify({
          id: view_prefered_categories.district[district]["id"],
          name: view_prefered_categories.district[district]["name"],
          type: view_prefered_categories.district[district]["type"],
        })
      );
    });
  let thana_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.thana).forEach(function (thana) {
      thana_list.push(
        JSON.stringify({
          id: view_prefered_categories.thana[thana]["id"],
          name: view_prefered_categories.thana[thana]["name"],
          type: view_prefered_categories.thana[thana]["type"],
        })
      );
    });
  let location_list = [...division_list, ...district_list, ...thana_list];

  let skill_list = [];
  if (view_prefered_categories)
    Object.keys(view_prefered_categories.skill).forEach(function (skill) {
      skill_list.push(view_prefered_categories.skill[skill]["name"]);
    });
  let form_init = {
    category: category_list,
    locations: location_list,
    skill: skill_list,
  };
  // console.log(form_init);

  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={form_init}
        onFinishFailed={onFinishFailed}
      >
        <Divider>
          <Title>Prefered Categories </Title>
        </Divider>

        <Form.Item name="category" label="Functional Categories">
          <Select
            //  defaultValue={view_prefered_categories.category}
            placeholder="Select Category"
            onChange={setValue}
            mode="multiple"
            //defaultValue={category_list}
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
        <Form.Item label="Special Skills " name="skill">
          <TagsInput></TagsInput>
        </Form.Item>
        <Form.Item label="Location " name="locations">
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
    create_prefered_categories:
      state.preferedcategories.create_prefered_categories,
    view_prefered_categories: state.preferedcategories.view_prefered_categories,
  };
};

export default connect(mapStateToProps, {
  getJobCategories,
  getLocationList,
  createPreferedCategories,
  viewPreferedCategories,
})(PreferedCategories);
//export default PreferedCategories;
