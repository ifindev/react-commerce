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

const CartItem = ({ item }) => {
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
            <IconButton>
              <RemoveCircle color="secondary" />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton>
              <AddCircle color="primary" />
            </IconButton>
          </div>
          <Button variant="contained" type="button" color="secondary">
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CartItem
