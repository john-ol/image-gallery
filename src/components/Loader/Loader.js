import React from 'react'
import useStyles from './styles'
import { CircularProgress } from '@material-ui/core'

export const Loader = () => {
  const classes = useStyles()
  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  )
}
