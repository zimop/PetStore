// About Us Page

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const AboutUsPage = (props) => {
  return (
    <Card sx={{ maxWidth: 900, my: 20, mx: "auto" }}>
      <CardMedia>
        <img
          src={require("./animations/90158-cat-book.gif")}
          style={{
            width: "30%",
            height: "100%",
            border: 0,
            display: "flex",
            margin: "auto",
            alt: "CatReadingGif",
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          About the PetShop Family
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign={"left"}>
          Here, our team members love your pet just as much as you do. We know
          they’re more than just pets, they’re part of the family. That’s why we
          and over 300 vets work together (with a promise) to care for them as
          if they were our own. We believe health and wellness isn’t about one
          thing, it’s about everything you do to care for your pet both
          physically and mentally. When it comes to pet food, we’ll always dish
          out the right advice.
        </Typography>
        <p></p>
        <Typography variant="body1" color="text.secondary" textAlign={"left"}>
          Our friendly team have perfected the science of meal-time, with over
          200,000 hours of training in nutrition, which makes us real foodies!
          So, we’ll always recommend a complete and balanced diet that gets the
          vet’s tick of approval - and your pet’s lick of approval! Parenting a
          pet is also about taking care of their health and safety with
          preventative care routines, products and services. We’re always by
          your side to help, tapping into our collaborating Vets for vet visits,
          vaccinations, and dental care to help them look and feel great! We
          believe the more we play, the better we bond! That’s why we have all
          the best toys for your pet’s busy life designed to keep them
          stimulated and physically active as they run, jump, claw, swim and
          chew!
        </Typography>
        <p></p>
        <Typography variant="body1" color="text.secondary" textAlign={"left"}>
          We know, more than anyone, that a little training goes a long way to
          making pets and their parents happier for life. Let us help you take
          the lead with all the positive reinforcements needed to establish good
          habits (like treats, leads and harnesses). And for all the new puppy
          parents out there, ask us about our Puppy School. And at the end of
          the day, creating a comfortable and safe environment is one of the
          most important jobs a Pet Parent has. So rest assured, we provide all
          the comfort they need, both inside and outside the home to relax, curl
          up, and dream about catching the postman...And maybe wake up to a
          haircut and blow-dry – just for good measure. So, to all the Pet
          Parents of Australia, here’s everything you’ll ever need to keep your
          pet healthy and happy for life - all under one woof!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutUsPage;
