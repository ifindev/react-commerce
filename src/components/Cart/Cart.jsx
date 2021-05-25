import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './styles'

const Cart = ({ cart }) => {
  const classes = useStyles()

  const isEmpty = cart.line_items.length === 0

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some!
    </Typography>
  )

  console.log(cart)

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            {/* <CartItem /> */}
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
    </>
  )

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
