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

import advImages from "./advImages/advImages";
import tabsInfo from "./staticPage/tabsInGlance.js";

import Ads5 from "./advImages/Homepage-ads5.png";
// import Ads6 from "./advImages/Homepage-ads6.png";
import { CardMedia, Typography } from "@mui/material";

const HomePage = ({ props }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* Background */}
      <div className="home-background">
        {/* catalogue-icons header */}
        <Typography variant="h2" style={{ marginBottom: "20px" }}>
          Browse Products by Category
        </Typography>
        <div className="catalogue-icons">
          <Grid container spacing={7} style={{ alignContent: "center" }}>
            <Grid item style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue/get-all-products"}>
                <Avatar sx={{ width: 50, height: 50 }}>All</Avatar>
              </CardActionArea>
            </Grid>
            <Grid item style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue/get-cat-products"}>
                <Avatar
                  src="./catalogueIcons/cat_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue/get-dog-products"}>
                <Avatar
                  src="./catalogueIcons/dog_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue/get-mouse-products"}>
                <Avatar
                  src="./catalogueIcons/mouse_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue/get-rabbit-products"}>
                <Avatar
                  src="./catalogueIcons/rabbit_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue/get-bird-products"}>
                <Avatar
                  src="./catalogueIcons/bird_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            <Grid item style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue/get-fish-products"}>
                <Avatar
                  src="./catalogueIcons/fish_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid>
            {/* <Grid item style={{ alignContent: "center" }}>
              <CardActionArea href={"/catalogue"}>
                <Avatar
                  src="./catalogueIcons/horse_face.png"
                  sx={{ width: 50, height: 50, borderRadius: 0 }}
                />
              </CardActionArea>
            </Grid> */}
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

        <Card
          variant="ImgMediaCard"
          sx={{ mt: 7, maxHeight: 400, maxWidth: 600 }}
        >
          <CardMedia
            style={{
              width: "auto",
              maxHeight: "400px",
            }}
            component="img"
            image={Ads5}
          />
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
