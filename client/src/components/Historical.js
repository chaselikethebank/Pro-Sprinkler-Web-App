// HTTP: http://api.weatherbit.io/v2.0/forecast/agweather
import React from "react";
import { Box } from "@mui/system";
import { useState, useEffect } from 'react'

function Historical() {

// const [ET, setET] = useState(.9)
let monthET = 8 //inches
let cropET = (monthET * .65).toFixed(2)
let weekET = (cropET / 4.2).toFixed(2)
let cyclesPerWeek = 4
let rotor = ((((weekET /.625)*60)/cyclesPerWeek)).toFixed(0)
let spray = ((((weekET / 1.5)*60)/cyclesPerWeek)).toFixed(0)

const APIET = "www.google.com"
const APIKey = "OTc0MDk4N2VjN2FhNDZhMTkyYzhiMDFmNWIzMDlhNDU6ODVjYWM1ZWMtMWVhNi00NjdhLTkzZGYtMzdlZjdmYzNkYmYx"

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

const [monthState, setMonthState] = useState("")
const monthString = [
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
let month = monthString[d.getMonth()];
const setMonth = () => {
  setMonthState(month)
}

  return (
    <div className="historical">
     <Box m={1} pt={1} align="left" sx={{ fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}>
      <ul>
        <li>
          if historical ET / in {month} is {monthET}",
          <p></p>
        then, {cropET}" is the ET X crop coefficient,
        <p></p>
        making the weekly ET {weekET}" /week.
        <p></p>
        run all rotor zones @ {rotor} minutes / cycle
        <p></p>
        run all spray zones @ {spray} minutes / cycle

        </li>
      </ul>
    </Box>
    </div>
  );
}

export default Historical;