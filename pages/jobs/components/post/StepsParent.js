import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import {
  getJobCategories,
  saveTemporayJobPost,
} from "@/redux/actions/jobAction";
import TagInput from "components/TagInput";
import CheckBox from "components/CheckBox";
import { Radio } from "antd";
import EducationField from "pages/jobs/components/list/EducationField";
import _ from "lodash";
import LocationList from "../list/LocationList";

const renderItem = (item, children, saveTemporayJobPost, temp_jobpost) => {
  switch (item) {
    case "title":
      return (
        <>
          <label className="form-label">Job Title *</label>
          <input
            onChange={(e) => saveTemporayJobPost({ title: e.target.value })}
            type="text"
            className="form-control"
            defaultValue={temp_jobpost.title}
          />
        </>
      );

    case "image":
      return (
        <>
          <label className="form-label">Image Upload</label>
          <br />
          {children}
        </>
      );

    case "skills":
      const setSkill = (skillSet) => saveTemporayJobPost({ skills: skillSet });

      return (
        <>
          <label className="form-label">Skills</label>
          <TagInput value={temp_jobpost.skills} setValue={setSkill} />
        </>
      );

    case "description":
      return (
        <>
          <label htmlFor="floatingTextarea2">Write job description here</label>
          <textarea
            className="form-control"
            placeholder="Write description"
            style={{ height: "100px" }}
            defaultValue={temp_jobpost.description}
            onChange={(e) =>
              saveTemporayJobPost({ description: e.target.value })
            }
          />
        </>
      );

    case "vacancy":
      return (
        <label>
          <label className="form-label">Vacancy</label>
          <input
            onChange={(e) => {
              if (e.target.value >= 0)
                saveTemporayJobPost({ vacancy: e.target.value });
            }}
            type="number"
            className="form-control"
            defaultValue={temp_jobpost.vacancy}
          />
        </label>
      );

    case "job_location_inside_dhaka":
      if (temp_jobpost.job_location_inside_dhaka === undefined) {
        saveTemporayJobPost({ job_location_inside_dhaka: true });
      }
      return (
        <>
          <label className="form-label">Job Location</label>
          <br />
          <Radio.Group
            onChange={(e) =>
              saveTemporayJobPost({ job_location_inside_dhaka: e.target.value })
            }
            defaultValue={temp_jobpost.job_location_inside_dhaka}
            buttonStyle="solid"
          >
            <Radio.Button value={true}>Inside Dhaka</Radio.Button>
            <Radio.Button value={false}>Outside Dhaka</Radio.Button>
          </Radio.Group>
        </>
      );

    case "gender":
      const gender_options = ["Male", "Female", "Others"];

      return (
        <>
          <label className="form-label">Gender</label>
          <br />
          <CheckBox
            value={temp_jobpost.gender}
            setValue={(val) => saveTemporayJobPost({ gender: val })}
            options={gender_options}
          />
        </>
      );

    case "salary":
      return (
        <>
          <label className="form-label">Salary</label>
          <br />
          <div className="row col-12">
            <input
              type="number"
              className="form-control col-5"
              placeholder="From"
              onChange={(e) =>
                saveTemporayJobPost({
                  min_salary: e.target.value,
                  max_salary: temp_jobpost.max_salary,
                })
              }
              defaultValue={temp_jobpost.min_salary}
            />
            <div className="col-1 mt-1">&mdash;</div>
            <input
              type="number"
              className="form-control col-5"
              placeholder="To"
              onChange={(e) =>
                saveTemporayJobPost({
                  min_salary: temp_jobpost.min_salary,
                  max_salary: e.target.value,
                })
              }
              defaultValue={temp_jobpost.max_salary}
            />
          </div>
        </>
      );

    case "experience":
      return (
        <>
          <label className="form-label">Years of Experience</label>
          <br />
          <div className="row col-12">
            <input
              type="number"
              className="form-control col-5"
              placeholder="Minimum Experience"
              onChange={(e) =>
                saveTemporayJobPost({
                  min_experience: e.target.value,
                  max_experience: temp_jobpost.max_experience,
                })
              }
              defaultValue={temp_jobpost.min_experience}
            />
            <div className="col-1 mt-1">&mdash;</div>
            <input
              type="number"
              className="form-control col-5"
              placeholder="Maximum Experience"
              onChange={(e) =>
                saveTemporayJobPost({
                  min_experience: temp_jobpost.min_experience,
                  max_experience: e.target.value,
                })
              }
              defaultValue={temp_jobpost.max_experience}
            />
          </div>
        </>
      );

    case "employment_status":
      const es_options = [
        "Full Time",
        "Part Time",
        "Contractual",
        "Internship",
        "Freelance",
      ];

      return (
        <>
          <label className="form-label">Employment Status</label>
          <br />
          <CheckBox
            value={temp_jobpost.employment_status}
            setValue={(val) => saveTemporayJobPost({ employment_status: val })}
            options={es_options}
          />
        </>
      );

    case "workplace":
      const workplace_options = ["Work at office", "Work from home"];

      return (
        <>
          <label className="form-label">Workplace</label>
          <br />
          <CheckBox
            value={temp_jobpost.workplace}
            setValue={(val) => saveTemporayJobPost({ workplace: val })}
            options={workplace_options}
          />
        </>
      );

    case "education":
      const setEducation = (education) => saveTemporayJobPost({ education });

      return (
        <>
          <label className="form-label">Education</label>
          <br />
          <EducationField
            value={temp_jobpost.education}
            setValue={setEducation}
          />
        </>
      );

    case "job_location":
      const setJobLocation = (value) => {
        saveTemporayJobPost({ job_location: value });
      };

      return (
        <>
          <label className="form-label">Location</label>
          <br />
          <LocationList
            value={temp_jobpost.job_location}
            setValue={setJobLocation}
          />
        </>
      );

    case "deadline":
      const today = new Date();

      let minDate = "";

      minDate += today.getFullYear() + "-";

      if (today.getMonth() < 10) {
        minDate += "0" + (today.getMonth() + 1);
      } else minDate += today.getMonth() + 1;

      minDate += "-";

      if (today.getDate() < 10) {
        minDate += "0" + today.getDate();
      } else minDate += today.getDate();

      return (
        <>
          <label className="form-label">Application Deadline </label>
          <br />
          <input
            onChange={(e) => saveTemporayJobPost({ deadline: e.target.value })}
            type="date"
            className="form-control"
            min={minDate}
            defaultValue={temp_jobpost.deadline}
          />
        </>
      );

    case "age":
      const age = _.range(14, 91);

      return (
        <>
          <label className="form-label">Age</label>
          <br />
          <div className="row col-12">
            <Select
              onChange={(val) => saveTemporayJobPost({ min_age: val })}
              style={{ width: 200 }}
              placeholder="Minimum age"
              defaultValue={temp_jobpost.min_age}
              allowClear
            >
              {age.map((a) => (
                <Select.Option key={a} value={a}>
                  {a}
                </Select.Option>
              ))}
            </Select>
            <div className="col-1 mt-1">&mdash;</div>
            <Select
              onChange={(val) => saveTemporayJobPost({ max_age: val })}
              style={{ width: 200 }}
              placeholder="Maximum age"
              defaultValue={temp_jobpost.max_age}
              allowClear
            >
              {age.map((a) => (
                <Select.Option key={a} value={a}>
                  {a}
                </Select.Option>
              ))}
            </Select>
          </div>
        </>
      );

    default:
      break;
  }
};

const renderCategories = (categories, temp_jobpost, setValue) => {
  const { Option, OptGroup } = Select;
  return (
    <>
      <div className="col-8 mt-4">
        <label className="form-label">Job Category</label>
        <br />
        <Select
          placeholder="Select Category"
          className="mb-3"
          style={{ width: 300 }}
          onChange={(value) => setValue({ category: JSON.parse(value) })}
          defaultValue={JSON.stringify(temp_jobpost.category)}
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
      </div>
    </>
  );
};

const StepsParent = ({
  item,
  children,
  categories,
  temp_jobpost,
  saveTemporayJobPost,
}) => {
  useEffect(() => {
    getJobCategories();
  }, []);

  if (item === "category") {
    return renderCategories(categories, temp_jobpost, saveTemporayJobPost);
  }

  return (
    <div className="col-8 mt-4">
      {renderItem(item, children, saveTemporayJobPost, temp_jobpost)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.job.categories,
    location: state.job.location,
    temp_jobpost: state.job.temp_jobpost,
  };
};

export default connect(mapStateToProps, {
  getJobCategories,
  saveTemporayJobPost,
})(StepsParent);
