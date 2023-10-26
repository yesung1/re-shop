import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  cardMedia: {
    width: 100,
  },
  cardContent: {
    flex: 1,
  },
  quantityInput: {
    width: 80,
  },
  couponInput: {
    marginRight: theme.spacing(2),
  },
}));

function Cart() {
  const { cartItems, removeFromCart, changeQuantity, calculateTotal } =
    useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [total, setTotal] = useState(calculateTotal());
  const classes = useStyles();

  useEffect(() => {
    setTotal(calculateTotal());
  }, [cartItems, calculateTotal]);

  function applyCoupon() {
    const coupons = JSON.parse(localStorage.getItem("coupons")); // 로컬 스토리지에서 쿠폰 데이터를 불러옵니다.
    const coupon = coupons.find((c) => c.code === couponCode);

    if (coupon) {
      setTotal(calculateTotal() * (1 - coupon.discount));
      alert("Coupon applied!");
    } else {
      alert("Invalid coupon code.");
    }

    setCouponCode("");
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2">Your Shopping Cart</Typography>
      {cartItems.map((item) => (
        <Card key={item.id} className={classes.card}>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            className={classes.cardMedia}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h3">{item.name}</Typography>
            <Typography variant="subtitle1">${item.price}</Typography>
            <TextField
              type="number"
              inputProps={{ min: 1 }}
              value={item.quantity}
              onChange={(e) => changeQuantity(item.id, e.target.value)}
              label="Quantity"
              variant="outlined"
              margin="dense"
              className={classes.quantityInput}
            />
          </CardContent>
          <CardActions>
            <Button
              onClick={() => removeFromCart(item)}
              color="secondary"
              variant="contained"
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      ))}
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            label="Enter coupon code"
            variant="outlined"
            margin="dense"
            className={classes.couponInput}
          />
        </Grid>
        <Grid item>
          <Button onClick={applyCoupon} color="primary" variant="contained">
            Apply
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h3" style={{ marginTop: "1rem" }}>
        Total: ${total.toFixed(2)}
      </Typography>
    </div>
  );
}

export default Cart;
