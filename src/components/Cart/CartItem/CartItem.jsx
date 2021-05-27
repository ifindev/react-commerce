import React from 'react'
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core'
import { AddCircle, RemoveCircle } from '@material-ui/icons'

import useStyles from './styles'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          image={item.media.source}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <div>
            <Typography variant="h5">
              {' '}
              <strong> {item.name}</strong>
            </Typography>
          </div>
          <div style={{ marginTop: '10px' }}>
            <Typography variant="h6">
              {item.line_total.formatted_with_symbol}
            </Typography>
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <IconButton
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              <RemoveCircle color="secondary" />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              <AddCircle color="primary" />
            </IconButton>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => onRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CartItem
