import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              aria-label="Add to cart"
              onClick={() => onAddToCart(product.id, 1)}
            >
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
}

export default Product
