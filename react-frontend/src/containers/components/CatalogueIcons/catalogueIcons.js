import React from "react";

import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import { Avatar } from "@mui/material";

import "./catalogueIcons.css";

const CatalogueIcons = (props) => {
  return (
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
              src="/catalogueIcons/cat_face.png"
              sx={{ width: 50, height: 50, borderRadius: 0 }}
            />
          </CardActionArea>
        </Grid>
        <Grid item style={{ alignContent: "center" }}>
          <CardActionArea href={"/catalogue/get-dog-products"}>
            <Avatar
              src="/catalogueIcons/dog_face.png"
              sx={{ width: 50, height: 50, borderRadius: 0 }}
            />
          </CardActionArea>
        </Grid>
        <Grid item style={{ alignContent: "center" }}>
          <CardActionArea href={"/catalogue/get-mouse-products"}>
            <Avatar
              src="/catalogueIcons/mouse_face.png"
              sx={{ width: 50, height: 50, borderRadius: 0 }}
            />
          </CardActionArea>
        </Grid>
        <Grid item style={{ alignContent: "center" }}>
          <CardActionArea href={"/catalogue/get-rabbit-products"}>
            <Avatar
              src="/catalogueIcons/rabbit_face.png"
              sx={{ width: 50, height: 50, borderRadius: 0 }}
            />
          </CardActionArea>
        </Grid>
        <Grid item style={{ alignContent: "center" }}>
          <CardActionArea href={"/catalogue/get-bird-products"}>
            <Avatar
              src="/catalogueIcons/bird_face.png"
              sx={{ width: 50, height: 50, borderRadius: 0 }}
            />
          </CardActionArea>
        </Grid>
        <Grid item style={{ alignContent: "center" }}>
          <CardActionArea href={"/catalogue/get-fish-products"}>
            <Avatar
              src="/catalogueIcons/fish_face.png"
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
  );
};

export default CatalogueIcons;
