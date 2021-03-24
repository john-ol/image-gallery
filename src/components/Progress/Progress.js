import React, { useEffect } from 'react'
import { LinearProgress, Box, Typography } from '@material-ui/core'
import useStyles from './styles'
import { useStorage } from './../../hooks/useStorage'
import { useSnackbar } from 'notistack'

export const Progress = ({ file, setFile, setInputVal }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const { progress, url } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
      setInputVal('')
      enqueueSnackbar('File successfully uploaded', { variant: 'success' })
    }
  }, [url, setFile, setInputVal, enqueueSnackbar])

  const LinearProgressWithLabel = (props) => {
    return (
      <Box className={classes.boxContainer}>
        <Box className={classes.boxProgress} mr={1}>
          <LinearProgress variant='determinate' {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant='body2' color='textSecondary'>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Box className={classes.progress}>
      <LinearProgressWithLabel variant='determinate' value={progress} />
    </Box>
  )
}
