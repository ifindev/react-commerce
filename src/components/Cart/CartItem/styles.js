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
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}))
