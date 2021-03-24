import React from 'react'
import Alert from '@material-ui/lab/Alert'

export const AlertMessage = ({ text }) => {
  return <Alert severity='warning'>{text}</Alert>
}
