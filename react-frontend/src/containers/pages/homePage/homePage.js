import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import "./homePage.css";
import AdvSwiperBox from "../../components/imageSwipeBox.js"
import LandingInfoCard from "../../components/landingInfoCard.js"

import advImages from "./advImages"
import infoTabs from "./infoTabs.js"


const HomePage = ({ props }) => {
    const theme = useTheme();
    // const advImages = AdvImages();
    // const infoTabs = InfoTabs();

    return (
        <ThemeProvider theme={theme}>
            {/* Background */}
            <div className="home-background">
                {/* catalogue-icons header*/}
                <div className="catalogue-icons">
                    <Grid container spacing={2}>
                        <Grid item xs={1.5} style={{ alignContent: "center" }}>
                            <Avatar
                                src="/catalogueIcons/cat_face.png"
                                sx={{ width: 80, height: 80, align: "center", justify: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5} style={{ alignContent: "center" }}>
                            <Avatar
                                src="/catalogueIcons/dog_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5} style={{ alignContent: "center" }}>
                            <Avatar
                                src="/catalogueIcons/fox_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5} style={{ alignContent: "center" }}>
                            <Avatar
                                src="/catalogueIcons/horse_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5} style={{ alignContent: "center" }}>
                            <Avatar
                                src="/catalogueIcons/mouse_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5} style={{ alignContent: "center" }}>
                            <Avatar
                                src="/catalogueIcons/rabbit_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5} style={{ alignContent: "center" }}>
                            <Avatar
                                src="/catalogueIcons/frog_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5} style={{ alignContent: "center" }}>
                            <Avatar
                                src="/catalogueIcons/dragon_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                    </Grid>
                </div>

                {/* advSwipeBox header*/}
                <div className="adv-swipe-box">
                    <AdvSwiperBox
                        width={600}
                        height={400}
                        images={advImages} />
                </div>


                {/* Three clickable info tabs */}
                <div className="info-tabs">
                    <Grid container spacing={6}>
                        <Grid item xs={4}>
                            <LandingInfoCard title={infoTabs[0].title} paragraph={infoTabs[0].paragraph} />
                        </Grid>
                        <Grid item xs={4}>
                            <LandingInfoCard title={infoTabs[1].title} paragraph={infoTabs[1].paragraph} />
                        </Grid>
                        <Grid item xs={4}>
                            <LandingInfoCard title={infoTabs[2].title} paragraph={infoTabs[2].paragraph} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default HomePage;
