import React, { useState,useRef } from "react";
import LocationList from "../input/LocationList";
import _ from "lodash";
import Location from "components/Home/Location";

const LocationFilter = ({
  filter,
  setFilter,
  reload,
  setShowPage,
  showPage,
}) => {
  const [location, setLocation] = useState("");
  
  const onLocationSelect = (location) => {
    console.log(location);
    setLocation(location);

    if (location) {
      location = JSON.parse(location);

      setFilter({ ...filter, location });
  
    }
    reload(true);
  };

  const onClear = () => {
    filter = _.omit(filter, ["location"]);
    setFilter(filter);
    reload(true);
  };
//  console.log(showPage.current);

  const showLocation = () => {
    if (showPage.current == "job_list")
      return (
        <LocationList
          value={location}
          setValue={onLocationSelect}
          multiple={false}
          onClear={onClear}
          placeholder="Select a location"
        />
        
      );
    if (showPage.current == "")
      return (
        <Location
          value={location}
          setValue={onLocationSelect}
          showPage={showPage}
          
        ></Location>
      );
  };

  return (
    <>
      <h3>Location</h3>
      {showLocation()}
    
    </>
  );
};

export default LocationFilter;
