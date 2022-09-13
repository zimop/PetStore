import React from "react"
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"
import { Card, CardActions, CardContent, CardMedia } from "@mui/material"
import Button from "@mui/material/Button"

import "./catalogue.css"

class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogueData: Array(0),
        }
    }

    componentDidMount() {
        getCatalogueData().then((catalogueData) => this.setState({ catalogueData: catalogueData }))
    }

    render() {
        let catalogueData = this.state.catalogueData;
        let catalogueItems = catalogueData.map((itemData) => {
            return (
                <Grid item xs={3}>
                    {getCardFromItem(itemData)}
                </Grid>
            )
        })
        return (
            <div style={{padding: "5%"}}>
                <Typography variant="h1">Catalogue</Typography>
                <Grid container spacing={2}>
                    {catalogueItems}
                </Grid>
            </div>    
        );
    }
}

const getCardFromItem = (itemData) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="350"
                image={itemData.productImage}
                alt={itemData.productName}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {itemData.productName}
                </Typography>
                <Typography variant="h5">
                    ${itemData.price.toFixed(2)}
                </Typography>
                <CardActions>
                    <div className="buttonContainer">
                        <Button className="fullWidthButton" variant="outlined" size="large">Add to Cart</Button>
                        <Button className="fullWidthButton" variant="contained" size="large">Buy Now</Button>
                    </div>
                </CardActions>
            </CardContent>
        </Card>
    )
}

const getCatalogueData = async () => {
    let placeholderObject = {
        productId: 0,
        productImage: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=640",
        productName: "Dog food",
        price: 7.99
    }
    let placeholderData = Array(10).fill(placeholderObject);
    return placeholderData
}

export default Catalogue;
