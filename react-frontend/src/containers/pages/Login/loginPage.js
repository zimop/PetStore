import React from "react";
import {
  Typography,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";

const LoginPage = (props) => {
  return (
    // Adapted from https://github.com/mui/material-ui/blob/v5.10.8/docs/data/material/getting-started/templates/sign-in/SignIn.js
    // Licenced under MIT licence
    <div>
      <Typography variant="h5">Login to Petstore</Typography>
      <FormControl>
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
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Link href="#" variant="body2">
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
    </div>
  );
};

export default LoginPage;
