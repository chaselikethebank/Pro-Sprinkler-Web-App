import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import CssVarsProvider from "@material-ui/lab";
import Sheet from "@material-ui/lab";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState, useEffect } from "react";
import Nav from "./Nav";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log({ email }, { password });


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
    setPassword('')
    setEmail('')
  }

  return (
    <Box>
      {" "}
      {/* <Nav /> */}
      
      <Box
        sx={{
          maxWidth: 350,
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
        }}
      >
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
            </Button><p></p>
            {errors}
          </Typography>
        </div>
        <div></div>
      </Box>
    </Box>
  );
}

export default Login;
