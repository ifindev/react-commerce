import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './styles'

const Cart = ({ cart }) => {
  const classes = useStyles()

  const isEmpty = cart.line_items !== undefined ? cart.line_items === 0 : false

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some!
    </Typography>
  )

  console.log(cart)

  const FilledCart = () =>
    !isEmpty && (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              {/* <CartItem /> */}
              <div>{item.name}</div>
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
            >
              Empty cart
            </Button>
            <Button
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
      </Container>
    </div>
  )
}

export default Cart
