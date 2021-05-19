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
    <div className="border-bottom">
      <div className="mb-3">
        <p>
          <strong>Location</strong>
        </p>
        <LocationList
          value={location}
          setValue={onLocationSelect}
          multiple={false}
          onClear={onClear}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
