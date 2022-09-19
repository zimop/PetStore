import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material"
import Button from "@mui/material/Button"

const ItemCard = (props) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height={props.height}
                image={props.itemData.ProductImage}
                alt={props.itemData.ProductName}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.itemData.ProductName}
                </Typography>
                <Typography variant="h5">
                    ${props.itemData.Price.toFixed(2)}
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

export default ItemCard;