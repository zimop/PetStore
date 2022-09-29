import Typography from "@mui/material/Typography";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";

import Grid from '@mui/material/Grid';

import ToggleButtonComp from "./ToggleButton";


import "./checkout.css";


const CheckoutItem = (props) => {
     
    return (
    <Grid item xs = {3}>
        <Card variant = "undefined">
            <CardMedia
                component="img"
                height= {300}
                image= 'https://picsum.photos/200/300'
                alt= 'This photo'
                sx = {{ objectFit: "contain" , width: 350}}
                className="productImage"
            />    
            <CardContent>
                <div>
                    <Typography gutterBottom variant="h6">
                        'This Photo'
                    </Typography>
                </div>
                <div className = "productDetails-middle">
                    <div>
                        <Typography variant = "h4">
                            $99.99
                        </Typography>
                    </div>
                    <div>
                        <ToggleButtonComp />
                    </div>
                </div>
                
            </CardContent>
        </Card>
    </Grid>
    );
};

export default CheckoutItem