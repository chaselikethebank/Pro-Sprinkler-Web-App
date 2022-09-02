import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import CssVarsProvider from "@material-ui/lab";
import Sheet from "@material-ui/lab";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function Login() {
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
            Login{" "}
          </Button>
        </Typography>
      </div>
      <div></div>
    </Box>
  );
}

export default Login;
