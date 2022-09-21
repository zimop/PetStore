import * as React from "react";
import Typography from "@mui/material/Typography";

const ItemDescription = (props) => {
  return (
    <div>
      <Typography variant="body2" color="text.secondary">
        {props.text}
      </Typography>
    </div>
  );
};

export default ItemDescription;
