import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./recommendationCard.css";

export default function RecommendationCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Container maxWidth="lg">
          <Grid container spacing={5} margin-bottom={5}>
            {/* First Card */}
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Link herf="/">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      src="https://picsum.photos/200/200"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Add To Cart</Button>
                      <Button size="small">View More</Button>
                    </CardActions>
                  </Card>
                </Link>
              </Box>
            </Grid>

            {/* Second Card */}
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Link herf="/">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      src="https://picsum.photos/200/201"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Add To Cart</Button>
                      <Button size="small">View More</Button>
                    </CardActions>
                  </Card>
                </Link>
              </Box>
            </Grid>

            {/* Third Card */}
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Link herf="/">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      src="https://picsum.photos/200/202"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Add To Cart</Button>
                      <Button size="small">View More</Button>
                    </CardActions>
                  </Card>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CardContent>

      <CardActions>
        <Button size="small" right>
          VIEW ALL
        </Button>
      </CardActions>
    </Card>
  );
}
