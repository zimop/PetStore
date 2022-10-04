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
import TextField from '@mui/material/TextField';
import * as React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import "./checkout.css";

let quantity = 1;

const CheckoutItem = (props) => {
    const [buttonClicked, setButtonState] = React.useState(null);
    const handleButton = (quant) => {
        setButtonState(true);
        quantity = quant + 1;
        console.log(quantity);
    };
    const closeButton = () => {
        setButtonState(false);
    }
    
    return (
    <Grid item xs = {3}>
        <Card variant = "undefined">
            <div className = "picture">
            <CardMedia
                component="img"
                height= {300}
                image= 'https://picsum.photos/200/300'
                alt= 'This photo'
                sx = {{ objectFit: "contain" , width: 450}}
                className="productImage"

            /> 
            </div>   
            <CardContent>
            
                <div>
                    <Typography gutterBottom variant="h6">
                        This Photo
                    </Typography>
                </div>
                <div className = "productDetails-middle">
                    <div>
                        <Typography variant = "h4">
                            $99.99
                        </Typography>
                    </div>
                    <div className = "toggleQuantity">
                        
                        <TextField id="outlined-basic" value = {quantity} variant="outlined" sx={{width : 55}}/>
                        {buttonClicked ? closeButton() : null}
                        <ToggleButtonGroup
                        orientation="horizontal"
                            >
                            <ToggleButton value="less" aria-label="less" >
                                <RemoveIcon />
                            </ToggleButton>
                            <ToggleButton value="more" aria-label="more" onClick = {() => handleButton(quantity)}>
                                <AddIcon />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                
            </CardContent>
        </Card>
    </Grid>
    );
};

export default CheckoutItem