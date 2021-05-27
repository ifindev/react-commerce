import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  media: {
    height: 260,
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '470px',
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardActions: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))
