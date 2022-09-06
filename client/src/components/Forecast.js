import React from "react";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Forecast({ local, temp, forecast, icon}) {
//   console.log(temp)
const [placeArt, setPlaceArt] = useState("data:image/png;base64,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")
  return <Box
  sx={{
    maxWidth: 600,
    mx: "auto",
    my: 20,
    mb: 15,
    py: 3,
    px: 2,
    display: "grid",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 4,
    borderRadius: "sm",
    boxShadow: "sm",
  }}>

        <CardMedia
     component="img"
        heigh="350"
        image={placeArt} 
        alt="Forecast Icon" 
       />
       
       <Typography variant="h4" color="text.primary">
        <h4><p></p>{temp.main.temp}°F with {forecast[0].main}</h4>
        </Typography>
      <section className="details">
      <CardContent>
        <Typography gutterBottom variant="h2" component="div" color="text.primary">
        {local[0]}, {local[1]}
            </Typography>
            </CardContent>
            <Typography gutterBottom variant="h5" component="div" color="text.primary">
        <p>{forecast[0].description}</p>
        <p>high of {temp.main.temp_max}°F / low of {temp.main.temp_min}°F</p>
        <p>Humidity: {temp.main.humidity}%</p>
        {/* {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null} */}
        </Typography>
      </section>

      <footer className="extra">
    
      </footer>
    </Box>;
}

export default Forecast;
