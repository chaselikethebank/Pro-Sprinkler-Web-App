// HTTP: http://api.weatherbit.io/v2.0/forecast/agweather
import React from "react";
import { Box } from "@mui/system";

function Historical() {

  const handleAddressChange = (passData) => {
    console.log(passData)
  }

  return (
    <div className="historical">
     <Box m={1} pt={1} align="left" sx={{ fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}>
      <ul>
        <li>
        precip rate
            {/* {title} */}
        
        </li>
      </ul>
    </Box>
    </div>
  );
}

export default Historical;