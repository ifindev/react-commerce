import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles()

  const isEmpty =
    cart.line_items !== undefined ? cart.line_items.length === 0 : true

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{' '}
      <Link to="/">
        <strong>start adding some!</strong>
      </Link>
    </Typography>
  )

  console.log(cart)
  console.log(cart.line_items)

  const FilledCart = () => (
    <>
      <Grid container spacing={4}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  )

  if (!cart.line_items) return <div>Loading...</div>

  return (
    <div>
      <Container>
        <div className={classes.toolbar} />
        <Typography
          className={classes.title}
          variant="h3"
          style={{ marginLeft: '-10px' }}
        >
          Your Shopping Cart
        </Typography>
        <div style={{ marginTop: '20px' }} />
        {isEmpty ? <EmptyCart /> : <FilledCart />}
        <div className={classes.toolbar} />
      </Container>
    </div>
  )
}

export default Cart
