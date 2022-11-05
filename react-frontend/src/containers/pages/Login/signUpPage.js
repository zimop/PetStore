import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Link,
} from "@mui/material";

import "./loginPage.css";

const SignUpPage = (props) => {
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("password") !== data.get("confirm-password")) {
      setError("Error: Passwords do not match.");
    }
    let response = await fetch("/api/signup", {
      method: "POST",
      body: data,
    });
    let body = await response.json();
    if (response.status !== 200) {
      setError(body.error);
    } else {
      props.setToken(body.accessToken, false);
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
      <Typography variant="h5">Sign up for Petshop</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl className="loginForm">
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoFocus
          />
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="Confirm Password"
            type="password"
            id="confirm-password"
          />
          {error !== null && <p style={{ color: "red" }}>{error}</p>}
          <Link href="login" variant="body2">
            {"Already have an account? Login here"}
          </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default SignUpPage;
