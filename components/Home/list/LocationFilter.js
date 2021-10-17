import React, { useState, useRef, useEffect } from "react";
import LocationList from "../input/LocationList";
import _ from "lodash";
import { SetfilterAction } from "../../../redux/actions/jobAction";
import { connect } from "react-redux";
import { getLocationList } from "redux/actions/jobAction";
import { useRouter } from "next/router";
import { Button, Col, Skeleton } from "antd";
import Link from "next/link";
import { ForwardOutlined } from "@ant-design/icons";

const LocationFilter = ({
  filter,
  setFilter,
  reload,
  setShowPage,
  showPage,
  query,
  getLocationList,
  SetfilterAction,
}) => {
  const router = useRouter();
  const [location, setlocation] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    getLocationList().then((result) => {
      setlocation(result);
      setloading(false);
    });
  }, []);

  const onLocationSelect = (divison) => {
    if (divison) {
      divison = JSON.parse(divison);
      console.log(divison);
      const new_filter = { ...filter, location: divison };
      SetfilterAction(new_filter);
      router.push({
        pathname: "/jobs/list",
      });
    }
  };

  const onClear = () => {
    filter = _.omit(filter, ["location"]);
    setFilter(filter);
    reload(true);
  };

  if (loading) {
    return <Skeleton active />;
  } else {
    return (
      <>
        <Col
          span={6}
          style={{
            backgroundColor: "#A93EA6",
            padding: "10px 33px",
          }}
        >
          <h3>Location</h3>
          {location.map((divison) => {
            return (
              <Button
                key={JSON.stringify({
                  id: divison.id,
                  name: divison.name,
                  type: divison.type,
                })}
                onClick={() => {
                  //delete divison.districts;
                  onLocationSelect(JSON.stringify(divison));
                  console.log(divison);
                }}
                style={{
                  backgroundColor: "#773EA9",
                  border: "1px solid #ffffff",
                  margin: "3px",
                  color: "#ffffff",
                }}
              >
                {" "}
                {divison.name}
              </Button>
            );
          })}
          <h3 style={{ marginTop: "15px " }}>Quick links</h3>
          <div className="quick_link">
            <ForwardOutlined />
            <Link href="/worker/list"> Worker list </Link>
            <ForwardOutlined />
            <Link href="/announcement"> All Announcements </Link>
          </div>
        </Col>
      </>
    );
  }
};

//export default LocationFilter;
const mapStateToProps = (state) => {
  return {
    // location: state.job.location,
  };
};

export default connect(mapStateToProps, { getLocationList, SetfilterAction })(
  LocationFilter
);
