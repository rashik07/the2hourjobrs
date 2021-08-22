import React, { useState } from "react";
import LocationList from "../input/LocationList";
import _ from "lodash";

const LocationFilter = ({ filter, setFilter }) => {
  const [location, setLocation] = useState("");

  const onLocationSelect = (location) => {
    setLocation(location);

    if (location) {
      location = JSON.parse(location);

      setFilter({ ...filter, location });
    }
  };

  const onClear = () => {
    filter = _.omit(filter, ["location"]);
    setFilter(filter);
  };

  return (
    <>
      <h3>Location</h3>
      <LocationList
        value={location}
        setValue={onLocationSelect}
        multiple={false}
        onClear={onClear}
      />
    </>
  );
};

export default LocationFilter;
