import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import "./homePage.css";
import AdvSwiperBox from "../../components/imageSwipeBox.js"

const advImages = [
    {
        imgPath: "https://picsum.photos/200/300",
    },
    {
        imgPath: "https://picsum.photos/200/301",
    },
    {
        imgPath: "https://picsum.photos/200/302",
    },
    {
        imgPath: "https://picsum.photos/200/303",
    },
];

const HomePage = ({ props }) => {
    const theme = useTheme();

    // const [productData, setProductData] = React.useState({ images: Array(0) });
    // const [value, setValue] = React.useState("0");
    const params = useParams();

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // // Hook to get product data
    // React.useEffect(() => {
    //     getProductData(params.productId).then((productData) =>
    //         setProductData(productData)
    //     );
    // }, []);

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

            </div>
        </ThemeProvider>
    );
};

export default HomePage;
