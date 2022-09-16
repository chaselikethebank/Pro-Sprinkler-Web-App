import React from "react";
import Box from '@mui/material/Box';
import PSLogo from "./PSLogo.jpg";
import { Typography } from "@mui/material";
import lawn from "./lawn.jpeg"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";


function About() {
const image = lawn

  return (
    <div className="">
      
      <Box
          sx={{
            my: 6,
            mb: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
          }}
        >
          <img src={PSLogo} />
        </Box>
       
        <Box
          sx={{
            my: 6,
            mb: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
          }}
        >
          <img src={lawn} />
        </Box>
        <Card className="card" sx={{ minWidth: 295, maxWidth: "50%" }}>
          <CardContent>
        <Box m={1} pt={1} align="center" sx={{  my: 6,
            mb: 2, fontFamily: 'Arial', fontWeight: 'bold', fontOpticalSizing: 'auto', flexDirection: { xs: 'column', md: 'row' },  }}>
<Typography variant="h3">
About
</Typography>
<Typography variant="body">
  The Pro Sprinkler App helps answer the question: "How much should I water my lawn?"<p></p>
The best answer is: "Before it dies!" <p></p>
Diving deeper, there are a number of variables that can complicate the problem. Some of them static like, your location, while others are more dynamic like, the water needs for the current season. Deeper still, qualitative adjustments like the "best" lawn and quantitative measures like watering budget or city mandated restrictions can further complicate the issue. 
</Typography>
      </Box>
      <Box m={1} pt={1} align="center" sx={{  my: 6,
            mb: 2, fontFamily: 'Arial', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}>
<Typography variant="h3">
Why?</Typography>
<Typography variant="body">
  A small number of home owners are moving to wifi enabled controllers that automatically reset the run times based on the dynamic Evapotranspiration needs throughout the year(ET for short: how much water, in inches, the landscape needs). The majority of home owners have old quasi analog / digital clocks that need to be manually operated. Most people do not know what to set there systems to and easily waste money or kill plants. 
</Typography>
<Box m={1} pt={1} align="center" sx={{  my: 6,
            mb: 2, fontFamily: 'Arial', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}></Box>
<Typography variant="h3">
More Details
</Typography>
<Typography variant="body">
  The details for optimum watering schedule can get complicated fast and at some point efforts outway results resulting diminishing returns. So, without getting into crop root depth, field capacity, or varying crop coefficient (we used, .65) the formula/code for our irrigation schedule calculator is: <p></p>
  let monthET = monthETState; //inches<p></p>
  let cropET = (monthET * 0.65).toFixed(2);<p></p>
  let weekET = (cropET / 4.2).toFixed(2);<p></p>
  let cyclesPerWeek = 4;<p></p>
  let rotor = (((weekET / 0.625) * 60) / cyclesPerWeek).toFixed(0);<p></p>
  let spray = (((weekET / 1.5) * 60) / cyclesPerWeek).toFixed(0);<p></p>
  Where each month a new monthET is automatically reset based on the desired water needs for your area (selected at signup). 

</Typography>
      </Box>
      <Box m={1} pt={1} align="center" sx={{  my: 6,
            mb: 2, fontFamily: 'Arial', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}>
<Typography variant="h3">
Best Practices
</Typography>
<Typography variant="body">
  For best practices, Login to your Pro Sprinkler app at the beginning of each month and reset all your zones according the adjusted settings, seasonal or otherwise.  
</Typography>
      </Box>
      </CardContent>
      </Card>
    </div>
  );
}

export default About;