import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: '5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    display: 'none',
  },
  uploadBtn: {
    marginBottom: '1rem',
  },
}))
export default useStyles
