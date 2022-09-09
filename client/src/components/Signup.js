import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import CssVarsProvider from "@material-ui/lab";
import Sheet from "@material-ui/lab";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Login from "./Login";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";
import Disclaimer from "./Disclaimer";
import PSLogo from "./PSLogo.jpg";
import "../App.css";

export default function Signup({ setUser, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log({ email }, { password });
  const [isClicked, setIsClicked] = useState(true);

  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
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
    setIsLoading(true);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        // password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((email) => onLogin(email));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    setPassword("");
    setEmail("");
  }

  // const imgSize = {
  //   height: 105,
  //   width: 105,
  // };
  return (
    <div>
      <div className="image">
        <Box
          sx={{
            maxWidth: 525,
            mx: "auto",
            my: 7,
            mb: 2,
          }}
        >
          <img src={PSLogo} />
        </Box>
      </div>
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
            <div>Welcome to the Pro-Sprinkler app</div>
          </Typography>
          {/* <TextField
        label="Street Address"
        placeholder="Type in here..."
        varient="soft"
        required
        helperText="2794 Willow Dr."
      ></TextField> */}
          <TextField
            label="City"
            placeholder="Type in here..."
            varient="soft"
            required
            helperText="Kingwood"
          ></TextField>
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
                }}
                onClick={handleSubmit}
              >
                Create account
              </Button>
            </Typography>
          </div>
          <div></div>
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
            <div>Welcome Back</div>
          </Typography>
          <Typography variant="h6" sx={{ color: "gray" }}>
            <div>Login to the Pro-Sprinkler Web App</div>
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
                }}
                onClick={handleLogin}
              >
                Login{" "}
              </Button>
              <p></p>
              {errors}
            </Typography>
          </div>
          <div></div>
        </Box>
      </div>
      {/* <button className="center" </button> */}
      <Typography align="center" level="body2">
        <Button onClick={handleClick}>
          {isClicked ? "I Need to create an account" : "I Already have an account"}
        </Button>
        {/* <a href={<Login />}>Login</a> */}
      </Typography>
      <Disclaimer />
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
      <Typography variant="caption" align="center">
        DISCLAIMER OF DAMAGES. <p></p> By signing up and/or loging in you agree that Pro-Sprinkler Web App will not be liable for any damages, loss in material, plant material, bills, fees, or fines and in perpetuity.      
        </Typography>
        </Box>
    </div>
  );
}
