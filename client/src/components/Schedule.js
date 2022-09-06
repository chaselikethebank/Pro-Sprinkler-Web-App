import React from "react";
import { Box } from "@mui/system";

function Schedule() {

  return (
    <div className="schedule">
     <Box m={1} pt={1} align="center" sx={{ margin: 10, fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}>
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
    </Box>
    </div>
  );
}

export default Schedule;