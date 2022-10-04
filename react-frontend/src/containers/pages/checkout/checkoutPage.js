
import useTheme from "../../../muiTheme";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import "./checkoutPage.css"
import Button from '@mui/material/Button';


import CheckoutItem from '../../components/CheckoutItem';
import OrderSummary from "../../components/orderSummary";
//import ToggleButton from "../../components/ToggleButton";



const CheckoutPage = (props) => {

    return (
    <div className = "all-items">
        <div className = "shopping-heading">
            <h1>Shopping Cart</h1>
            <div className = "moveBox">
                <div className = "shopping-cart">
                    <CheckoutItem quantity = {1}/>
                    <CheckoutItem />
                    <CheckoutItem />
                </div>
            </div>
            
        </div>
        <div className = "shopping-heading">
            <h1>Order Summary</h1>
            <div >
                <OrderSummary />
            </div>
            <div className = "button">
                <Button variant="contained" size = "large" sx = {{width: 500 , height: 50}}>Checkout</Button>
            </div>
        </div>
    </div>
    );
};

export default CheckoutPage;