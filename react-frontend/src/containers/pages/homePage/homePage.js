import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import "./homePage.css";
import AdvSwiperBox from "../../components/imageSwipeBox.js";
import LandingInfoCard from "../../components/landingInfoCard.js";

import advImages from "./advImages";
import infoTabs from "./infoTabs.js";

const HomePage = ({ props }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* Background */}
      <div className="home-background">
        {/* catalogue-icons header */}
        <div className="catalogue-icons">
          <Grid container spacing={6}>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <Avatar
                src="/catalogueIcons/cat_face.png"
                sx={{ width: 80, height: 80, borderRadius: 0 }}
              />
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <Avatar
                src="/catalogueIcons/dog_face.png"
                sx={{ width: 80, height: 80, borderRadius: 0 }}
              />
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <Avatar
                src="/catalogueIcons/mouse_face.png"
                sx={{ width: 80, height: 80, borderRadius: 0 }}
              />
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <Avatar
                src="/catalogueIcons/rabbit_face.png"
                sx={{ width: 80, height: 80, borderRadius: 0 }}
              />
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <Avatar
                src="/catalogueIcons/bird_face.png"
                sx={{ width: 80, height: 80, borderRadius: 0 }}
              />
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <Avatar
                src="/catalogueIcons/fish_face.png"
                sx={{ width: 80, height: 80, borderRadius: 0 }}
              />
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <Avatar
                src="/catalogueIcons/horse_face.png"
                sx={{ width: 80, height: 80, borderRadius: 0 }}
              />
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <Avatar
                src="/catalogueIcons/dragon_face.png"
                sx={{ width: 80, height: 80, borderRadius: 0 }}
              />
            </Grid>
          </Grid>
        </div>

        {/* advSwipeBox header*/}
        <div className="adv-swipe-box">
          <AdvSwiperBox width={600} height={400} images={advImages} />
        </div>

        {/* Three clickable info tabs */}
        <div className="info-tabs">
          <Grid container spacing={6} sx={{ my: 4 }}>
            <Grid item xs={4}>
              <LandingInfoCard
                title={infoTabs[0].title}
                paragraph={infoTabs[0].paragraph}
              />
            </Grid>
            <Grid item xs={4}>
              <LandingInfoCard
                title={infoTabs[1].title}
                paragraph={infoTabs[1].paragraph}
              />
            </Grid>
            <Grid item xs={4}>
              <LandingInfoCard
                title={infoTabs[2].title}
                paragraph={infoTabs[2].paragraph}
              />
            </Grid>
          </Grid>
        </div>

        {/* Big block of advs in lower page */}

        <Card variant="ImgMediaCard" sx={{ my: 6 }}>
          <img src="https://picsum.photos/1200/600"></img>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
