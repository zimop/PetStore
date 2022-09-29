
import useTheme from "../../../muiTheme";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import "./checkoutPage.css"

import CheckoutItem from '../../components/CheckoutItem';
//import ToggleButton from "../../components/ToggleButton";



const CheckoutPage = (props) => {

    return (
        <div>
            <div className = "box">
                <h1>Order Summary</h1>
                <CheckoutItem />
                <CheckoutItem />
            </div>
        </div>
    );
};

export default CheckoutPage;