// HTTP: http://api.weatherbit.io/v2.0/forecast/agweather
import React from "react";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Schedule from "./Schedule";

function ETAndCycle() {
  const APIET = "www.google.com";
  const APIKey =
    "OTc0MDk4N2VjN2FhNDZhMTkyYzhiMDFmNWIzMDlhNDU6ODVjYWM1ZWMtMWVhNi00NjdhLTkzZGYtMzdlZjdmYzNkYmYx";

  const [monthETState, setMonthETState] = useState();
  // const [ET, setET] = useState(.9)
  let monthET = monthETState; //inches
  let cropET = (monthET * 0.65).toFixed(2);
  let weekET = (cropET / 4.2).toFixed(2);
  let cyclesPerWeek = 4;
  let rotor = (((weekET / 0.625) * 60) / cyclesPerWeek).toFixed(0);
  let spray = (((weekET / 1.5) * 60) / cyclesPerWeek).toFixed(0);

  function setET() {
    setMonthETState(thisMonthsET[0][1])
  }
  useEffect(setET, [])
  // console.log(monthETState)

  // function getET() {
  //   fetch((APIET),
  //     {
  //       method: "GET",
  //       headers: {
  //         apiKey:
  //           {APIKey},
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setET(result));
  // }
  // useEffect(getET, []);

  // function Math () {
  // {ET}
  // }

  const monthsAsStrings = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let month = monthsAsStrings[d.getMonth()];
  // const setMonth = () => {
  //   setMonthState(month)
  // }

  const ETPerMonthInHouston =
    {
      January: 1.0,
      February: 1.5,
      March: 2.8,
      April: 4.5,
      May: 6.5,
      June: 7.8,
      July: 8.2,
      August: 7.8,
      September: 6.0,
      October: 4.5,
      November: 2.2,
      December: 1.3,
    }
  
  const ETsAsArray = Object.entries(ETPerMonthInHouston)
  // console.log(ETsAsArray)
  const filter = ETsAsArray.filter(([key, value]) => typeof value === 'string')
  // console.log(filter)

  let thisMonthsET = ETsAsArray.filter((item) => {
    let currentMonth = monthsAsStrings[d.getMonth()];
    // console.log(item[0])
    // console.log(currentMonth)
    return item[0].toLowerCase().includes(currentMonth.toLowerCase());
  });
  // console.log((thisMonthsET[0][1]));

  return (
    <div className="historical">
      <Box
        m={1}
        pt={1}
        align="left"
        sx={{
          fontFamily: "Arial",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontOpticalSizing: "auto",
        }}
      >
        <ul>
          <li>
            if historical ET / in {month} is {monthET}",
            <p></p>
            then, {cropET}" is the ET X crop coefficient,
            <p></p>
            making the weekly ET {weekET}" / week.
            <p></p>
            run all rotor zones @ {rotor} minutes / cycle
            <p></p>
            run all spray zones @ {spray} minutes / cycle
          </li>
        </ul>
        Your pro sprinkler schedule for August has 4 watering events per week:
      

      <ul>
      <br></br>
      <p></p>
      <p>
        <li>
        Monday: Water @ Sunrise 
        </li>
      </p>
      <p>
        <li>
        Tuesday: Non-Event
        </li>
      </p>
      <p>
        <li>
        Wednesday: Water @ Sunrise 
        </li>
      </p>
      <p>
        <li>
        Thursday: Non-Event
        </li>
      </p>
      <p>
        <li>
        Friday: Water @ Sunrise 
        </li>
      </p>
      <p>
        <li>
        Sunday: Water @ Sunrise
        </li>
      </p>
      </ul>
      <p></p>
      <p></p>
      <br></br>
      <p>
        Set all Rotor Zones to: 15 minutes
      </p>
      <p>
        Set all Spray Zones to: 7 minutes
      </p>
      <p>
        OR set your seasonal adjustment to 95%
      </p>
        {/* <Schedule /> */}
      </Box>
    </div>
  );
}

export default ETAndCycle;
