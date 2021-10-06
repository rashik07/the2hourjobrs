import React, { useState, useEffect ,useRef } from "react";
import { connect } from "react-redux";
import { getLocationList } from "redux/actions/jobAction";
import { Button } from "antd";


const Location = ({
  location,
  getLocationList,
  setShowPage,
  setValue,
  showPage,
 
  value,
  setLocation,
}) => {
  const locationshow= useRef("");
  useEffect(() => {
    getLocationList();
  }, []);
  //console.log(value);
  return (
    <div>
      {location.map((divison) => {
        return (
          <Button
          key={JSON.stringify({
            id: divison.id,
            name: divison.name,
            type: divison.type,
          })}
            onClick={() => {
              locationshow.current = { ...divison };
              delete locationshow.current.districts;
            //  setValue(newdiv);

             setValue(JSON.stringify(locationshow.current));
              console.log(locationshow.current.id);
              showPage.current="job_list";
              
              //setShowPage(true);
            }}
            //   setShowPage(true),
          >
            {" "}
            {divison.name}
          </Button>
     
        );
      })}
       {/* {location.map((divison) => {
        return (
          <Button
          key={JSON.stringify({
            id: divison.id,
            name: divison.name,
            type: divison.type,
          })}
            onClick={() => {
              locationshow.current = { ...divison };
              delete locationshow.current.districts;
            //  setValue(newdiv);

             setValue(JSON.stringify(locationshow.current));
              console.log(locationshow.current.id);
              showPage.current="job_list";
              
              //setShowPage(true);
            }}
            //   setShowPage(true),
          >
            {" "}
            {divison.name}
          </Button>
     
        );
      })}
    </div> */}
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.job.location,
  };
};

export default connect(mapStateToProps, { getLocationList })(Location);
