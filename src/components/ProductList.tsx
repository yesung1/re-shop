// src/components/ProductList.tsx
import React from "react";
import products from "../products.json";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProductList() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            className={classes.card}
            component={RouterLink}
            to={`/product/${product.id}`}
          >
            <CardMedia
              className={classes.media}
              image={product.image}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
