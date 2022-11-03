// import { useState, useEffect } from "react";
import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

import "./homePage.css";
import AdvSwiperBox from "../../components/imageSwipeBox.js";
import LandingInfoCard from "./staticPage/landingInfoCard.js";

import advImages from "./advImages";
import tabsInfo from "./staticPage/tabsInGlance.js";

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
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  // src="./catalogueIcons/cat_face.png"
                  src="./catalogueIcons/cat_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  src="./catalogueIcons/dog_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  src="./catalogueIcons/mouse_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  src="./catalogueIcons/rabbit_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  src="./catalogueIcons/bird_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  src="./catalogueIcons/fish_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  src="./catalogueIcons/horse_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={1.5} style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  src="./catalogueIcons/dragon_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
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
                link={"/info/click-collect"}
                title={tabsInfo[0].title}
                paragraph={tabsInfo[0].paragraph}
              />
            </Grid>
            <Grid item xs={4}>
              <LandingInfoCard
                link={"/info/delivery"}
                title={tabsInfo[1].title}
                paragraph={tabsInfo[1].paragraph}
              />
            </Grid>
            <Grid item xs={4}>
              <LandingInfoCard
                link={"/info/about-us"}
                title={tabsInfo[2].title}
                paragraph={tabsInfo[2].paragraph}
              />
            </Grid>
          </Grid>
        </div>

        {/* Big block of advs in lower page */}

        <Card variant="ImgMediaCard" sx={{ my: 6 }}>
          <img src="https://picsum.photos/id/237/1200/600" alt="Ad media"></img>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
