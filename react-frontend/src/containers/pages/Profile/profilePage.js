import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import resetToken from "../../../resetToken";

const ProfilePage = (props) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData(props.token).then((userData) => {
      setUserData(userData);
    });
  }, [props.token]);

  if (!props.token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Typography variant="h3">Profile</Typography>
      <Typography variant="h6">Email</Typography>
      <Typography variant="body">{userData.Email}</Typography>
      <Typography variant="h6">Name</Typography>
      <Typography variant="body">
        {userData.FirstName} {userData.LastName}
      </Typography>
    </div>
  );
};

const getUserData = async (token) => {
  let response = await fetch("/api/get-user", {
    method: "POST",
    headers: {
      "x-access-token": `${token}`,
    },
  });
  if (response.status == 401) {
    // Token invalid or expired
    resetToken();
  }
  let data = await response.json();
  return data;
};

export default ProfilePage;
