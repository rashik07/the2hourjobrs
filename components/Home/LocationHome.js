import React, { useState, useEffect } from "react";
import Location from "./Location";

const LocationHome = ({ filter, setFilter, reload ,setShowPage}) => {
  const [location, setLocation] = useState("");

  const onLocationSelect = (location) => {
    setLocation(location);

    if (location) {
      location = JSON.parse(location);

      setFilter({ ...filter, location });
    }
     reload(true);
  };
  return (
    <div>
      <Location
        value={location}
        setValue={onLocationSelect}
        setShowPage={setShowPage}
      ></Location>
    </div>
  );
};

export default LocationHome;
