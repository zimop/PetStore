import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Typography,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";

import "./loginPage.css";

const LoginPage = (props) => {
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const useLocal = data.get("remember") !== undefined;
    let response = await fetch("/api/login", {
      method: "POST",
      body: data,
    });
    let body = await response.json();
    if (response.status !== 200) {
      setError(body.error);
    } else {
      props.setToken(body, useLocal);
      window.location.reload(false);
    }
  };
  if (props.token) {
    return <Navigate to="/profile" />;
  }
  return (
    // Adapted from https://github.com/mui/material-ui/blob/v5.10.8/docs/data/material/getting-started/templates/sign-in/SignIn.js
    // Licenced under MIT licence
    <div className="loginContainer">
      <Typography variant="h5">Login to Petshop</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl className="loginForm">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox name="remember" value="true" color="primary" />}
            label="Remember me"
          />
          {error !== null && <p style={{ color: "red" }}>{error}</p>}
          <Link href="signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </FormControl>
      </form>
    </div>
  );
};

export default LoginPage;
