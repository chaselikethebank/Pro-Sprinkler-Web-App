import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import CssVarsProvider from "@material-ui/lab";
import Sheet from "@material-ui/lab";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Login from "./Login";
import Link from "@mui/material/Link";
import { useState, useEffect } from 'react';


export default function Signup({ setUser, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log({username}, {password})




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
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((username) => onLogin(username));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
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
      <Typography variant="h4" sx={{ color: "black", display: "flex" }}>
        <div>Create an account</div>
      </Typography>
      <Typography variant="h6" sx={{ color: "gray" }}>
        <div>Let's get started with your free trial.</div>
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
      ></TextField>
      <TextField
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
      ></TextField>
      <TextField
        label="Password"
        placeholder="Type in here..."
        varient="soft"
        required
        helperText="Grass1s@lways$er"
      ></TextField>

      {/* </CssVarsProvider>     */}
      <div>
        <Typography align="center">
          <Button
            sx={{
              mt: 1,
            }}
          >
            Create account
          </Button>
        </Typography>
      </div>
      <div>
        <Typography align="center" level="body2">
          Already have an account?
          <Button>
            {" "}
            <Link to={`/Login`}>Login</Link>
          </Button>
          {/* <a href={<Login />}>Login</a> */}
        </Typography>
      </div>
    </Box>
  );
}
