import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/system";

function Location() {
  const [latLon, setLatLon] = useState([]);

  function getCord() {
    fetch(
      "https://api.myptv.com/geocoding/v1/locations/by-address?country=Netherlands&locality=Delft&street=Aan't%20verlaat&houseNumber=33F&countryFilter=NL%2CDE%2CBE",
      {
        method: "GET",
        headers: {
          apiKey:
            "OTc0MDk4N2VjN2FhNDZhMTkyYzhiMDFmNWIzMDlhNDU6ODVjYWM1ZWMtMWVhNi00NjdhLTkzZGYtMzdlZjdmYzNkYmYx",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setLatLon(result.locations[0].referencePosition));
  }
  useEffect(getCord, []);
console.log(latLon)
 
  return (
    <div>
    some lat and lon s
    </div>
  );
}

export default Location;
