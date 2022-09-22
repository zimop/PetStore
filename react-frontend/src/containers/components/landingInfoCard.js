import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";

import useTheme from "../../muiTheme";
import "./landingInfoCard.css";

const LandingInfoCard = (props) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ bgcolor: "homepageInfoCard.background" }}>
        <CardActionArea href={"/"}>
          <CardContent
            sx={{
              objectFit: "contain",
              alignContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "homepageInfoCard.text" }}
            >
              {props.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "homepageInfoCard.text" }}
            >
              {props.paragraph}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea href={"/"}>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "homepageInfoCard.text", marginBottom: "5%" }}
          >
            LEARN MORE
          </Button>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

export default LandingInfoCard;
