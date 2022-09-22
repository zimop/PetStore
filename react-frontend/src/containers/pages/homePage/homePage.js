import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';

import ProductImagesSwiper from "../../components/imageSwipeBox";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import "./homePage.css";
// import catalogueIconCat from "../../../../public/catalogueIcons/cat_face.png";
// import catalogueIconDog from "../../../../public/catalogueIcons/dog_face.png";
// import catalogueIconFox from "../../../../public/catalogueIcons/fox_face.png";
// import catalogueIconHorse from "../../../../public/catalogueIcons/horse_face.png";
// import catalogueIconMouse from "../../../../public/catalogueIcons/mouse_face.png";
// import catalogueIconRabbit from "../../../../public/catalogueIcons/rabbit_face.png";
// import catalogueIconFrog from "../../../../public/catalogueIcons/frog_face.png";
// import catalogueIconDragon from "../../../../public/catalogueIcons/dragon_face.png";






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
                        <Grid item xs={1.5}>
                            <Avatar
                                src="/catalogueIcons/cat_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar
                                src="/catalogueIcons/dog_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar
                                src="/catalogueIcons/fox_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar
                                src="/catalogueIcons/horse_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar
                                src="/catalogueIcons/mouse_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar
                                src="/catalogueIcons/rabbit_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar
                                src="/catalogueIcons/frog_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>
                        <Grid item xs={1.5}>
                            <Avatar
                                src="/catalogueIcons/dragon_face.png"
                                sx={{ width: 80, height: 80, align: "center" }}
                            />
                        </Grid>


                    </Grid>
                </div>
            </div>

        </ThemeProvider>
    );
};

export default HomePage;

