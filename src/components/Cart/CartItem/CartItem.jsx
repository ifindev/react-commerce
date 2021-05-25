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
      <Card>
        <CardMedia
          image={item.media.source}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <div className={classes.buttons}>
            {/* <Button type="button" size="small">
              -
            </Button>
            <Button type="button" size="small">
              +
            </Button> */}
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
