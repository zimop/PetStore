import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import "./recommendationCard.css";

export default function RecommendationCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      {/* <CardContent>
        <div className="review-header">
          <Avatar
            sx={{ bgcolor: "avatarColor.deepOrange" }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            O
          </Avatar>

          <Avatar src="/broken-image.jpg" />

          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
            component="div"
            marginLeft={1}
            marginRight={1}
          >
            Omar Sundaram
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            9 hours ago
          </Typography>
        </div>

        <Typography variant="body2">
          <br />
          {
            "The point of using Lorem lpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. The point of using Lorem lpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. The point of using Lorem lpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          }
        </Typography>
      </CardContent> */}

      <CardActions>
        <Button size="small" right>
          VIEW ALL
        </Button>
      </CardActions>
    </Card>
  );
}
