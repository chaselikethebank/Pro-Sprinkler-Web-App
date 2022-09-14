// HTTP: http://api.weatherbit.io/v2.0/forecast/agweather
import React from "react";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
// import Schedule from "./Schedule";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
// import InvertColorsIcon from "@mui/icons-material/InvertColors";
// import InvertColorsOffIcon from "@mui/icons-material/InvertColorsOff";
import rotorIcon from "./i-1.png";
// import rotorDark from "./i-2.png";
import sprayIcon from "./j-3.png";
// import sprayDark from "./j-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCalendar, faDroplet, faDropletSlash } from "@fortawesome/free-solid-svg-icons";

function ETAndCycle({user, sessionMonths}) { 
console.log(sessionMonths)

  const calendar = <FontAwesomeIcon icon={faCalendar} />
  const waterIcon = <FontAwesomeIcon icon={faDroplet} />
  const waterSlashIcon = <FontAwesomeIcon icon={faDropletSlash} />
  const element = <FontAwesomeIcon icon={faCoffee} />
  const seasonalLink = "https://www.youtube.com/watch?v=IjwJFnB6wj4"
  const APIET = "www.google.com";
  const APIKey =
    "OTc0MDk4N2VjN2FhNDZhMTkyYzhiMDFmNWIzMDlhNDU6ODVjYWM1ZWMtMWVhNi00NjdhLTkzZGYtMzdlZjdmYzNkYmYx";

  const [monthETState, setMonthETState] = useState();
  // const [ET, setET] = useState(.9)
  const [seasonal, setSeasonal] = useState(null)

  let monthET = monthETState; //inches
  let cropET = (monthET * 0.65).toFixed(2);
  let weekET = (cropET / 4.2).toFixed(2);
  let cyclesPerWeek = 4;
  let rotor = (((weekET / 0.625) * 60) / cyclesPerWeek).toFixed(0);
  let spray = (((weekET / 1.5) * 60) / cyclesPerWeek).toFixed(0);

  // console.log(seasonal)

  useEffect(getSeasonal, [])
  function getSeasonal () {
    let big = ((Object.entries(ETPerMonthInHouston))[6][1])
    // console.log(big)
    let small = thisMonthsET[0][1]
    let seasonalMathLong = ((small)/(big)*100)
    // console.log(seasonalMathLong)
    setSeasonal(roundNearest5(seasonalMathLong))
    function roundNearest5(num) { 
      return Math.round(num / 5) * 5;
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  function setET() {
    setMonthETState(thisMonthsET[0][1]);
  }
  useEffect(setET, []);

  

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

  const ETPerMonthInHouston = {
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

  const ETsAsArray = Object.entries(ETPerMonthInHouston);
  
  const filter = ETsAsArray.filter(([key, value]) => typeof value === "string");
  // console.log(filter)

  let thisMonthsET = ETsAsArray.filter((item) => {
    let currentMonth = monthsAsStrings[d.getMonth()];
    // console.log(item[0])
    // console.log(currentMonth)
    return item[0].toLowerCase().includes(currentMonth.toLowerCase());
  });
  // console.log((thisMonthsET[0][1]));

  //seasonal math
  
  

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  // console.log(rotor, rotorDark, spray, sprayDark)
  return (
    
    <div className="historical">
      
      <Box
        m={5}
        pt={5}
        align="left"
        sx={{
          fontFamily: "Arial",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontOpticalSizing: "auto",
        }}
      >
        <Card className="card" sx={{ minWidth: 295, maxWidth: "50%" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {calendar}  {month}

            </Typography>
            <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
              Houston               (get user city)

            </Typography>
            <br></br>
            <Box align="center">
              <Typography variant="body" sx={{ mb: 1 }} >
                <img src={rotorIcon} style={{ width: "auto", height: 105 }} />{" "}
                Set rotor zones to {rotor} min per cycle
                <p></p>
                <img src={sprayIcon} style={{ width: "auto", height: 105 }} />
                Set spray zones to {spray} min per cycle
              </Typography>
            </Box>
            <Box align="center">
            <Typography m={3} sx={{ mb: 2 }} color="text.secondary">
              {/* Your Schedule: */}
              <br></br>

            </Typography>
            </Box>
            <Typography>
              <Stack
                direction="column"
                sx={{ mb: 4 }}
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}
              >
                 <Item>Monday: {waterIcon}</Item>
                <Item>Tuesday: {waterSlashIcon}</Item>
                <Item>Wednesday: {waterIcon}</Item>
                <Item>Thursday: {waterSlashIcon}</Item>
                <Item>Friday: {waterIcon}</Item>
                <Item>Saturday: {waterSlashIcon}</Item>
                <Item>Sunday:{waterIcon}</Item>

              </Stack>
              <Box align="center">
                <Typography
                  align="justify"
                  variant="caption"
                  sx={{ mb: 1 }}
                  color="text.secondary"
                >
                
                  * or <a href={seasonalLink}>seasonally adjust</a> to {seasonal
                  //  !== null ? {getSeasonal} : "75"
                   }%
                </Typography>
              </Box>
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
       

        {/* <Schedule /> */}
      </Box>
    </div>
  );
}

export default ETAndCycle;
