import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import PSLogo from "./PSLogo.jpg";
import "../App.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Signup({ setUser, onLogin, ETData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const [formCity, setFormCity] = useState([]);
  const [cet, setCet] = useState([]);



  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
    setPassword("");
    setEmail("");
    setCet("");
  }

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    setPassword("");
    setEmail("");
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        cet_id: cet,
       
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    setPassword("");
    setEmail("");
    setCet("");
  }


  return (
    <div>
      <Box
        sx={{
          my: 6,
          mb: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <img src={PSLogo} />
      </Box>

      <div style={isClicked ? { display: "none" } : { display: "flex" }}>
        <Box
          sx={{
            maxWidth: 350,
            mx: "auto",
            my: 2,
            mb: -2,
            py: 2,
            px: 5,
            display: "grid",
            display: "flex",
            align: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: 4,
            borderRadius: "sm",
            boxShadow: "sm",
          }}
        >
          <Typography variant="h4" align="center" sx={{ color: "black" }}>
            <div>Signup</div>
          </Typography>
          <Typography variant="h6" sx={{ color: "gray" }}>
            <div>Welcome to Pro-Sprinkler</div>
          </Typography>
          {/* <TextField
        label="Street Address"
        placeholder="Type in here..."
        varient="soft"
        required
        helperText="2794 Willow Dr."
      ></TextField> */}
          {/* <TextField
            label="City"
            placeholder="Type in here..."
            varient="soft"
            required
            helperText="Kingwood"
          ></TextField> */}
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cet}
            helperText="JohnWaterfall@gmail.com"
            onChange={(e) => setCet(e.target.value)}
          >
            <MenuItem value={"1"}>Austin</MenuItem>
            <MenuItem value={"3"}>Abilene</MenuItem>
            <MenuItem value={"2"}>Amarillo</MenuItem>
            <MenuItem value={"7"}>College Station</MenuItem>
            <MenuItem value={"4"}>Dallas</MenuItem>
            <MenuItem value={"8"}>El Paso</MenuItem>
            <MenuItem value={"5"}>Fort Worth</MenuItem>
            <MenuItem value={"11"}>Houston</MenuItem>
            <MenuItem value={"12"}>Laredo</MenuItem>
            <MenuItem value={"9"}>San Angelo</MenuItem>
            <MenuItem value={"10"}>San Antonio</MenuItem>
          </Select>
          {/* <TextField
        label="Zip"
        placeholder="Type in here..."
        varient="soft"
        required
        helperText="77345"
      ></TextField> */}
          {/* <TextField
        label="State"
        placeholder="Type in here..."
        varient="soft"
        required
        helperText="Tx"
      ></TextField> */}
          <TextField
            label="Email"
            placeholder="Type in here..."
            varient="soft"
            required
            helperText="JohnWaterfall@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            label="Password"
            type="password"
            placeholder="Type in here..."
            varient="soft"
            required
            helperText="Grass1s@lways$er"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          ></TextField>
          <TextField
            label="Password Confirmation"
            type="password"
            placeholder="Type in here..."
            varient="soft"
            required
            helperText="Grass1s@lways$er"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          ></TextField>

          {/* </CssVarsProvider>     */}
          <div>
            <Typography align="center">
              <Button
                sx={{
                  mt: 1,
                }}
                onClick={handleSubmit}
              >
                Create account
              </Button>
            </Typography>
          </div>
          <div>
           
          </div>
        </Box>
      </div>

      <div style={isClicked ? { display: "flex" } : { display: "none" }}>
        {" "}
        {/* <Nav /> */}
        <Box
          sx={{
            maxWidth: 350,
            mx: "auto",
            my: 2,
            mb: -2,
            py: 2,
            px: 5,
            display: "grid",
            display: "flex",
            align: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: 4,
            borderRadius: "sm",
            boxShadow: "sm",
          }}
        >
          <Typography variant="h4" align="center" sx={{ color: "black" }}>
            <div>Hello Again</div>
          </Typography>
          <Typography variant="h6" sx={{ color: "gray" }}>
            <div>Login to Pro-Sprinkler </div>
          </Typography>

          <TextField
            label="Email"
            placeholder="Type in here..."
            varient="soft"
            required
            helperText="JohnWaterfall@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            label="Password"
            type="password"
            placeholder="Type in here..."
            varient="soft"
            required
            helperText="Grass1s@lways$er"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          ></TextField>

          {/* </CssVarsProvider>     */}
          <div>
            <Typography align="center">
              <Button
                sx={{
                  mt: 1,
                  mb: -2,
                }}
                onClick={handleLogin}
              >
                Login{" "}
              </Button>
              <p></p>
            
            </Typography>
          </div>
          <div></div>
        </Box>
      </div>
      {/* <button className="center" </button> */}
      <Typography align="center" level="body2" sx={{ mb: 8 }}>
        <Button onClick={handleClick}>
          {isClicked
            ? "I Need to create an account"
            : "I Already have an account"}
        </Button>
        {/* <a href={<Login />}>Login</a> */}
      </Typography>
      <Box
        sx={{
          maxWidth: 350,
          mx: "auto",
          my: 2,
          mb: -8,
          py: 2,
          px: 5,
          display: "grid",
          display: "flex",
          align: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: 4,
          borderRadius: "sm",
          boxShadow: "sm",
        }}
      >{errors}
      <div>
      <Typography variant="caption" align="center">
        DISCLAIMER OF DAMAGES. <p></p> By signing up and/or loging in you agree that Pro-Sprinkler will not be liable for any damages, loss in material, plant material, bills, fees, or fines and in perpetuity.      
        </Typography></div></Box>
      
    </div>
  );
}

//password "view"
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// endAdornment={
//   <InputAdornment position="end">
//     <IconButton
//       aria-label="toggle password visibility"
//       onClick={handleClickShowPassword}
//       onMouseDown={handleMouseDownPassword}
//       edge="end"
//     >
//       {values.showPassword ? <VisibilityOff /> : <Visibility />}
//     </IconButton>
//   </InputAdornment>
// }
