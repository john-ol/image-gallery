import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    marginRight: '2rem',
  },
  logo: {
    textTransform: 'uppercase',
  },
}))

export default useStyles
